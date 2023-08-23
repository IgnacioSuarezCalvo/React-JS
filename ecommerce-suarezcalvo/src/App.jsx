
import NavBar from './components/Navbar/Navegador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
      <div>
          <NavBar />
          <ItemListContainer titulo={'Hola como estan?'}/>
          <Footer />
      </div>
  )
}

export default App
