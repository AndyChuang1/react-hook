import React, { useState } from 'react';
import './App.scss';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <header className='App-header'>
        <button
          className='btn increase'
          onClick={() => {
            setCount(count + 1);
          }}
        ></button>
        <div className='number'>{count}</div>
        <button
          className='btn decrease'
          onClick={() => {
            setCount(count - 1);
          }}
        ></button>
      </header>
    </div>
  );
}

export default App;
