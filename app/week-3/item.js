export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2 border-b border-gray-700 flex justify-between bg-black text-white">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400">{quantity}x</span>
        <span className="text-sm text-blue-300">{category}</span>
      </li>
    );
  }