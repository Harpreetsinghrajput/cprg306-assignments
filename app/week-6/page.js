// /app/week-6/page.js
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 flex">
      <div className="w-1/2">
        <h1 className="text-8xl  text-stone-950 font-bold mb-4 ">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
