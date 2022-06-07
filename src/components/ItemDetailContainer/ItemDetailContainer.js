import { useState, useEffect } from "react"
import { getProductById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProductById] = useState([])

    const [loading, setloading] = useState(true)

    const { productId } = useParams()
    
    useEffect(() => {
        getProductById(productId).then(response => {
            setProductById(response)
        }).finally(() => {
            setloading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer