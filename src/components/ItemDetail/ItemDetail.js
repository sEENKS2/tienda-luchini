import '../../item.css'


const ItemDetail = ({product}) => {
    const {img, name, price, description, category, stock} = product
    return (

        <div className='polaroid asd'>
            <img src={img} alt={name}></img>
            <div className='container asd'>
                <h1 className='itemFuente asd'>Item: {name}</h1>
                <h1 className='itemFuente asd'>Precio: {price}</h1>
                <h1 className='itemFuente asd'>Desc: {description}</h1>
                <h1 className='itemFuente asd'>Categoria: {category}</h1>
                <h1 className='itemFuente asd'>Disponible: {stock}</h1>
            </div> 
        </div>

    )

}

export default ItemDetail