import { createStore } from 'redux';
import { Todo, Store } from './types';
import {
  ActionTypes,
  SET_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  SET_TODO_INPUT,
  ADD_TODO,
} from './actions';

// Standard interface and functions
const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Redux implementation

function todoReducer(
  state: Store = {
    todos: [],
    newTodo: '',
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case SET_TODO_INPUT:
      return {
        ...state,
        newTodo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, state.newTodo),
        newTodo: '',
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.text),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload),
      };
    default:
      return state;
  }
}

const store = createStore(todoReducer);

export default store;
