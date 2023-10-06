import {Link} from "react-router-dom"

import  Navbar  from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'

import img from '../../../favicon/favicon-32x32.png'
import CartWirdget from '../CartWidget/CartWirdget'


const NavBar = () => {
   
    return (
      <Navbar expand='' className="container-fluid fixed-top border border-primary-subtle bg-info-subtle">
        <Container fluid>
          <Link to='/'>
            <img src={img} alt='imagen'/>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' className="btn btn-outline-danger mt-2">Inicio</Link>
              <Link to="/category/juegos" className="btn btn-outline-danger mt-2">Juegos</Link>
              <Link to="/category/juegos de mesa" className="btn btn-outline-danger mt-2">Juegos de mesa</Link>
            </Nav>
            <Nav>
                <Link to='/cart' >
                  <CartWirdget />
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar