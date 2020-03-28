import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardPage from './Pages/CardPage';
import CounterPage from './Pages/CounterPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/counter'>Counter</Link>
              </li>
              <li>
                <Link to='/card'>Card</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route path='/counter'>
            <CounterPage></CounterPage>
          </Route>
          <Route path='/card'>
            <CardPage></CardPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
