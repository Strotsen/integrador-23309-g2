import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"

import { db,storage } from "../firebaseConfig/firebase.js";

export const Edit = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imageURL,setImageURL] = useState("")

  const navigate = useNavigate();

  const { id } = useParams();

  //funcion que actualiza un documento (libro)

  const update = async (e) => {
    e.preventDefault();
    const restaurantDoc = doc(db, "restaurant", id);
    const data = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen:imageURL
    };
    await updateDoc(restaurantDoc, data);
    navigate("/");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `documentos/${id}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    console.log(url);
    setImageURL(url);
  };

  const getRestaurantById = async () => {

    const restaurantDoc = await getDoc(doc(db, "restaurant", id));
    if (restaurantDoc.exists()) {
      setNombre(restaurantDoc.data().nombre);
      setDescripcion(restaurantDoc.data().descripcion);
      setPrecio(restaurantDoc.data().precio);
      
    } else {
      console.log("La comida no existe");
    }
  }

  useEffect(() => {
    getRestaurantById(id);// eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit Book</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Comida</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Ingredientes</label>
              <input
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Imagen</label>
              <input
                onChange={handleImageUpload}
                type="file"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};