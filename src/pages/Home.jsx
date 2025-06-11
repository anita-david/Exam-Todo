import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import TodoItem from "../components/TodoItem";
import AddTodoModal from "../components/AddTodoModal";
import EditTodoModal from "../components/EditTodoModal";
import { nanoid } from "nanoid";
import {
  loadLocalTodos,
  saveLocalTodo,
  updateLocalTodo,
  deleteLocalTodo,
} from "../utils/localStorage";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const queryClient = useQueryClient();
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

      const apiTodos = await res.json();
      const localTodos = loadLocalTodos();
      return [...localTodos, ...apiTodos];
    },

    enabled: false,
  });

  const addTodoMutation = useMutation({
    mutationFn: async (newTodo) => {
      return newTodo;
    },
    onSuccess: (data) => {
      saveLocalTodo(data);
      queryClient.setQueryData(["todos"], (old = []) => [data, ...old]);
      queryClient.setQueryData(["todo", data.id], data);
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: async (updatedTodo) => {
      if (typeof updatedTodo.id === "string") {
        updateLocalTodo(updatedTodo);
        return updatedTodo;
      } else {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodo),
          }
        );
        return res.json();
      }
    },
    onSuccess: (updated) => {
      queryClient.setQueryData(["todos"], (oldTodos = []) =>
        oldTodos.map((todo) => (todo.id === updated.id ? updated : todo))
      );
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id) => {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      return id;
    },
    onSuccess: (id) => {
      if (typeof id === "string") {
        deleteLocalTodo(id);
      }

      queryClient.setQueryData(["todos"], (old = []) =>
        old.filter((todo) => todo.id !== id)
      );
    },
  });
  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setShowEditModal(true);
  };

  const handleUpdate = (updatedTodo) => {
    updateTodoMutation.mutate(updatedTodo);
  };

  const handleAdd = (todo) => {
    const localId = `local-${nanoid()}`;

    const newTodo = {
      ...todo,
      id: localId, // ✅ generate ID here
      completed: false,
    };

    addTodoMutation.mutate(newTodo);
  };

  const handleDelete = (id) => {
    deleteTodoMutation.mutate(id);
  };

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
          <header className="text-3xl font-bold text-purple-700">
            To Do List
          </header>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full mb-4 py-2 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
        >
          Add Todo
        </button>
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
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
            </ul>

            <nav
              aria-label="Pagination Navigation"
              className="flex flex-wrap gap-2 justify-center sm:justify-center overflow-x-auto max-w-full mt-6 py-2"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
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
                )
              )}
            </nav>
          </>
        )}
        {showAddModal && (
          <AddTodoModal
            onClose={() => setShowAddModal(false)}
            onAdd={handleAdd}
          />
        )}
        {showEditModal && selectedTodo && (
          <EditTodoModal
            todo={selectedTodo}
            onClose={() => {
              setShowEditModal(false);
              setSelectedTodo(null);
            }}
            onUpdate={handleUpdate}
          />
        )}
      </div>
    </main>
  );
}

export default Home;
