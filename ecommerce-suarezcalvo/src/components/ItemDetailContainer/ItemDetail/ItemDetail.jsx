import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../../Counter/ItemCount"
import { useState } from "react"

const ItemDetail = ({products}) => {
    
    const [isCounter, setIsCounter] = useState(true)
    const{addProduct} = useCartContext()
    const onAdd = (quantity) =>{
        addProduct( {...products,quantity} )
        setIsCounter(false)
        
    }
    return (
        <div className="row">
            <h2>Vista de detalle</h2>
            <div className="col">
                <img className="w-25" src={products.imageUrl} alt="imagen" />
                <div>
                    <p>Nombre:{products.name}</p>
                    <p>Description:{products.description}</p>
                    <p>Precio:{products.precio}</p>
                    <p>Stock:{products.stock}</p>
                </div>
            </div>
            <div className="col">
                
                {
                    isCounter ?
                        <ItemCount initial={1} stock={5} onAdd={onAdd}/>

                    :
                        <>
                            <Link to={'/cart'}>
                                <button className="btn btn-outline-dark">Ir a Cart</button>
                            </Link>
                            <Link to={'/'}>
                                <button className="btn btn-outline-dark">Ir a Inicio</button>
                            </Link>
                        </>
                }
                
            </div>
        </div>
    
    )
}

export default ItemDetail