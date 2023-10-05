import { useEffect, useState } from "react"
import { mFetch } from "../utils/mockFetch"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const[products, setProducts]= useState({})
    const {pid} = useParams()

    console.log(pid)

    useEffect(()=>{
        mFetch(Number(pid))
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