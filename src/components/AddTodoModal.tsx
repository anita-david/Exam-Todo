import { useState } from "react";

interface AddTodoModalProps {
  onClose: () => void;
  onAdd: (todo: { title: string; completed: boolean }) => void;
}

export default function AddTodoModal({ onClose, onAdd }: AddTodoModalProps) {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, completed: false });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Add Todo</h2>
        <input
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-purple-300 rounded mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
