import {Link} from "react-router-dom"

const Item = ({products}) => {
  return (
    <div className="card w-25"> 
                                                    <div className="card-body">
                                                        <img className="w-25 card-img-top" src={products.imageUrl} alt="imagen juego"/>
                                                        <p>Nombre: {products.name}</p>
                                                        <p>Description: {products.description}</p>
                                                        <p>Precio: {products.price}</p>
                                                        <div className="card-footer">
                                                          <Link to={`/detalle/${products.id}`}>
                                                            <button className="btn btn-outline-dark w-100">Detalle</button>
                                                          </Link>
                                                        </div>
                                                    </div>
    </div>
  )
}

export default Item