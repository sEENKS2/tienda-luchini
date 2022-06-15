import '../../item.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import './ItemDetail.css'


const ItemDetail = ({id, name, img, category, description, price, stock}) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        addItem({ id, name, price, quantity })
    }

    return (

        <div className='polaroid list'>
            <img src={img} alt={name}></img>
            <div className='container list'>
                <h1 className='itemFuente list'>Item: {name}</h1>
                <h1 className='itemFuente list'>Precio: ${price}</h1>
                <h1 className='itemFuente list'>Desc: {description}</h1>
                <h1 className='itemFuente list'>Categoria: {category}</h1>
                <h1 className='itemFuente list'>Disponible: {stock}</h1>
            </div>
            { quantity > 0 
            ? <Link className='container' to={'/cart'}><button className='button1'>Ir al carrito</button></Link> 
            : <ItemCount stock={stock} onConfirm={handleOnAdd} initial={getProduct(id)?.quantity}/>}
        </div>

    )

}

export default ItemDetail