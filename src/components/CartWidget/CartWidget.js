import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()
    console.log(quantity)

    return (
        <Link to='/cart'><button className="button">
            <img
                src="../../images/cart.svg"
                alt="cart-widget"
                width="50"
                height="50" />
            {quantity}
        </button>
        </Link>
    );
}

export default CartWidget