import React, { useState, useEffect } from 'react';
import Counter from '../components/Counter';

const CounterPage = props => {
  const [count, setCount] = useState(0);
  const [titile] = useState('Counter');
  //componentDidMount
  useEffect(() => {
    console.log('Run onece');
    return () => {
      console.log('Counter destroy');
    };
  }, []);
  //componentDidUpdate 像Vue中的watch props.count 此屬性

  return <Counter count={count} setCount={setCount} title={titile}></Counter>;
};

export default CounterPage;
