import {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes'

// import auth from '../api/auth'

// Views
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'

function RouterIndex() {

  useEffect(() => {
    getRefreshToken()
  })

  const getRefreshToken = async () => {
    try {
      console.log('refresh')
      // const response = auth.refreshToken()
      // const { access_token } = response.data
      // localStorage.setItem('token', access_token)     
    } catch (error) {
      console.log(error)
    }
  }

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