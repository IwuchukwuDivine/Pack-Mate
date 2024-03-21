
import './index.css';
import Logo from './logo.jsx';
import Form from './form.jsx';
import Main from './main.jsx';
import { useState } from 'react';
import Footer from './footer.jsx';

function App() {
  const [items, setItem] = useState([]);



  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) => 
    items.map((item) => 
      item.id === id ? {...item, packed : !item.packed} : item));
  }

  function handeClear() {
    const confirmed = window.confirm("Are you sure you want to delete all items");
    if (confirmed) setItem([]);
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Main items = {items} onDeleteItem = {handleDeleteItem} onToggleItem={handleToggleItem} onClear={handeClear}/>
      <Footer items = {items}/>
    </div>
  );
}

export default App;

