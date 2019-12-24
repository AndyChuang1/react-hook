import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.scss';
import Counter from './components/Counter';
import Loader from './components/Loader';
import Form from './components/Form';
import { Button, Nav } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [titile] = useState('Counter');
  const [formStatus, setFormStatus] = useState(false);
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
        </Nav>
        <div className='text'>This is my second Time study react.js!</div>
        <Switch>
          <Route path='/form' component={() => <Form setFormStatus={setFormStatus}></Form>} />
          <Route path='/counter' component={() => <Counter count={count} setCount={setCount} title={titile}></Counter>} />
          />
        </Switch>
        <img src={logo} width='50' alt='img'></img>
        <Button
          variant='primary'
          onClick={() => {
            setisLoading(!isLoading);
          }}
        >
          Click
        </Button>
        <div className='d-flex'>{isLoading ? <Loader></Loader> : null}</div>
        {formStatus ? <p>Form Done</p> : <p>Please fill in form</p>}
      </div>
    </Router>
  );
}

export default App;
