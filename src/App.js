import React from 'react'
import Navbar from './components/Navbar'
import  {BrowserRouter as Router,
          Switch,
          Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { User } from './pages/User'

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/user' component={User} />
          <Route path='/' render={()=> <h1>404</h1>}  />
      </Switch>

    </Router>
  );
}

export default App;
