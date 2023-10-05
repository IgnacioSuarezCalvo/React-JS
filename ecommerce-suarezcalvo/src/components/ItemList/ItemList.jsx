import Item from "../Item/Item"
import Filter from "../Filter/Filter"
import { memo } from "react"

//En el caso de querer agregar un Filter aca esta la base para agregarlo

// const handleProductFilter = ({ products, filterState, handleFilterChange}) => (
//     <>
//       <center className="w-100">
//           <label>Ingrese el producto que quiere buscar</label>            
//           <input className="form-control" type="text" value='' onChange={handleFilterChange} />
//       </center>
//       { 
//           filterState === '' ? 
//               products.map(products => <Item key={products.id} products={products} /> )  
//           : 
//               products.filter(products => products.name.toLowerCase().includes(filterState.toLowerCase())).map(products => <Item key={products.id} products={products} /> )  
//       }
      
//   </>
// )

const ItemList = memo(({products}) => {
  return (
      <>
        {
         products.map(products => <Item key={products.id} products={products} /> ) }
        {/* <Filter products={products}>
          {handleProductFilter}
        </Filter> */}
      </>                                                
    )
})

export default ItemList