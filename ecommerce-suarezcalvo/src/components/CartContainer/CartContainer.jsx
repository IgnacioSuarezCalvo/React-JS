import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import{collection, getFirestore, addDoc} from 'firebase/firestore'
import { Link } from "react-router-dom"

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
      name:'',
      phone:'',
      email:''
  })
  const [id, setId] = useState()
  const {cartList, deleteCart, precioTotal, deleteItem} = useCartContext()
  const handleAddOrder = (evt) =>{
    evt.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(prod =>{
      return{id:prod.id, name: prod.name, price: prod.price, queantity: prod.quantity}
    })
    order.total = precioTotal()
    const queryDB = getFirestore()
    const ordersCollection = collection(queryDB, 'orders')
    addDoc(ordersCollection, order)
    .then(({id})=>setId(id))
    .catch(err=> console.log(err))
    .finally(()=>{
      setDataForm({
        name:'',
        phone:'',
        email:''
      })
      deleteCart()
    })
    
  }

  const handleOnChange = (evt) =>{
    setDataForm({
      ...dataForm,
      [evt.target.name] : evt.target.value
    })
  }
  return (
    <>
      {id != '' && <h3>Se genero la orden de compra{id}</h3>}
      {cartList.length > 0 ?
        <div>
          {cartList.map(prod => <div key={prod.id}> 
          <img src={prod.imageUrl} className="w-25" />
          {prod.name} - {prod.price} -  Cantidad: {prod.quantity}
          <button onClick={() =>deleteItem(prod.id)}> X </button>
          </div>)}
          <button onClick={deleteCart}> Vaciar Carrito</button>
          {precioTotal() != 0 && <h2>Precio total: {precioTotal()}</h2>}
          <form onSubmit={handleAddOrder}>
            <input type="text" name="name" placeholder="Ingresar el nombre" value={dataForm.name} onChange={handleOnChange}/>
            <input type="text" name="phone" placeholder="Ingresar el telefono" value={dataForm.phone} onChange={handleOnChange}/>
            <input type="email" name="email" placeholder="Ingresar el email " value={dataForm.email} onChange={handleOnChange}/>
            <button className="btn-outline-sucess">Terminar compra</button>
          </form>
        </div>
        :
        <center>
          <h2> No hay productos en el carrito</h2>
          <Link to='/'>Ir al inicio</Link>
        </center>}       
      </>
  )
}

export default CartContainer