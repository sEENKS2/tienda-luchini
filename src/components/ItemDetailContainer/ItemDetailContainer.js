import { useState, useEffect } from "react"
import { getProductById } from '../../asyncmock'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ( {id} ) => {
    const [product, setProductById] = useState([])

    useEffect(() => {
        getProductById().then(response => {
            let n1 = response.find(elemento => elemento.id == id)
            setProductById(n1)
            console.log(n1)
        })
    }, [])
    console.log(id)
    return(
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer