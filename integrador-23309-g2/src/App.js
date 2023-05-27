import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Show } from "./Components/Show";
import {Buscador} from "./Components/Buscador";
import {Create} from "./Components/Create";
import './App.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
<Routes>
  <Route path="/" element ={<Show/>}/>
  <Route path="/Buscador" element ={<Buscador/>}/>
  <Route path="/create" element ={<Create/>}/>  
  <Route path="/edit/:id" element ="Componenete Edito" />

</Routes>

     </BrowserRouter>
        
    </div>
  );
}

export default App;
