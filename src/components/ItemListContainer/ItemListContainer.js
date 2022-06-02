import { useState, useEffect } from "react"
import { getProducts } from '../../asyncmock'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../asyncmock"
import '../../item.css'

const ItemListContainer = ({ greeting, handlePage }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams ()
    console.log(categoryId)

    useEffect(() => {

        if(!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            })
        }

    }, [categoryId])

    return(
            <div>
                <h1>{ greeting }</h1>
                <ItemList products={products} handlePage={handlePage}/>
            </div>

    )
}

export default ItemListContainer