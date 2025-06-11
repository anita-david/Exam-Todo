import { nanoid } from "nanoid";
const LOCAL_KEY = "localTodos";

export function loadLocalTodos() {
  const data = localStorage.getItem(LOCAL_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveLocalTodo(todo) {
  const newTodo = {
    ...todo,
    id: `local-${nanoid()}`,
  };

  const todos = loadLocalTodos();
  todos.unshift(newTodo);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

export function updateLocalTodo(updatedTodo) {
  const todos = loadLocalTodos();
  const updated = todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
}

export function deleteLocalTodo(id) {
  const todos = loadLocalTodos().filter((todo) => todo.id !== id);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}
