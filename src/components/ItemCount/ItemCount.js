import { useState } from "react";

const ItemCount = () => {
    const [ count, setCount] = useState(0)

    const decrement = () => {
        if (count > -5){
            setCount((count) => count -1 )
        }
    }

    const increment = () => {
        if (count < 5)
        setCount((count) => count + 1)
    }

    return(
        <div style={{display: 'flex'}}>
            <button onClick={decrement}> - </button>
            <h1> {count} </h1>
            <button onClick={increment}> + </button>
        </div>
    )
}

export default ItemCount