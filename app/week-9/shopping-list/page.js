"use client"; 

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; 
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData || []); // Ensure itemsData is an array
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]); 
  };

  const handleItemSelect = (item) => {
    const cleanItemName = item.name.split(',')[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(cleanItemName);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10 flex">
      <div className="w-1/2">
        <h1 className="text-8xl text-stone-950 font-bold mb-4 ">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}