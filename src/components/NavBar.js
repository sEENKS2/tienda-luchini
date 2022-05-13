import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css'

const Navegacion = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
        <Navbar.Brand href="#home">Almacen La Martina</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#comida">Comida</Nav.Link>
          <Nav.Link href="#bebidas">Bebidas</Nav.Link>
          <Nav.Link href="#limpieza">Limpieza</Nav.Link>
        </Nav>
        <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default Navegacion