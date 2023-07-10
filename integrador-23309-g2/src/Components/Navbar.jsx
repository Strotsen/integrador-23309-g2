import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
            <NavDropdown title="+" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Quiénes somos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Contacto</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

