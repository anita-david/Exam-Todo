import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

export default function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <li className="flex justify-between items-center bg-white rounded-xl shadow-md px-4 py-3 border-l-4 border-purple-400">
      <Link
        to={`/todos/${todo.id}`}
        className="text-sm font-medium text-gray-700 hover:underline"
      >
        {todo.title}
      </Link>
      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-semibold ${
            todo.completed ? "text-green-500" : "text-red-400"
          }`}
        >
          {todo.completed ? "Done" : "Pending"}
        </span>
        <button
          onClick={() => onEdit(todo)}
          className="text-purple-500 hover:text-purple-700"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
}
