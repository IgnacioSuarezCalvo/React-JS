import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct) =>{

        const idx = cartList.findIndex(products => products.id === newProduct.id)

        if (idx != -1) {
            
            cartList[idx].quantity = cartList[idx].quantity + newProduct.quantity 
            setCartList([...cartList]) 
        } else {
            
    
        setCartList([
            ...cartList,
            newProduct
        ])
        }

        }

        const deleteCart = () =>{
            setCartList([])
        }
        
        const cantidadTotal = () => cartList.reduce((count, objProducto)=> count +=objProducto.quantity, 0 )
        const precioTotal = () => cartList.reduce((count, objProducto)=> count +=(objProducto.quantity * objProducto.price), 0 )  

        const deleteItem = (id) => setCartList(cartList.filter(products =>products.id != id))
    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            cantidadTotal,
            precioTotal,
            deleteItem

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider