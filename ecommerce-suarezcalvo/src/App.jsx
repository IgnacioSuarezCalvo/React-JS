import { useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/Navbar/Navegador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Counter/ItemCount';
import Footer from './components/Footer/Footer';
import Formulario from './components/Formulario/Formulario';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
   const onAdd = (count) =>{
     console.log('productos seleccionados:', count)
 }

  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}  />
            <Route path="/detalle" element={<ItemDetailContainer />}  />
            <Route path="/Formulario" element={<Formulario/>}  />
            {/* <ItemCount initial={1} stock={4} onAdd={onAdd}/> */}
          </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default App
