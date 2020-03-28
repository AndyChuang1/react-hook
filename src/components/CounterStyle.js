import React, { useState, useEffect } from 'react';

function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    // Happens when `count` changes
    if (count === 10) {
      alert(`It's maximum,Please count down`);
    }
    if (count === 0) {
      alert(`It's minimum,Please count up`);
    }
    return () => {
      // Optional; clean up when `count` changed
    };
  }, [count]);
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
