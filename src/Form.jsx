import { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addItems }) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) {
      toast.error('please provide value');
      return;
    }
    addItems(newItem);
    setNewItem('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery buds</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
