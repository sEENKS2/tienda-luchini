import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import '../../item.css'


const Cart = () => {

    const { cart, removeItem, cartClear, getQuantity, total } = useContext(CartContext)

    const quantity = getQuantity()

    if (quantity > 0) {

        return (
            <div className="titu">
                <h1>Carrito</h1>
                <div>
                    {cart.map(prod => {
                        return (
                            <div key={prod.id} className="container polaroid">
                                <div className="itemFuente container cart">
                                    <div>{prod.name}</div>
                                    <div>Cantidad: {prod.quantity}</div>
                                    <div>Precio por unidad: ${prod.price}</div>
                                    <div>Subtotal: ${prod.price * prod.quantity}</div>
                                    <br />
                                    <button className="button1" onClick={() => removeItem(prod.id)}><span>X</span></button>
                                </div>
                            </div>
                        )
                    })}
                    <br/>
                    <h1>Total: ${total}</h1>
                    <br/>
                        <Link to='/checkout'><button className="button1">Finalizar compra</button></Link>
                        <button className="button1" onClick={() => cartClear()}>Limpiar carrito</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className="titu">¡Tu carrito esta vacio!</h1>
                <br/>
                <div>
                    <Link to='/'><button className="button1">Ver productos</button></Link>
                </div>
            </div>
        )
    }

}

export default Cart