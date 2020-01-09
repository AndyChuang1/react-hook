import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.scss';
import CounterPage from './container/Counter';
import FormPage from './container/Form';
import Home from './container/Home';
import Todo from './container/Todo';
import { Nav } from 'react-bootstrap';

function App() {
  const [APPstatus, setAPPstatus] = useState(false);
  return (
    <Router>
      <div className='App'>
        <Nav variant='tabs' defaultActiveKey='/' style={{ background: 'azure' }}>
          <Nav.Item>
            <Nav.Link as={Link} to='/' eventKey='/'>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to='/counter' eventKey='/counter'>
              counter
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='form' as={Link} to='/form'>
              Form
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='todo' as={Link} to='/todolist'>
              Todolist
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className='text'>This is my second Time study react.js!</div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/form' component={FormPage} />
          <Route path='/counter' component={CounterPage} />
          <Route path='/todolist' component={Todo} />
          />
        </Switch>
        {/* <img src={logo} width='50' alt='img'></img>
        <button
          onClick={() => {
            setAPPstatus(!APPstatus);
          }}
        >
          Click
        </button>
        <p>{APPstatus.toString()}</p> */}
      </div>
    </Router>
  );
}

export default App;
