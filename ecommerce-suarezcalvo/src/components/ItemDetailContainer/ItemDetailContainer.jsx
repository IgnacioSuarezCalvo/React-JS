import { useEffect, useState } from "react"
import { mFetch } from "../utils/mockFetch"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail/ItemDetail"
import { getFirestore, getDoc, doc} from "firebase/firestore"


const ItemDetailContainer = () => {

    const[products, setProducts]= useState({})
    const {pid} = useParams()

    useEffect(()=>{
      const db = getFirestore()
      const queryDoc =  doc(db,'products',pid)
      getDoc(queryDoc)
      .then(resp => ({id:resp.id, ...resp.data()}))
      .then(resp => setProducts(resp))
    },[])


    // useEffect(()=>{
    //     mFetch(Number(pid))
    //     .then(resp=>setProducts(resp))
    //     .catch(err=>console.log(err))
        
    // },[])
  return (
    <div>
        <ItemDetail products={products}/>
    </div>
  )
}

export default ItemDetailContainer