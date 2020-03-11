import React, { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div className='counter'>
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
    </div>
  );
}

export default Counter;
