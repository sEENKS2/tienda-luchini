import '../../item.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const {img, name, price, description, category, stock} = product

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (count) => {
        setQuantity(count)
    }

    return (

        <div className='polaroid asd'>
            <img src={img} alt={name}></img>
            <div className='container asd'>
                <h1 className='itemFuente asd'>Item: {name}</h1>
                <h1 className='itemFuente asd'>Precio: {price}</h1>
                <h1 className='itemFuente asd'>Desc: {description}</h1>
                <h1 className='itemFuente asd'>Categoria: {category}</h1>
                <h1 className='itemFuente asd'>Disponible: {stock}</h1>
            </div>
            { quantity > 0 ? <Link className='container button' to={'/cart'}>Finalizar compra</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd}/>}
        </div>

    )

}

export default ItemDetail