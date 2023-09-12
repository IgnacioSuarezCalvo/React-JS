import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mFetch } from "../utils/mockFetch"


const ItemDetailContainer = () => {

    const[products, setProducts]= useState({})
    useEffect(()=>{
        mFetch(2)
        .then(resp=>setProducts(resp))
        .catch(err=>console.log(err))
        // .finally(set loading)
    },[])
  return (
    <div>
        <ItemDetail products={products}/>
    </div>
  )
}

export default ItemDetailContainer