import Carousel from 'react-bootstrap/Carousel';
import "./Descuentos.css"



export const Descuentos = () => {
  

  return (

    

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./a1.png"
          alt="descuento"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./a2.png"
          alt="descuento"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./a3.png"
          alt="descuento"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



  )

}



export default Descuentos;


