
import NavBar from './components/Navbar/Navegador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/Counter/ItemCount';



function App() {
  const onAdd = (count) =>{
    console.log('productos seleccionados:', count)
  }

  return (
      <div>
          <NavBar />
          <ItemListContainer titulo={'Hola como estan?'}/>
          <ItemCount initial={1} stock={4} onAdd={onAdd} />
          <Footer />
      </div>
  )
}

export default App
