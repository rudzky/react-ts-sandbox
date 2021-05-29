import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import { useTodosContext } from '../store';

function TodoListItems() {
  const { todos, toggleTodo, removeTodo, updateTodo } = useTodosContext();
  return (
    <>
      {todos.map((todo: { id: number; text: string; done: boolean }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onChange={() => toggleTodo(todo.id)} checked={todo.done} />
          <Input
            mx={2}
            value={todo.text}
            onChange={({ target }) => updateTodo(todo.id, target.value)}
          />
          <p>{todo.done ? 'true' : 'false'}</p>
          <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
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
