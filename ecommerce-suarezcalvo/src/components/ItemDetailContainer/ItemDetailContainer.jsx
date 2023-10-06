import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, getDoc, doc} from "firebase/firestore"
import ItemDetail from "./ItemDetail/ItemDetail"



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

  return (
    <div>
        <ItemDetail products={products}/>
    </div>
  )
}

export default ItemDetailContainer