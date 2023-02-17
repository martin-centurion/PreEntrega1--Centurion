import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
          <NavBar />
          <ItemListContainer greeting={'Item List Container >>> Productos'} />
          <ItemCount />
    </div>
  );
}

export default App;
