import { useEffect } from 'react';
import Prism from 'prismjs';
import './sass/style.scss';
// import samples from './samples';
import UseStateComponent from './samples/hooks/useStateComponent';
import UseEffectComponent from './samples/hooks/useEffectComponent';
import UseContextComponent from './samples/hooks/useContextComponent';
import UseReducerComponent from './samples/hooks/useReducerComponent';
import UseRefComponent from './samples/hooks/useRefComponent';
import CustomHookComponent from './samples/hooks/customHookComponent';

export default function App() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>React Typescript Hooks Stuff</h1>
      </header>

      <main>
        <h1>useState</h1>
        <UseStateComponent />

        <h1>useEffect</h1>
        <UseEffectComponent />

        <h1>useContext</h1>
        <UseContextComponent />

        <h1>useReducer</h1>
        <UseReducerComponent />

        <h1>useRef</h1>
        <UseRefComponent />

        <h1>useFetchData</h1>
        <CustomHookComponent />
      </main>
    </div>
  );
}
