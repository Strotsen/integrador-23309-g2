import './Footer.css'

export const Footer =()=>{
    return(
        <>
            <div className="footer">
                <div className="div-footer-logo">
                    <div>La Angioplastia</div>
                </div>
                <div className="div-footer-contenido">
                    <div>
                        <ul>
                            <li>Contacto:&nbsp;&nbsp;&nbsp;</li>
                            <li>Calle falsa 123, CABA&nbsp;</li>
                            <li>&nbsp;&nbsp;(011) 0303-456&nbsp;&nbsp;</li>
                            <li>&nbsp;laangioplastia@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='footer-redes'>
                                <li><i class="fa-brands fa-instagram fa-xl" id='instagram'></i></li>
                                <li><i class="fa-brands fa-facebook fa-xl" id='facebook'></i></li>
                                <li><i class="fa-brands fa-twitter fa-xl" id='twitter'></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}