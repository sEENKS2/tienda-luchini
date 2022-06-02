import { useState, useEffect } from "react"
import { getProductById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProductById] = useState([])

    const {productId} = useParams()
    
    useEffect(() => {
        getProductById(productId).then(response => {
            setProductById(response)
        })
    }, [])

    return(
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer