import Item from '../Item/Item'
import '../../item.css'


const ItemList = ({products}) => {
    return (
        <div className='asd'>
            { products.map (prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList