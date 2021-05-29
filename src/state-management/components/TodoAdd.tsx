import * as React from 'react';
import { Button, Input, Grid } from '@chakra-ui/react';
import { SetTodosType, addTodo, TodosType } from '../store';

function TodoAdd({
  todos,
  setTodos,
}: {
  todos: TodosType;
  setTodos: SetTodosType;
}) {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={({ target }) => setNewTodo(target.value)}
      />
      <Button onClick={() => setTodos(addTodo(todos, newTodo))}>
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
