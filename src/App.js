import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion />
        <ItemListContainer greeting="Bienvenido"/>
        <ItemDetailContainer id='1'/>
        <ItemCount />
      </header>
    </div>
  );
}

export default App;
