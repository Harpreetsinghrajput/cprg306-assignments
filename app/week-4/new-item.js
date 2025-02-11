 "use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-4 border rounded-lg max-w-sm mx-auto text-center">
      <h2 className="text-lg font-semibold mb-2, text-purple-900">Select Quantity</h2>
      <div className="flex items-center justify-center space-x-4">
        <button 
          onClick={decrement} 
          disabled={quantity === 1} 
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-red-700"
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button 
          onClick={increment} 
          disabled={quantity === 20} 
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-green-700"
        >
          +
        </button>
      </div>
    </div>
  );
}
