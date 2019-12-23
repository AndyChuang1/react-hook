import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Counter from './components/Counter';
import Loader from './components/Loader';

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [titile] = useState('Counter');
  return (
    <div className='App'>
      <div className='text'>This is my second Time study react.js!</div>
      <img src={logo} width='50' alt='img'></img>
      <button
        onClick={() => {
          setisLoading(!isLoading);
        }}
      >
        Click
      </button>
      <Counter count={count} setCount={setCount} title={titile}></Counter>
      <div className='d-flex'>{isLoading ? <Loader></Loader> : null}</div>
    </div>
  );
}

export default App;
