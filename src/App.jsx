// // import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";

// // function App () {
// //   const [todos, setTodos] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const fetchTodos = async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const response = await fetch(
// //         "https://jsonplaceholder.typicode.com/todos"
// //       );
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       setTodos(data);
// //     } catch (err) {
// //       setError(err.message || "Something went wrong");
// //       console.error("Fetch error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="p-4 max-w-xl mx-auto">
// //       <button
// //         onClick={fetchTodos}
// //         className="loadTodos mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 load-todo-btn"
// //       >
// //         Load Todos
// //       </button>

// //       {loading && <p className="text-gray-500">Loading...</p>}
// //       {error && <p className="text-red-600">Error: {error}</p>}

// //       {!loading && todos.length > 0 && (
// //         <ul className="space-y-2">
// //           {todos.map((todo) => (
// //             <li
// //               key={todo.id}
// //               className="p-2 border rounded bg-gray-50 shadow-sm"
// //             >
// //               <strong>{todo.title}</strong> -{" "}
// //               {todo.completed ? "✅ Done" : "❌ Not done"}
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };
// const fetchTodos = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//   if (!response.ok) throw new Error('Network response was not okay')
//     return response.json()
// }
// const App = () => {
//   const { data, error, isLoading} = useQuery(['todos'], fetchTodos)
//   if(isLoading) return <p>Loading...</p>
//   if(error) return <p>Error: {error.message}</p>
//   return (
//     <div>
//       <h1>Hello</h1>
//       <button onClick={fetchTodos}>
//         Load Todos
//       </button>
//       <ul>
//         {data.map((todo)=> (
//           <li key={todo.id}><strong>{todo.title}</strong>{todo.completed ? "✅ Done" : "❌ Not done"}</li>
//         ))}
//       </ul>

//     </div>
//   )
// }
// export default App;

// // {
// // 	!loading && todos.length > 0 && (
// // 		<ul className="space-y-2">
// // 			{todos.slice(0, 10).map((todo) => (
// // 				<li key={todo.id} className="p-2 border rounded bg-gray-50 shadow-sm">
// // 					<strong>{todo.title}</strong> -{" "}
// // 					{todo.completed ? "✅ Done" : "❌ Not done"}
// // 				</li>
// // 			))}
// // 		</ul>
// // 	);
// // }

import { useQuery } from "@tanstack/react-query";

function App() {
  // useQuery automatically handles loading, error, and data
  const {
    data: todos = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    enabled: false, // Don't run on mount, only run when user clicks "Load Todos"
  });

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
          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-white rounded-xl shadow-md px-4 py-3 border-l-4 border-purple-400"
              
              >
                <span className="text-sm font-medium text-gray-700">{todo.title}</span>
                <span className={`text-sm font-semibold ${todo.completed ? 'text-green-500' : 'text-red-400'}`}>{todo.completed ? "Done" : "Pending"}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
