import React from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from "../firebaseConfig/firebase.js";

export const Create = () => {
  const navigate = useNavigate();
  const restaurantCollection = collection(db, "restaurant");

  const createFood = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const descripcion = e.target.descripcion.value;
    const precio = e.target.precio.value;
    const fileImg = e.target.imagen.files[0];
    let urlImg;

    if (fileImg) {
      const refFile = ref(storage, `documentos/${fileImg.name}`);
      await uploadBytes(refFile, fileImg);
      urlImg = await getDownloadURL(refFile);
    }

    const newComida = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: urlImg,
    };

    await addDoc(restaurantCollection, { ...newComida });
    navigate("/");
  };

  return (
    <div className="card card-body mt-3">
      <h3 className="text-center">Agregar comidas</h3>
      <form onSubmit={createFood}>
        <label>Nombre</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ingresar comida"
            id="nombre"
            name="nombre"
            className="form-control mt-1"
          />
        </div>

        <label>Descripción</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ingrese descripción"
            id="descripcion"
            name="descripcion"
            className="form-control mt-1"
          />
        </div>

        <label>Precio</label>
        <div className="form-group">
          <input
            type="number"
            placeholder="Ingrese precio"
            id="precio"
            name="precio"
            className="form-control mt-1"
          />
        </div>

        <label>Agregar imagen</label>
        <div className="form-group">
          <input
            type="file"
            id="imagen"
            name="imagen"
            placeholder="Agregar imagen"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-3 form-control">Guardar</button>
      </form>
    </div>
  );
};
