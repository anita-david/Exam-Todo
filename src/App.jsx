// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import NotFound from "./pages/NotFound";
// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const todosPerPage = 10;
//   const {
//     data: todos = [],
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useQuery({
//     queryKey: ["todos"],
//     queryFn: async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/todos"
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     },
//     enabled: false,
//   });

//   const lastTodo = currentPage * todosPerPage;
//   const firstTodo = lastTodo - todosPerPage;
//   const currentTodos = todos.slice(firstTodo, lastTodo);
//   const totalPages = Math.ceil(todos.length / todosPerPage);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-6">
//       <div className="max-w-md mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-purple-700">To Do List</h1>
//         </div>
//         <button
//           onClick={refetch}
//           className="w-full mb-4 py-2 px-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
//         >
//           Load Todos
//         </button>
//         {isLoading && <p className="text-gray-500">Loading...</p>}
//         {isError && <p className="text-red-600">Error: {error.message}</p>}
//         {!isLoading && todos.length > 0 && (
//           <>
//             <ul className="space-y-4">
//               {currentTodos.map((todo) => (
//                 <li
//                   key={todo.id}
//                   className="flex justify-between items-center bg-white rounded-xl shadow-md px-4 py-3 border-l-4 border-purple-400"
//                 >
//                   <span className="text-sm font-medium text-gray-700">
//                     {todo.title}
//                   </span>
//                   <span
//                     className={`text-sm font-semibold ${
//                       todo.completed ? "text-green-500" : "text-red-400"
//                     }`}
//                   >
//                     {todo.completed ? "Done" : "Pending"}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-wrap gap-2 justify-center sm:justify-center overflow-x-auto max-w-full mt-6 py-2">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                 <button
//                   key={number}
//                   onClick={() => setCurrentPage(number)}
//                   className={`px-3 py-1 rounded-lg shadow text-sm font-medium ${
//                     currentPage === number
//                       ? "bg-purple-600 text-white"
//                       : "bg-white text-purple-600 border border-purple-300"
//                   }`}
//                 >
//                   {number}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos/:id" element={<TodoDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
