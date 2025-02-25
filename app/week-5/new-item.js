"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="p-4 border rounded-lg max-w-sm mx-auto text-center">
      <h2 className="text-lg font-semibold mb-2 text-purple-900">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Item Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-medium">Quantity:</label>
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={decrement} 
              type="button"
              disabled={quantity === 1} 
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-red-700"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button 
              onClick={increment} 
              type="button"
              disabled={quantity === 20} 
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-green-700"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block font-medium">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            {["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", 
              "Dry Goods", "Beverages", "Snacks", "Household", "Other"].map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Add Item
        </button>
      </form>
    </div>
  );
}
