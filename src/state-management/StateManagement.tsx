import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import { useTodos } from './store';

export function StateManagement() {
  const [todos, setTodos] = useTodos([]);

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoAdd todos={todos} setTodos={setTodos} />
      </Box>
    </ChakraProvider>
  );
}
