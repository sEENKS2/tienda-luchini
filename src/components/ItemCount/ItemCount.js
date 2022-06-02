import { useState } from "react";

const ItemCount = ({onConfirm, stock, initial = 1}) => {
    const [ count, setCount] = useState(initial)

    const decrement = () => {
            setCount(count - 1)
    }

    const increment = () => {
        if (count < stock)
        setCount(count + 1)
    }

    return(
        <div className="container asd">
            <div className="container asd">
                <button className="button" onClick={decrement}> - </button>
                <h1> {count} </h1>
                <button className="button" onClick={increment}> + </button>
            </div>
            <button className='button' onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount