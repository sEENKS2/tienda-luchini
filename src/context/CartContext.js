import { useState, createContext, useEffect } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [total, setTotal] = useState(0)

    useEffect (() => {
        UpdateTotal()
    }, [cart])

    const initial_state = []

    const addItem = (productAdd) => {

        if (!isInCart(productAdd.id)) {
            setCart([...cart, productAdd])
        } else {
            const newCart = cart.map(prod => {
                if (prod.id === productAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newCart)
        }
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const cartClear = () => {
        setCart(initial_state)
    }

    const UpdateTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        setTotal(total)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, getProduct, removeItem, cartClear, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext