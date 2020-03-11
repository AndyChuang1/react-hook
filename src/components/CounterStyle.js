import React, { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <p>Style condition</p>
      <button
        className='btn increase'
        style={{ visibility: count >= 10 ? 'hidden' : 'visible' }}
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
      <div className='number'>{count}</div>
      <button
        className='btn decrease'
        style={{ visibility: count <= 0 ? 'hidden' : 'visible' }}
        onClick={() => {
          setCount(count - 1);
        }}
      ></button>
    </div>
  );
}

export default Counter;
