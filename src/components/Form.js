import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(1);

  //Handles the form submission by adding new item to the list of items
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, number, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setNumber(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Forgot to add something? 👜 </h3>
      <select
        onChange={(e) => setNumber(Number(e.target.value))}
        value={number}
      >
        {/* Generate options dynamically based on a fixed length */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
