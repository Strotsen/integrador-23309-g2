import {LandingPage} from "./Pages/LandingPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Create} from "./Components/Create";
import {Edit} from "./Components/Edit";
import {NavScroll1} from "../src/Components/Navbar.jsx"
import { Footer } from "../src/Components/Footer.jsx";
import './App.css';
import {Ubicacion} from "./Components/Ubicacion";


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
      </Routes>
      <Footer/>
    </BrowserRouter>
        
    </div>
  );
}

export default App;



