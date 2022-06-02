import { Link } from 'react-router-dom'
import '../../item.css'


const Item = ({id, img, name, price}) => {
    
    return (

        <div className='polaroid asd'>
            <img src={img} alt={name}></img>
            <div className='container'>
                <h1 className='itemFuente asd'>{name}</h1>
                <h1 className='itemFuente asd'>{price}</h1>
                <Link to={`/detail/${id}`} className='button'>Ver detalle</Link>
            </div>
        </div>

    )

}

export default Item