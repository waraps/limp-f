import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './views/Login'
import Dashboard from './views/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
