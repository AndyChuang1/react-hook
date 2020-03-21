import React, { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <p>Class condition</p>
      <button
        className={`btn increase ${count >= 10 && 'hidden'}`}
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
      <div className='number'>{count}</div>
      <button
        className={`btn decrease ${count <= 0 && 'hidden'}`}
        onClick={() => {
          setCount(count - 1);
        }}
      ></button>
    </div>
  );
}

export default Counter;
