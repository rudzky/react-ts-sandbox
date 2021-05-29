import { createContext, ReactNode, useContext, useState } from 'react';

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Native React Implementation
// It's all about what is going to be returned
export const useTodos = (initial: Todo[]) => useState<Todo[]>(initial);
export type UseTodosType = ReturnType<typeof useTodos>;
export type TodosType = UseTodosType[0];
export type SetTodosType = UseTodosType[1];

const TodoContext = createContext<UseTodosType | null>(null);

export const useTodosContext = () => useContext(TodoContext)!;

export const TodosProvider = ({ children }: { children: ReactNode }) => (
  <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
);
