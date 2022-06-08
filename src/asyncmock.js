const products = [
    {
        id: '1',
        name: 'Red Bull',
        price: 200,
        category: 'bebidas',
        img: '../../images/red-bull.jpg',
        stock: '100',
        description: 'Red Bull 355ml',
    },
    {
        id: '2',
        name: 'Coca-Cola',
        price: 100,
        category: 'bebidas',
        img: '../../images/coca-500.jpg',
        stock: '100',
        description: 'Coca-Cola 500ml',
    },
    {
        id: '3',
        name: 'Sprite',
        price: 100,
        category: 'bebidas',
        img: '../../images/sprite-500.jpg',
        stock: '100',
        description: 'Sprite 500ml',
    },
    {
        id: '4',
        name: 'Monster',
        price: 230,
        category: 'bebidas',
        img: '../../images/monster-473.jpg',
        stock: '100',
        description: 'Monster 473cc',
    },
    {
        id: '5',
        name: 'Alfajor',
        price: 140,
        category: 'comida',
        img: '../../images/alfajor.jpg',
        stock: '100',
        description: 'Alfajor Cofler 52gr',
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}