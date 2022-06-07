import { useState } from "react";
import "../ItemDetail/ItemDetail.css"

const ItemCount = ({onConfirm, stock = 0, initial = 1}) => {
    const [ quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const increment = () => {
        if (quantity < stock)
        setQuantity(quantity + 1)
    }
    
    return(
        <div className="container list">
            <div className="container list">
                <button className='button1' onClick={decrement}> - </button>
                <h1> {quantity} </h1>
                <button className='button1' onClick={increment}> + </button>
            </div>
            <button className='button1' onClick={() => onConfirm(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount