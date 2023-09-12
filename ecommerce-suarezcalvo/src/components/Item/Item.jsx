

const Item = ({products}) => {
  return (
    <div className="card w-25"> 
                                                    <div className="card-body">
                                                        <img className="w-100 card-img-top" src={products.imageUrl} alt="imagen juego"/>
                                                        <p>Description: {products.description}</p>
                                                        <p>Precio: {products.price}</p>
                                                        <div className="card-footer">
                                                            <button className="btn btn-outline-dark w-100">Detalle</button>
                                                        </div>
                                                    </div>
    </div>
  )
}

export default Item