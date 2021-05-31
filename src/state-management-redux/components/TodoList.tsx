import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../store/actions';
import { Store } from '../store/types';

function TodoListItems() {
  const todos = useSelector((state: Store) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onChange={() => dispatch(toggleTodo(todo.id))} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
          />
          <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
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
