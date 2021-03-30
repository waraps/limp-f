import {Provider} from 'react-redux'
import store from './redux/store'
import RouterIndex from './router/RouterIndex'

function App() {
  return (
      <Provider store={store}>
        <RouterIndex />
      </Provider>
    )
}

export default App;
