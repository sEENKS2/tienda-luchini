import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion />
        <ItemListContainer greeting="Bienvenido"/>
        <ItemCount />
      </header>
    </div>
  );
}

export default App;
