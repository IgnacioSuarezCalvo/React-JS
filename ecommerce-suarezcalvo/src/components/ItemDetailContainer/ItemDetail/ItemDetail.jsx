import ItemCount from "../../Counter/ItemCount"


const ItemDetail = (products) => {
    console.log(products)
    const onAdd = (count) =>{
        console.log('productos seleccionados:', count)
    }
    return (
        <div className="row">
            <h2>Vista de detalle</h2>
            <div className="col">
                <img className="w-25" src={products.imageUrl} alt="imagen" />
                <div>
                    <p>Nombre:{products.name}</p>
                    <p>Description:{products.description}</p>
                    <p>Precio:{products.precio}</p>
                    <p>Stock:{products.stock}</p>
                </div>
            </div>
            <div className="col">
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>
    
    )
}

export default ItemDetail