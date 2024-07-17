import SingleItem from './SingleItem';

function Item({ removeItems, items, editItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            editItem={editItem}
            item={item}
            removeItems={removeItems}
          />
        );
      })}
    </div>
  );
}

export default Item;
