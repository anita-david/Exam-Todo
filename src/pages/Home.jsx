// pages/Home.jsx
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import TodoItem from "../components/TodoItem";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;
	  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");


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

  const filteredTodos = todos.filter((todo) => {
  const matchesSearch = todo.title
    .toLowerCase()
    .includes(searchQuery.toLowerCase());

  const matchesFilter =
    filterStatus === "all" ||
    (filterStatus === "completed" && todo.completed) ||
    (filterStatus === "incomplete" && !todo.completed);

  return matchesSearch && matchesFilter;
});
	const lastTodo = currentPage * todosPerPage;
  const firstTodo = lastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(firstTodo, lastTodo);
  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-6">
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
				 <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Search todos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
        />
        <div className="flex gap-2">
          {["all", "completed", "incomplete"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition shadow-sm ${
                filterStatus === status
                  ? "bg-purple-600 text-white"
                  : "bg-white border border-purple-300 text-purple-600"
              }`}
            >
              {status[0].toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>
        {isLoading && <p className="text-gray-500">Loading...</p>}
        {isError && <p className="text-red-600">Error: {error.message}</p>}
        {!isLoading && todos.length > 0 && (
          <>
            <ul className="space-y-4">
              {currentTodos.map((todo) => (
                 <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>

            <nav aria-label="Pagination Navigation" className="flex flex-wrap gap-2 justify-center sm:justify-center overflow-x-auto max-w-full mt-6 py-2">
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
            </nav>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;
