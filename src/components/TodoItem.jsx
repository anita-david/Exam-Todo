import { Link } from "react-router-dom";

export default function TodoItem({ todo }) {
  return (
    <li
      className="flex justify-between items-center bg-white rounded-xl shadow-md px-4 py-3 border-l-4 border-purple-400"
    >
      <Link to={`/todos/${todo.id}`} className="text-sm font-medium text-gray-700 hover:underline">
        {todo.title}
      </Link>
      <span
        className={`text-sm font-semibold ${
          todo.completed ? "text-green-500" : "text-red-400"
        }`}
      >
        {todo.completed ? "Done" : "Pending"}
      </span>
    </li>
  );
}
