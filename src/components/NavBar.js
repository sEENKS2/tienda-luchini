import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const Navegacion = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed='top'>
        <h1 className='alm'>Almacen La Martina</h1>
        <Container>
          <Link to="/"><button className='button'>Inicio</button></Link>
          <Link to="/category/comida"><button className='button'>Comida</button></Link>
          <Link to="/category/bebidas"><button className='button'>Bebidas</button></Link>
          <Link to="/category/limpieza"><button className='button'>Limpieza</button></Link>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default Navegacion