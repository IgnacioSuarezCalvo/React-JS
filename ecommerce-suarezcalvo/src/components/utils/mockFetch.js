const products = [ 
    {id: 1, name:'Producto 1', category:'juegos', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://d26lpennugtm8s.cloudfront.net/stores/064/046/products/hdp-min1-3e1847cd14c8c0b8fd14877908596070-1024-1024.jpg'},
    {id: 2, name:'Producto 2', category:'juegos de mesa', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'},
    {id: 3, name:'Producto 3', category:'juegos de mesa', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'},
    {id: 4, name:'Producto 4', category:'juegos de mesa', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'},
    {id: 5, name:'Producto 5', category:'juegos de mesa', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'}
  ] 
  
export const mFetch = (pid) => new Promise ((res, rej)=>{
      setTimeout(()=>{
        res(pid ? products.find(products=>products.id === pid): products)
      }, 1000)
  })

