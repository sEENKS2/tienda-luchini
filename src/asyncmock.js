const products = [
    {
        id: '1',
        name: 'Coca-Cola',
        price: '$100',
        category: 'bebidas',
        img: '../../images/coca-500.jpg',
        stock: '5',
        description: 'Coca-Cola 500ml',
    },
    {
        id: '2',
        name: 'Sprite',
        price: '$100',
        category: 'bebidas',
        img: '../../images/sprite-500.jpg',
        stock: '5',
        description: 'Sprite 500ml',
    },
    {
        id: '3',
        name: 'Monster',
        price: '$230',
        category: 'bebidas',
        img: '../../images/monster-473.jpg',
        stock: '5',
        description: 'Monster 473cc',
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}