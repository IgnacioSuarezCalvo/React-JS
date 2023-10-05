import { useEffect, useState } from "react"
import { mFetch } from "../utils/mockFetch"
import { useParams } from "react-router-dom"

import ItemList from "../ItemList/ItemList"

const ItemListContainer = () =>{
    const [ products, setProduct ] = useState([])
    const [ loading, setLoading ] = useState([true])
    const{cid}= useParams()

    useEffect(()=>{
      if (cid) {
        mFetch()
        .then(respuesta=>setProduct(respuesta.filter(products => cid === products.category)))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
      }else{
        mFetch()
        .then(respuesta=>setProduct(respuesta))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
      }
    }, [cid])
    
    return (
      <center>
        <div className="row">
          {loading ? <h2>Cargando</h2> : <ItemList products={products} />}
          </div>
      </center>
    )

}

export default ItemListContainer