import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Transactions from './components/Transactions'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <div className="app-container">
    <Navbar />
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/transactions" component={Transactions} />
      <NotFound />
    </Switch>
  </div>
)

export default App
