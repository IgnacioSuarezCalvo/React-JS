import { BsCart4 } from 'react-icons/bs'
import { useCartContext } from '../context/CartContext'

const CartWirdget = () => {
  const{cantidadTotal} =useCartContext()
  return (
    <div >
        {cantidadTotal()!=0 && cantidadTotal()}
        <BsCart4/>
        
    </div>
  )
}

export default CartWirdget