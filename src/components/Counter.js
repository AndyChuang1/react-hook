import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
  const [changeTimes, setChangeTimes] = useState(0);
  //componentDidMount
  // useEffect(() => {
  //   console.log('Run onece');
  //   return () => {
  //     props.setCount(0);
  //   };
  // }, []);
  //componentDidUpdate 像Vue中的watch props.count 此屬性

  useEffect(() => {
    function set() {
      setChangeTimes(changeTimes + 1);
    }
    set();
    console.log('Update', changeTimes);
  }, [props.count]);
  return (
    <div>
      <h1 style={{ fontSize: props.count + 'px' }}>{props.title}</h1>
      <p>count : {props.count}</p>
      <button
        onClick={() => {
          props.setCount(props.count + 1);
        }}
      >
        +1
      </button>
      <button
        className=''
        onClick={() => {
          props.setCount(props.count - 1);
        }}
      >
        -1
      </button>
      <h4>Count 被修改了 {changeTimes} 次</h4>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
};

export default Counter;
