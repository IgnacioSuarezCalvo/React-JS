
import { useCounter } from "../hooks/useCounter"

const ItemCount = ({initial, stock, onAdd}) =>{

    const{count, handdleAdd, handdleSubtstract} = useCounter(initial, stock)
    
    return <center>
                <h2>Counter</h2>
                <button onClick={handdleAdd}> + 1 </button>
                <label>
                    <strong>{ count }</strong>
                </label>
                <button onClick={handdleSubtstract}> - 1 </button>
                <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>
            </center>
}

export default ItemCount