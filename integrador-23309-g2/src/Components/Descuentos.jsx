import Carousel from 'react-bootstrap/Carousel';
import "./Descuentos.css"



export const Descuentos = () => {
  

  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/a1.jpeg"
          alt="30% descuento"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/a2.jpeg"
          alt="50% descuento"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/a3.jpeg"
          alt="10% descuento"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



  )

}



export default Descuentos;


