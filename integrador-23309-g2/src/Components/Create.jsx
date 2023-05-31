import { useState } from "react";
import {useNavigate}from "react-router-dom"
import {collection,addDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

export const Create = () =>{
    const [food, setFood] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

const navigate = useNavigate()

const restaurantCollection = collection(db,"restaurant")

const createFood = async(e)=>{
    e.preventDefault()
    await addDoc(restaurantCollection,{
        Nombre: food,
        Ingredientes: description,
        Precio: price,
    })
    navigate("/")
}

    return(
    <div className="container">
        <div className="row">
            <div className="col">
                <h1>create Book</h1>
               <form onSubmit={createFood}>
                <div className="mb-3">
                 <label className="form-label">Comida</label>   
                 <input 
                 value={food}
                 onChange={(e)=>setFood(e.target.value)}
                 className="form-control"
                 type="text"/>
                </div>

                <div className="mb-3">
                 <label className="form-label">Ingredientes</label>   
                 <input 
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                 className="form-control"
                 type="text"/>
                </div>

                <div className="mb-3">
                 <label className="form-label">Precio</label>   
                 <input 
                 value={price}
                 onChange={(e)=>setPrice(e.target.value)}
                 className="form-control"
                 type="number"/>
                </div>
<button type="submit" className="btn btn-success">Crear Comida</button>
               </form>
            </div>
        </div>
    </div>
    )
}