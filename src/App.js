import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState } from 'react';

function App() {

  const [stores, setStores] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchStores()
  }, []);

  function fetchStores() {
    fetch("http://localhost:8085/stores")
    .then(response => response.json())
    .then(storeJson => {
      setStores(storeJson);
    })
  }

  function addNewStore(store) {
    // Make fetch to POST to backend
    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(store)
    });

    // Fetch all stores again
    fetchStores();
  }

  function handleSearch(searchText) {
    setSearchText(searchText);
  }

  const storesToDisplay = stores.filter(store => {
    return store.name.toLowerCase().includes(searchText.toLowerCase());
  })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search onSearch={handleSearch} />
      <NewStoreForm addNewStore={addNewStore} />
      <StoreList storeData={storesToDisplay}/>
    </div>
  );
}

export default App;
