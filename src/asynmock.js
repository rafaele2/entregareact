const products = [

    {
        id: '1',
        name: 'Procesador Ryzen 5600x ',
        price: '40000',
        category: 'CPU',
        img: 'https://i.imgur.com/Z9BS9n3.jpg',
        stock: '25',
        description: 'Descripcion',

        
    },
    {
        id: '2',
        name: 'Placa de Video Asus 3060',
        price: '180000',
        category: 'GPU',
        img: 'https://i.imgur.com/FtqlG0Y.jpg',
        stock: '25',
        description: 'Descripcion',

    },
    {
        id: '3',
        name: 'Motherboard Asus Tuf',
        price: '40000',
        category: 'Motherboard',
        img: 'https://i.imgur.com/QZd3I5T.jpg',
        stock: '25',
        description: 'Descripcion',

    }
]

export const getProducts= () => { 
    return new Promise ((resolve)=>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}
export const getProductsByCategory= (categoryId) => { 
    return new Promise ((resolve)=>{
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}