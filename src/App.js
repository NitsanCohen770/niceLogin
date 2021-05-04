import './App.css';
import LoginPage from './pages/login/LoginPage';
import SideBar from './UI/Sidebar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
