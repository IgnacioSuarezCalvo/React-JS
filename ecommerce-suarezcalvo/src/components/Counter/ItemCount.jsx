import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) =>{

    const[counter, setcounter] = useState(initial)
    
    const handleAdd = ()=>{
        if(counter < stock){
            setcounter(counter + 1)
        }
            
    }
    const handleSubstract = ()=>{
        if(counter > initial){
            setcounter(counter - 1)
        }
            
    }

    const handleOnAdd= () =>{
        onAdd(counter)
    }
    return <>
                
                <button onClick={handleAdd} className="btn btn-outline-info m-2"> + 1 </button>
                <label>
                    <strong>{ counter }</strong>
                </label>
                <button onClick={handleSubstract} className="btn btn-outline-info m-2">- 1</button>
                <button onClick={handleOnAdd} className="btn btn-outline-success">Agregar al Carrito</button>
            </>
}

export default ItemCount