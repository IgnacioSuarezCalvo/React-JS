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
    return <center>
                <h2>Counter</h2>
                <button onClick={handleAdd}> + 1 </button>
                <label>
                    <strong>{ counter }</strong>
                </label>
                <button onClick={handleSubstract}> - 1 </button>
                <button onClick={handleOnAdd}>Agregar al Carrito</button>
            </center>
}

export default ItemCount