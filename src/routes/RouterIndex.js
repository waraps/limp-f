import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes'

// Views
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'

function RouterIndex() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoutes path='/'>
          <Dashboard/>
        </PrivateRoutes>
      </Switch>
    </Router>
  );
}

export default RouterIndex;