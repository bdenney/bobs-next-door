import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {
  return (
    <div>
      <h1>Bob's Neighbors</h1>
      <Search />
      <NewStoreForm />
      <StoreList />
    </div>
  );
}

export default App;
