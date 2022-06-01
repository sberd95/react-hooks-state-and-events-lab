import React, {useState} from "react";

function Item({ name, category }) {
  const [itemStat, setItemStat] = useState(false)
  function handleClickItem(event){
    setItemStat((itemStat) => !itemStat)
    event.target.className = 'in-cart'
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClickItem}>{itemStat ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
