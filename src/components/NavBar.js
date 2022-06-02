import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CartWidget from './CartWidget/CartWidget';

const Navegacion = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
        <Navbar.Brand href="/">Almacen La Martina</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/category/comida">Comida</Nav.Link>
          <Nav.Link href="/category/bebidas">Bebidas</Nav.Link>
          <Nav.Link href="/category/limpieza">Limpieza</Nav.Link>
        </Nav>
        <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default Navegacion