// pages/TodoDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: todo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todo", id],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (!res.ok) throw new Error("Todo not found");
      return res.json();
    },
  });

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (isError) return <p className="p-4 text-red-600">Error fetching todo</p>;

  return (
    <main className="min-h-screen p-6 bg-purple-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Todo Detail</h2>
        <p>
          <strong>ID:</strong> {todo.id}
        </p>
        <p>
          <strong>Title:</strong> {todo.title}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {todo.completed ? (
            <span className="text-green-600">Completed</span>
          ) : (
            <span className="text-red-500">Incomplete</span>
          )}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Back
        </button>
      </div>
    </main>
  );
}

export default TodoDetail;
