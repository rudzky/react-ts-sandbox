import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Components from './samples';
import Hooks from './hooks';
import './sass/style.scss';
import { StateManagement } from './state-management/StateManagement';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>React Typescript Cool Stuff</h1>
      </header>

      <section className="page">
        <Router>
          <nav className="nav">
            <NavLink exact to="/" activeClassName="active-link">
              Components
            </NavLink>
            <NavLink to="/hooks" activeClassName="active-link">
              Hooks
            </NavLink>
            <NavLink to="/state" activeClassName="active-link">
              State Management
            </NavLink>
          </nav>
          <main className="content">
            <Switch>
              <Route exact path="/">
                <Components />
              </Route>
              <Route path="/hooks">
                <Hooks />
              </Route>
              <Route path="/state">
                <StateManagement />
              </Route>
            </Switch>
          </main>
        </Router>
      </section>
    </div>
  );
}
