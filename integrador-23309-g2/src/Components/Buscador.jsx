import { FaSearch } from "react-icons/fa";
import "./Buscador.css" 
import { useState } from "react"; // 1 importar useState
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Buscador = () => {

  const [txtBuscador,setTxtBuscador] = useState ("")
  const [txtResultados,setTxtResultado]=useState([])
  const [showModal, setShowModal] = useState(false);


  //3 realizamos la funcion para controlar el submit (cuando apretamos el boton buscar)
  const handleSubmit = async(e) =>{
    e.preventDefault(); // 5 no se realiza el submit
    // consultar con firebase
    const q = query(collection(db,"restaurant"),where("nombre","==",txtBuscador));
    const querySnapshot = await getDocs(q);
    //obtener resultados de la consulta
    const results=[]
    querySnapshot.forEach((doc)=>{
      //aaceder a los datos del documento y agregarlos a los resultados
      results.push(doc.data())
    })
    //actualizar los resultados en el estado
    setTxtResultado(results);
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  return (
    <div>
    <form className="containerBuscador" onSubmit={handleSubmit}> {/* 4 ponemos el evento en el form handleSubmit */}
      <div className="cajaBuscador">
        <input 
        value={txtBuscador}
        onChange={(e)=>setTxtBuscador(e.target.value)}
    /* 6 mostramos como controlamos un input {(e)=>setTxtBuscador(e.target.value.toUpperCase())} */
        type="text" 
        className="inputBuscador" 
        placeholder="Busque aquí una receta"
        />
        <button type="submit" className="botonBuscador">
          <FaSearch />
        </button>
      </div>
    </form>
    {txtResultados.length>0 && (
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Menú</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {txtResultados.map((resultado) => (
            <div key={resultado.id} className="modal-Menu">
              <img src={resultado.imagen} alt="cosito" />
              <h4>{resultado.nombre}</h4>
              <p>{resultado.descripcion}</p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      )}
    </div>
  );
};
