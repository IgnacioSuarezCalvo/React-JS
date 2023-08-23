import  Navbar  from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from 'react-bootstrap/NavDropdown'



import img from '../../../src/assets/react.svg'
import CartWirdget from '../CartWidget/CartWirdget'


const NavBar = () => {
    return (
      <Navbar fixed='top' expand='md' className="" bg="white">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={img} alt='imagen'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mercaderia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Hoodies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Opiniones
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              
              <Nav.Link href="#deets">
                
                <CartWirdget saludo={'Practica'}/>
              
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                Perfil
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar