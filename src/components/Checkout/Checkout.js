import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CartContext from "../../context/CartContext";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../services/firebase";
import 'react-toastify/dist/ReactToastify.css';
import '../Checkout/checkout.css'

const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const {cart, total, cartClear} = useContext(CartContext)

    const {register, handleSubmit, reset, formState, formState: {errors}} = useForm()

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        };
    }, [formState, reset]);

    const onSubmit = (buyer) => {

        setLoading(true)

        const objOrder = {
            buyer: buyer,
            items: cart,
            total: total
        }

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const batch = writeBatch(db)

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)

                } else {
                    return Promise.reject({ type: 'sin_stock', products: outOfStock})
                }
            }).then(({id}) => {
                batch.commit()
                cartClear()
                toast.success('¡Se genero la orden con éxito!')
                toast.success(`Nro de orden: ${id}`)
            }).catch(error => {
                toast.warning(error)
                toast.warning('Algunos productos no tienen stock')
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Generando orden...</h1>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="datos">Complete con sus datos.</h1>
                <input {...register("nombre", {required: 'Campo obligatorio.'})} placeholder="Nombre*"></input>
                <p>{errors.nombre?.message}</p>
                <input {...register("apellido", {required: 'Campo obligatorio.'})} placeholder="Apellido*"></input>
                <p>{errors.apellido?.message}</p>
                <input {...register("telefono", {required: 'Campo obligatorio.'})} placeholder="Telefono*"></input>
                <p>{errors.telefono?.message}</p>
                <input {...register("email", {required: 'Campo obligatorio.'})} placeholder="Correo Electronico*"></input>
                <p>{errors.email?.message}</p>
                <input {...register("direccion", {required: 'Campo obligatorio.'})} placeholder="Direccion*"></input>
                <p>{errors.direccion?.message}</p>
                <input className="bDatos" type="submit" value={'Finalizar compra'} />
            </form>
        </div>
    )
}

export default Checkout