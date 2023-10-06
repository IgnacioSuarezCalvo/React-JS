
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartContextProvider} from "./components/context/CartContext";

import NavBar from './components/Navbar/Navegador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Formulario from './components/Formulario/Formulario';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from "./components/CartContainer/CartContainer";


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const onAdd = (count) =>{
     console.log('productos seleccionados:', count)
 }

  return (
      <BrowserRouter>
        <CartContextProvider>
            <NavBar />
            
            <Routes>
              <Route path="/" element={<ItemListContainer/>}  />
              <Route path="/category/:cid" element={<ItemListContainer/>}  />
              <Route path="/detalle/:pid" element={<ItemDetailContainer />}  />
              <Route path="/Formulario" element={<Formulario/>}  />
              <Route path="/cart" element={<CartContainer/>}  />
  
            </Routes>
          </CartContextProvider>
          
      </BrowserRouter>
  )
}

export default App
