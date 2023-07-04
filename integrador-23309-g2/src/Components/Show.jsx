import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import {collection,getDocs,deleteDoc,doc}from "firebase/firestore"
import{db} from "../firebaseConfig/firebase.js"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import {useQuery} from "../hooks/useQuery.jsx"



const mySwal = withReactContent (Swal)

export const Show =()=> {
    // 1 configurar los hooks
    const [restaurant, setRestaurant] = useState ([])
   /*  const [filtrar, setfiltrar]= useState ([]) */
    //  2 referencia a la bd de firestores
    const restaurantCollection = collection(db,"restaurant")
    // 3 funcion para mostrar todos os docs
    const getRestaurant = async ()=> {
    const data = await getDocs (restaurantCollection)
    console.log(data.docs);
    setRestaurant(
        data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    )
 
    }
    console.log(restaurant);
  //13 utilizo useQuery() para obtener lo que buscamos
    const query = useQuery()
    const search = query.get("search")
/*    console.log(search);  */


      // 4 funcion para eliminar un doc

      const deleteRestaurant = async (id)=>{ 
        const restaurantDoc = doc(db,"restaurant",id)
        await deleteDoc (restaurantDoc) 
        getRestaurant()
      }
      // 5 funcion para la confirmacion de sweet alert 
      const confirmDelete =(id) => { Swal.fire({
        title: '¿Estas seguro?',
        text: "No podes Revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si quiero borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteRestaurant(id)
             //llamar a la funcion de eliminar
             Swal.fire(
            'Borrado!',
            'Borraste el plato',
            'success'
          )
        }
      })
         
      }


function searching  (search) {

        var filtro = restaurant.filter(() => {
          if (restaurant.Nombre.includes(search)
          || restaurant.Ingredientes.includes(search)
        ) 
        setRestaurant(filtro);
       });
    
      }
        useEffect(()=>{
        getRestaurant()
      },[])   
    

      //6 useEFect
      useEffect(()=>{
        searching()
      },[search])

      // 7 devolvemos la vista a nuestro componenete

 
return(
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2 col-8 mx-auto justify-content-md-end">
              <Link to = "/create" className="btn btn-outline-success btn-lg mt-2 mb-2" >New</Link>

            </div>
            <table className="table table-bordered border-secondary table-success table-striped table-hover"> 
            <thead>
              <tr>
                <th>Food </th>
                <th>Description</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurant.map((restaurant)=>(
                <tr key={restaurant.id}>
                  <td>{restaurant.Nombre} </td>
                  <td>{restaurant.Ingredientes} </td>
                  <td>{restaurant.Precio} </td>
                  <td>
                    
                    <Link to ={`/edit/${restaurant.id}`}className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                  <button onClick={()=>{confirmDelete(restaurant.id)}} className="btn btn-secondary"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}

            </tbody>

            </table>

          </div>

        </div>
      </div>
    </>
)


}