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
    <div className="row">
      {id != '' && <h3 className="text-center"> Se genero la orden de compra {id} </h3>}
      {cartList.length > 0 ?
        <div className="col-6">
          {cartList.map(prod => 
          <div key={prod.id} > 
            <img src={prod.imageUrl} className="w-25" />
            {prod.name} - {prod.price} -  Cantidad: {prod.quantity}
            <button onClick={() =>deleteItem(prod.id)}> X </button>
          </div>)}
          <button onClick={deleteCart} className="btn btn-outline-danger mt-4"> Vaciar Carrito</button>
          {precioTotal() != 0 && <h2 className="text-center mt-2">Precio total: {precioTotal()}</h2>}
          <form onSubmit={handleAddOrder} className="row d-flex text-center">
            <input className="mt-2" type="text" name="name" placeholder="Ingresar el nombre" value={dataForm.name} onChange={handleOnChange}/>
            <input className="mt-2" type="text" name="phone" placeholder="Ingresar el telefono" value={dataForm.phone} onChange={handleOnChange}/>
            <input className="mt-2" type="email" name="email" placeholder="Ingresar el email " value={dataForm.email} onChange={handleOnChange}/>
            <button className="btn btn-success mt-2">Terminar compra</button>
          </form>
        </div>
        :
        <center>
          <h2> No hay productos en el carrito</h2>
          <Link to='/' className="btn btn-outline-info">Ir al inicio</Link>
        </center>}       
      </div>
  )
}

export default CartContainer