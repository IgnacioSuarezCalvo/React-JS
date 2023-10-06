import { memo } from "react"
import {Link} from "react-router-dom"

const Item =memo(({products}) => {
  return (
    <div className="card w-50"> 
        <h3><p className="mt-1">{products.name}</p></h3>
        <div className="card-body ">
          <img className="w-25 card-img-top" src={products.imageUrl} alt="imagen juego"/>
          <div className="align-middle">
            <p className="mt-2">Description: {products.description}</p>
            <p>Precio: {products.price}</p>
          </div>
          <div className="">
            <Link to={`/detalle/${products.id}`}>
              <button className="btn btn  btn-outline-danger w-75">Detalle</button>
            </Link>
          </div>
        </div>
    </div>
  )
})

export default Item