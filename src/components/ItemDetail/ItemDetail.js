import '../../item.css'


const ItemDetail = ({product}) => {
    const {img, name, price, description, category, stock} = product
    return (

        <div className='polaroid'>
            <img src={img} alt={name}></img>
            <div className='container'>
                <h1 className='itemFuente'>Item: {name}</h1>
                <h1 className='itemFuente'>{price}</h1>
                <h1 className='itemFuente'>Desc: {description}</h1>
                <h1 className='itemFuente'>Categoria: {category}</h1>
                <h1 className='itemFuente'>Disponible: {stock}</h1>
            </div>
        </div>

    )

}

export default ItemDetail