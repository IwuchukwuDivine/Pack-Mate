import closeIcon from './close.svg';
import { useState } from 'react';


export default function Main({items, onDeleteItem, onToggleItem, onClear}) {
  const [sortby, setSortBy] = useState("input");

  let sortedItems;
  if (sortby === "input") sortedItems = items;

  if (sortby === "description") {
    sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
  }
  // Since true is considered greater than false in JavaScript when comparing booleans, sorting based on the packed property directly will sort true values before false values.So, if packed is true, it will come before false in the sorted array. This is the natural behavior we want when sorting based on boolean values.

  if (sortby === "packed") {
    sortedItems = items.slice().sort((a,b) => a.packed - b.packed);
  }

 
  return(
    <div className="main">
      <div className="items">
        {sortedItems.map((item) => (
          <Item list = {item} onDeleteItem = {onDeleteItem} onToggleItem={onToggleItem} key={item.id} />
        ))}
      </div>
      <div className="main-end">
        <select name="" id="" value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="packed">Sort By Packing Status</option>
          <option value="description">Sort by Description</option>
        </select>
        <button className="clear-btn" onClick={onClear}>CLEAR LIST</button>
      </div>
    </div>
  )
}

function Item({ list, onDeleteItem, onToggleItem }) {
  const textDecorationColor = '#ffffff';
  return(
    <div className="item" style={list.packed ? {textDecoration: "line-through", textDecorationColor} : {}}>
      <input type="checkbox" value={list.packed} onChange={() => onToggleItem(list.id)}/>
      <span>{list.quantity} {list.description}</span>
      <img onClick={() => onDeleteItem(list.id)} className='close-icon' src={closeIcon} alt="close-btn" />
    </div>
  )};