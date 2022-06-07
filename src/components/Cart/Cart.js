import { useContext } from "react"
import CartContext from "../../context/CartContext"
import '../../item.css'


const Cart = () => {

    const { cart, removeItem, cartClear } = useContext(CartContext)

    return (
        <div className="titu">
            <h1>Carrito</h1>
            <div>
                {cart.map(prod => {
                    return (
                        <div key={prod.id} className="container polaroid">
                            <div className="itemFuente cart">
                                <div>{prod.name}</div>
                                <div>Cantidad: {prod.quantity}</div>
                                <div>Precio por unidad: {prod.price}</div>
                                <br/>
                                <button className="button2" onClick={() => removeItem(prod.id)}><span>X</span></button>
                            </div>
                            <br/>
                        </div>

                    )
                })}
                <button className="button2" onClick={() => cartClear()}><span>Limpiar carrito</span></button>
            </div>
        </div>
    )
}

export default Cart