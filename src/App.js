import classes from './App.module.css';
import LoginPage from './pages/login/LoginPage';
import Signup from './Login/signup/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import TodoList from './components/TodoList/TodoList';
import Layout from './UI/Layout/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Layout>
            <DndProvider backend={HTML5Backend}>
              <TodoList edit />
              <TodoList className={classes['todo-list']} />
            </DndProvider>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
