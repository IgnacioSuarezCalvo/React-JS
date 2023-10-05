import {Link} from "react-router-dom"

import  Navbar  from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import  NavDropdown  from 'react-bootstrap/NavDropdown'




import img from '../../../favicon/favicon-32x32.png'
import CartWirdget from '../CartWidget/CartWirdget'


const NavBar = () => {
   
    return (
      <Navbar expand='md' className="" bg="white">
        <Container fluid>
          <Link to='/'>
            <img src={img} alt='imagen'/>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to='/'>Inicio</Link>
              <Link to="/category/juegos">Juegos</Link>
              <Link to="/category/juegos de mesa">Juegos de mesa</Link>

              
                {/* <NavDropdown title="Productos" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Juegos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Juegos de mesa</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Juegos de cartas</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Juegos a pedido</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Nav>
                <Link to='/cart'>
                  <CartWirdget />
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar