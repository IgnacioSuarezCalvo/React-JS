import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import ItemCount from "../../Counter/ItemCount"


const ItemDetail = ({products}) => {
    
    const [isCounter, setIsCounter] = useState(true)
    const{addProduct} = useCartContext()
    const onAdd = (quantity) =>{
        addProduct( {...products,quantity} )
        setIsCounter(false)
        
    }
    return (
        <div className="row ">
            
            <div className="row">
                <h2 className="col text-center">Detalle del producto</h2>
            </div>
            
            <div className="row ">
                <div className="col-9">
                    <div className="">
                    <h3>{products.name}</h3>
                        <img className="w-25" src={products.imageUrl} alt="imagen" />
                    </div>
                    <div className="mt-2">

                        <h5 className="mt-3">Description: {products.description}</h5>
                        <h3>Price: {products.price}</h3>
                        <h3>Stock: {products.stock}</h3>
                    </div>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <div className="text-center">
                        {
                            isCounter ?
                                <ItemCount initial={1} stock={5} onAdd={onAdd}/>

                            :
                                <>
                                    <Link to={'/cart'}>
                                        <button className="btn btn-outline-success m-2">Ir a Cart</button>
                                    </Link>
                                    <Link to={'/'}>
                                        <button className="btn btn-outline-warning">Ir a Inicio</button>
                                    </Link>
                                </>
                            
                        }
                    </div>
                </div>
                
            </div>
        </div>
    
    )
}

export default ItemDetail