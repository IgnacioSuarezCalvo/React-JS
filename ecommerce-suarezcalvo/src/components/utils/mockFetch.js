const products = [ 
    {id: 1, name:'Producto 1', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://d26lpennugtm8s.cloudfront.net/stores/064/046/products/hdp-min1-3e1847cd14c8c0b8fd14877908596070-1024-1024.jpg'},
    {id: 2, name:'Producto 2', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'},
    {id: 3, name:'Producto 3', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'},
    {id: 4, name:'Producto 4', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'},
    {id: 5, name:'Producto 5', price: 1000, stock:20, description:'Esto es una description', imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg'}
  ] 
  
  export const mFetch = () => new Promise ((res, rej)=>{
    const condition = true
    if(condition){
      setTimeout(()=>{
        res(products)
      }, 3000)
    }else{
      rej('No tengo mas plata')
    }
  })

export default products