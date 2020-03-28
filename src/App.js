import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardPage from './Pages/CardPage';
import CounterPage from './Pages/CounterPage';
import HomePage from './Pages/HomePage';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='/'>尻Code</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/' eventKey='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/counter' eventKey='/counter'>
              Counter
            </Nav.Link>
            <Nav.Link as={Link} to='/card' eventKey='/card'>
              Card
            </Nav.Link>
          </Nav>
        </Navbar>
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
