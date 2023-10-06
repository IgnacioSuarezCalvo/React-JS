import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, where, query} from 'firebase/firestore'

import ItemList from "../ItemList/ItemList"

const ItemListContainer = () =>{
    
    const [ products, setProduct ] = useState([])
    const [ loading, setLoading ] = useState([true])
    const{cid}= useParams()

      useEffect(()=>{
        if (cid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            const queryFilter = query(queryCollection, where('category', '==', cid ))
            getDocs(queryFilter)
            .then(resp => setProduct(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=> setLoading(false))
        }else {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProduct(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=> setLoading(false))
      }
    }, [cid])

    const handleAddProduct = () =>{
      setProduct([
        ...products,
        {imageUrl:'https://lavozdelmuro.net/wp-content/uploads/2020/04/juegos-de-mesa-05.jpg',
        id: products.length + 1, 
        name:'Producto nuevo',
        price:1500, 
        description:'Este es un producto nuevo'}
      ])
    }
    
    return (
      <center>
        <button className="btn btn-outline-dark" onClick={handleAddProduct}>Agregar Producto nuevo</button>
        <div className="row">
          {loading ? <h2>Cargando</h2> : <ItemList products={products} />}
          </div>
      </center>
    )

}

export default ItemListContainer