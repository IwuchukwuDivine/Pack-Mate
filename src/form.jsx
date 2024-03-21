import { useState } from "react";

export default function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    const newItem = {
      description, quantity, packed: false, id: Date.now()
    };
    setDescription("");
    setQuantity(1);
    console.log(newItem)
    onAddItems(newItem);
  }
  return(
    <form onSubmit={handleSubmit}>
      <span>What do you need for your trip 🥰?</span>
      <select name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num)  => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input placeholder="item..." type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>ADD</button>
    </form>
  )
}