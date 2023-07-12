import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavScroll1=()=> {
return (
    <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
        <Container fluid className='navBar'>
        <Navbar.Brand href="/">La Angioplastía</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="descuentos">Descuentos</Nav.Link>
            <Nav.Link href="/ubicacion" target='blanck'>Ubicación</Nav.Link>
            <Nav.Link href="/quienessomos">Quiénes somos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

