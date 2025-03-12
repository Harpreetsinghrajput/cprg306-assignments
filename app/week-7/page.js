"use client"; 

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; 

export default function Page() {
  const [items, setItems] = useState(itemsData); 

  const handleAddItem = (item) => {
    setItems([...items, item]); 
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10 flex">
      <div className="w-1/2">
        <h1 className="text-8xl text-stone-950 font-bold mb-4 ">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
