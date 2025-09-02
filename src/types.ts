// src/types.ts
export type ApiTodo = {
  id: number;
  title: string;
  completed: boolean;
};

export type LocalTodo = {
  id: string;
  title: string;
  completed: boolean;
};

// Unified app-wide Todo
export type Todo = {
  id: string; // always string inside app
  title: string;
  completed: boolean;
};
