import {LandingPage} from "./Pages/LandingPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Create} from "./Components/Create";
import './App.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage/>} />
  <Route path="/create" element ={<Create/>}/>  
  <Route path="/edit/:id" element ="Componenete Edito" />

</Routes>

     </BrowserRouter>
        
    </div>
  );
}

export default App;
