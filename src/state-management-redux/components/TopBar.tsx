import { Button, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useDispatch } from 'react-redux';
import { setTodos } from '../store/actions';
// import { Todo } from '../store/types';

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const dispatch = useDispatch();
  const load = () => {
    fetch(
      'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
    )
      .then((r) => r.json())
      .then((data) => dispatch(setTodos(data)));

    // dispatch(setTodos(someData));
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={load}>Load</Button>
    </Grid>
  );
}

export default TopBar;
