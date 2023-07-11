import "./QuienesSomos.css"
import { Link } from "react-router-dom";
export const QuienesSomos=()=> {
    return (
        <div id="div_quienessomos">

        <div id="img_text">
          <h1 id="titulo_inicio">La Angioplastía</h1>
          <p>Pioneros en el Comer hasta Morir</p>

          <div id="div_interno">
            <p>La Angioplastía fue creado como un Tenedor Libre, donde podes acercarte a disfrutar de todo lo que se te ocurra comer.
Surge como una propuesta innovadora para el buen y excesivo comer.
<br></br>
Hoy, la Angioplastía, abre la oportunidad también a que se realicen pedidos a la carta o por delivery en sus diferentes sucursales. De forma que cada vez más personas puedan acceder a la oportunidad de excederse comiendo.
</p>
          
          <div>
            <Link to="https://www.youtube.com/watch?v=OOaX3FJnstw" target="_blank">
              <button id="btn-video">Conocé más</button>
            </Link>
          </div>
          </div>

          </div>
        </div>

    );}