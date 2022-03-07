import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState } from 'react';

function App() {

  const [stores, setStores] = useState([])

  useEffect(() => {
    fetch("http://localhost:8085/stores")
    .then(response => response.json())
    .then(storeJson => {
      setStores(storeJson);
    })
  }, []);

  return (
    <div>
      <h1>Bob's Neighbors</h1>
      <Search />
      <NewStoreForm />
      <StoreList storeData={stores}/>
    </div>
  );
}

export default App;
