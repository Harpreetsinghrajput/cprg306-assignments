"use client"; 

import { useState } from "react";
import Item from "./item";
import items from "./items.json";  

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState(items);

  const sortByName = () => {
    const newItems = items.toSorted((item1, item2) => {
      if (item1.name > item2.name) return 1;
      else if (item1.name === item2.name) return 0;
      else return -1;
    });
    setSortedItems(newItems);
  };

  const sortByCategory = () => {
    const newItems = items.toSorted((item1, item2) => {

      if (item1.category > item2.category) return 1;
      else if (item1.category === item2.category) return 0;
      else return -1;
    });
    setSortedItems(newItems);
  };

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={sortByName}
          className={`py-2 px-4 rounded-l-lg ${sortBy === "name" ? "bg-blue-500" : "bg-gray-500"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={sortByCategory}
          className={`py-2 px-4 rounded-r-lg ${sortBy === "category" ? "bg-blue-500" : "bg-gray-500"}`}
        >
          Sort by Category
        </button>
      </div>
      
      <ul className="bg-black shadow-lg p-4 rounded-lg w-1/2 text-white">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
