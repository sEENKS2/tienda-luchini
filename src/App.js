import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navegacion/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Todos los productos"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos por categoria"}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>PAGINA NO ENCONTRADA</h1>} />
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
