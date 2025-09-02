import { useState } from "react";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type EditTodoModalProps = {
  todo: Todo;
  onClose: () => void;
  onUpdate: (updatedTodo: Todo) => void;
};

export default function EditTodoModal({ todo, onClose, onUpdate }: EditTodoModalProps) {
  const [title, setTitle] = useState<string>(todo.title);
  const [completed, setCompleted] = useState<boolean>(todo.completed);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate({ ...todo, title, completed });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-xl font-bold">Edit Todo</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-purple-300 px-3 py-2 rounded-md"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completed
        </label>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
