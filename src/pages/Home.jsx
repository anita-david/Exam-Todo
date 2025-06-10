// pages/Home.jsx
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const {
    data: todos = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    },
    enabled: false,
  });

  const lastTodo = currentPage * todosPerPage;
  const firstTodo = lastTodo - todosPerPage;
  const currentTodos = todos.slice(firstTodo, lastTodo);
  const totalPages = Math.ceil(todos.length / todosPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-6">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700">To Do List</h1>
        </div>
        <button
          onClick={refetch}
          className="w-full mb-4 py-2 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
        >
          Load Todos
        </button>
        {isLoading && <p className="text-gray-500">Loading...</p>}
        {isError && <p className="text-red-600">Error: {error.message}</p>}
        {!isLoading && todos.length > 0 && (
          <>
            <ul className="space-y-4">
              {currentTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center bg-white rounded-xl shadow-md px-4 py-3 border-l-4 border-purple-400"
                >
                  <Link to={`/todos/${todo.id}`} className="text-sm font-medium text-purple-700 hover:underline">
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
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-start overflow-x-auto max-w-full mt-6 py-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-3 py-1 min-w-[2.5rem] rounded-lg shadow text-sm font-medium whitespace-nowrap transition ${
                    currentPage === number
                      ? "bg-purple-600 text-white"
                      : "bg-white text-purple-600 border border-purple-300"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
