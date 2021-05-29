import { Button, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useTodosContext } from '../store';

/*
JSON source: https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json
*/

function TopBar() {
  const { load } = useTodosContext();
  const onLoad = () => {
    fetch(
      'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json'
    )
      .then((resp) => resp.json())
      .then((data) => load(data));
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}

export default TopBar;
