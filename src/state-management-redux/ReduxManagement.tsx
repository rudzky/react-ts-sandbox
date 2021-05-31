import { Provider } from 'react-redux';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

import store from './store/store';

export function ReduxManagement() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </ChakraProvider>
    </Provider>
  );
}
