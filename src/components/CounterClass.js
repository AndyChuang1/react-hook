import React, { useState, useEffect } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  //if params is empty array, only run once
  useEffect(() => {
    alert(`Hi I'm Class Rendering`);
    return () => {
      // Optional; clean up before unmount
    };
  }, []);
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
