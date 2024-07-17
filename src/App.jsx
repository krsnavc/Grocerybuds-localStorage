import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Item from './Item';
import { ToastContainer, toast } from 'react-toastify';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

  const [items, setItems] = useState(defaultList);

  function addItems(itemName) {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  }
  function removeItems(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted');
  }
  function editItem(itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />

      <Form addItems={addItems} />
      <Item removeItems={removeItems} items={items} editItem={editItem} />
    </section>
  );
};

export default App;
