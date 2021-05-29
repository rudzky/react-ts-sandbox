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

// Custom Hook

const useTodos = (initial: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initial);
  const [newTodo, setNewTodo] = useState('');

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo() {
      setTodos((tl) => addTodo(tl, newTodo));
      setNewTodo('');
    },
    updateTodo(id: number, text: string) {
      setTodos((tl) => updateTodo(tl, id, text));
    },
    toggleTodo(id: number) {
      setTodos((tl) => toggleTodo(tl, id));
    },
    removeTodo(id: number) {
      setTodos((tl) => removeTodo(tl, id));
    },
    load(todos: Todo[]) {
      setTodos(todos);
    },
  };
};

type UseTodosType = ReturnType<typeof useTodos>;

const TodoContext = createContext<UseTodosType | null>(null);

export const useTodosContext = () => useContext(TodoContext)!;

export const TodosProvider = ({ children }: { children: ReactNode }) => (
  <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
);
