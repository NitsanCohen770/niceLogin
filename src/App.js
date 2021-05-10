import classes from './App.module.css';
import LoginPage from './LoginPage/LoginPage';
import Signup from './LoginPage/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import TodoList from './TodoPage/components/TodoList/TodoList';
import Layout from './TodoPage/UI/Layout/Layout';

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
