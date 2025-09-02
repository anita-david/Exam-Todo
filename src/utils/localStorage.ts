import { nanoid } from "nanoid";
import type { Todo } from "../types"; // import your global Todo type

const LOCAL_KEY = "localTodos";

export function loadLocalTodos(): Todo[] {
  const data = localStorage.getItem(LOCAL_KEY);
  return data ? (JSON.parse(data) as Todo[]) : [];
}

export function saveLocalTodo(todo: Omit<Todo, "id">): void {
  const newTodo: Todo = {
    ...todo,
    id: `local-${nanoid()}`, // ensures uniqueness for local items
  };

  const todos = loadLocalTodos();
  todos.unshift(newTodo);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

export function updateLocalTodo(updatedTodo: Todo): void {
  const todos = loadLocalTodos().map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

export function deleteLocalTodo(id: string | number): void {
  const todos = loadLocalTodos().filter((todo) => todo.id !== id);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}
