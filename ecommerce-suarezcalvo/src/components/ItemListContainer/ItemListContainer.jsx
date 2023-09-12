import { useEffect, useState } from "react"
import { mFetch } from "../utils/mockFetch"

const ItemListContainer = () =>{
    const [ products, setProduct ] = useState([])
    const [ loading, setLoading ] = useState([true])

    useEffect(()=>{
      mFetch()

      .then(respuesta=>setProduct(respuesta))
      .catch(err=>console.log(err))
      .finally(()=> setLoading(false))
    }, [])
    
    return (
      <center>
        {loading ? <h2>Cargando</h2> : products.map(products=><div key={products.id} className="card w-25">
                                                                  <div className="card-body">
                                                                      <img className="w-100 card-img-top" src={products.imageUrl} alt="imagen juego"/>
                                                                      <p>Description: {products.description}</p>
                                                                      <p>Precio: {products.price}</p>
                                                                      <div className="card-footer">
                                                                        <button className="btn btn-outline-dark w-100">Detalle</button>
                                                                      </div>
                                                                  </div>
                                                              </div>
          )}
      </center>
    )

}

export default ItemListContainer