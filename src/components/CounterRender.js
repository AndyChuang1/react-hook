import React, { useState, useEffect } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Happens after every render
    console.log(123);

    return () => {
      // Optional; clean up before next render
    };
  });
  return (
    <div className='counter'>
      <p>Render condition</p>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Click
      </button>
      <h4 className='title' style={{ visibility: toggle ? 'visible' : 'hidden' }}>
        Show
      </h4>
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
