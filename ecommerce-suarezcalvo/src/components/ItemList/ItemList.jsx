import Item from "../Item/Item"
import { memo } from "react"

const ItemList = memo(({products}) => {
  return (
      <>
        {
         products.map(products => <Item key={products.id} products={products} /> ) }

      </>                                                
    )
})

export default ItemList