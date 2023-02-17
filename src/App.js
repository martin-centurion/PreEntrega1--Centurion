import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="container">
          <NavBar />
          <ItemListContainer greeting={'Item List Container'} />
    </div>
  );
}

export default App;
