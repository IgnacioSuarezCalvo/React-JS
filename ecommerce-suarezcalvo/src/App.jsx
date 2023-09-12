import { useState } from "react"
import NavBar from './components/Navbar/Navegador';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Counter/ItemCount';
import Footer from './components/Footer/Footer';
import Formulario from './components/Formulario/Formulario';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
   const onAdd = (count) =>{
     console.log('productos seleccionados:', count)
 }

  return (
      <div>
          <NavBar />
          <ItemListContainer/>
          <ItemDetailContainer />
          <ItemCount initial={1} stock={4} onAdd={onAdd}/>
          <Formulario/>
          <Footer />
      </div>
  )
}

export default App
