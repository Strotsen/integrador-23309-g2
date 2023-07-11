import {LandingPage} from "./Pages/LandingPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Create} from "./Components/Create";
import {Edit} from "./Components/Edit";
import {NavScroll1} from "../src/Components/Navbar.jsx"
import { Footer } from "../src/Components/Footer.jsx";
import './App.css';
import {Ubicacion} from "./Components/Ubicacion";
import { QuienesSomos } from "./Components/QuienesSomos";
import { Descuentos} from "./Components/Descuentos";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavScroll1/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/create" element ={<Create/>}/>  
        <Route path="/edit/:id" element ={<Edit/>}/>
        <Route path="/ubicacion" element ={<Ubicacion/>}/> 
        <Route path="/quienessomos" element ={<QuienesSomos/>}/> 
        <Route path="/descuentos" element ={<Descuentos/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
        
    </div>
  );
}

export default App;



