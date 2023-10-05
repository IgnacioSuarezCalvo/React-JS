import { useCartContext } from "../context/CartContext"

const CartContainer = () => {

  const {cartList, deleteCart, precioTotal, deleteItem} = useCartContext()

  return (
    <div>
       {cartList.map(prod => <div key={prod.id}> 
        <img src={prod.imageUrl} className="w-25" />
        {prod.name} - {prod.price} -  Cantidad: {prod.quantity}
        <button onClick={() =>deleteItem(prod.id)}> X </button>
       </div>)}
       <button onClick={deleteCart}> Vaciar Carrito</button>
       {precioTotal() != 0 && <h2>Precio total: {precioTotal()}</h2>}
    </div>
  )
}

export default CartContainer