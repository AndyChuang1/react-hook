import React, { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <p>Render condition</p>
      {count >= 10 ? null : (
        <button
          className='btn increase'
          onClick={() => {
            setCount(count + 1);
          }}
        ></button>
      )}

      <div className='number'>{count}</div>
      {count <= 0 ? null : (
        <button
          className='btn decrease'
          onClick={() => {
            setCount(count - 1);
          }}
        ></button>
      )}
    </div>
  );
}

export default Counter;
