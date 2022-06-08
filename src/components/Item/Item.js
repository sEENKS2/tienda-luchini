import { Link } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css'


const Item = ({id, img, name, price}) => {
    
    return (

        <div className='polaroid list'>
            <img src={img} alt={name}></img>
            <div className='container'>
                <h1 className='itemFuente list'>{name}</h1>
                <h1 className='itemFuente list'>${price}</h1>
                <Link to={`/detail/${id}`} className='button1 list'>Ver detalle</Link>
            </div>
        </div>

    )

}

export default Item