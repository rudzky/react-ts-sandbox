import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import { removeTodo, toggleTodo, updateTodo, useTodosContext } from '../store';

function TodoListItems() {
  const [todos, setTodos] = useTodosContext();
  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => setTodos(toggleTodo(todos, todo.id))} />
          <Input
            mx={2}
            value={todo.text}
            onChange={({ target }) =>
              setTodos(updateTodo(todos, todo.id, target.value))
            }
          />
          <Button onClick={() => setTodos(removeTodo(todos, todo.id))}>
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
