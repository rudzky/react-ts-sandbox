import UseStateComponent from './useStateComponent';
import UseEffectComponent from './useEffectComponent';
import UseContextComponent from './useContextComponent';
import UseReducerComponent from './useReducerComponent';
import UseRefComponent from './useRefComponent';
import CustomHookComponent from './customHookComponent';
import TestComponent from './EventMoreReactComponent';

function Hooks() {
  return (
    <section className="hooks">
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

      <h1>Even more React stuff</h1>
      <TestComponent />
    </section>
  );
}

export default Hooks;
