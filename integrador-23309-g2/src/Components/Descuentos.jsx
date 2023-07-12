import Carousel from 'react-bootstrap/Carousel';
import "./Descuentos.css"



export const Descuentos = () => {
  

  return (

    

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./a1.jpeg"
          alt="30% descuento"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./a2.jpeg"
          alt="50% descuento"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./a3.jpeg"
          alt="10% descuento"
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


