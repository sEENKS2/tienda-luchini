import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider>
          <BrowserRouter>
            <Navegacion />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Todos los productos"} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos por categoria"} />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1 className='titu'>PAGINA NO ENCONTRADA</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>

      </header>
    </div>
  );
}

export default App;
