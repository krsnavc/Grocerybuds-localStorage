import { useState } from 'react';

function SingleItem({ item, removeItems, editItem }) {
  return (
    <div className="single-item">
      <input
        checked={item.completed}
        onChange={() => editItem(item.id)}
        type="checkbox"
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        onClick={() => removeItems(item.id)}
        className="btn remove-btn"
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
