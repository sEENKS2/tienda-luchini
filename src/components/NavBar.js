import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import "./NavBar.css"

const Navegacion = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

    return (
        <Navbar bg="dark" variant="dark" fixed='top'>
        <h1 className='alm'>Almacen La Martina</h1>
        <Container>
          <Link to="/"><button className='button'>Inicio</button></Link>
          <Link to="/category/comida"><button className='button'>Comida</button></Link>
          <Link to="/category/bebidas"><button className='button'>Bebidas</button></Link>
          <Link to="/category/limpieza"><button className='button'>Limpieza</button></Link>
          {quantity > 0 && <CartWidget/>}
        </Container>
      </Navbar>
    )
}

export default Navegacion