import '../../item.css'


const Item = ({img, name, price}) => {
    
    return (

        <div className='polaroid'>
            <img src={img} alt={name}></img>
            <div className='container'>
                <h1 className='itemFuente'>{name}</h1>
                <h1 className='itemFuente'>{price}</h1>
            </div>
        </div>

    )

}

export default Item