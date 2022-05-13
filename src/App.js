import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion />
        <ItemListContainer greeting="Bienvenido"/>
      </header>
    </div>
  );
}

export default App;
