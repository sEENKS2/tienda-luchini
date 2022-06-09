import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"

import '../../item.css'
import '../../App.css'
import { db } from "../../services/firebase"

const ItemListContainer = ({ greeting, handlePage }) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams ()

    useEffect(() => {
        setLoading(true)

        const collecionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collecionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }


    return(
            <div>
                <h1 className="titu">{ greeting }</h1>
                <ItemList products={products} handlePage={handlePage}/>
            </div>

    )
}

export default ItemListContainer