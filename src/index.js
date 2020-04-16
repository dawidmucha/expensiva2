import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Categories from './components/routes/Categories'
import Dashboard from './components/routes/Dashboard'
import Stats from './components/routes/Stats'
import Navbar from './components/modals/Navbar'

const App = () => {
    return ( //conditional rendering, if logged in render this, otherwise login screen
        <div>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Dashboard />    
                        </Route>    
                        <Route path='/categories'>
                            <Categories />
                        </Route>
                        <Route path='/stats'>
                            <Stats />
                        </Route>
                    </Switch>
                        <Navbar />
                </Router>
            </Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))