import * as React from 'react';
import { Button, Input, Grid } from '@chakra-ui/react';
import { useTodosContext, addTodo } from '../store';

function TodoAdd() {
  const [newTodo, setNewTodo] = React.useState('');
  const [todos, setTodos] = useTodosContext();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={({ target }) => setNewTodo(target.value)}
      />
      <Button
        onClick={() => {
          setTodos(addTodo(todos, newTodo));
          setNewTodo('');
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
