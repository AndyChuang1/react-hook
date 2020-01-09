import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [isLoading, setisLoading] = useState(false);
  //componentDidMount
  useEffect(() => {
    console.log('Run onece');
  }, []);
  //componentDidUpdate 像Vue中的watch props.count 此屬性

  return (
    <div id='home'>
      <Button
        variant='primary'
        onClick={() => {
          setisLoading(!isLoading);
        }}
      >
        Click
      </Button>
      <div className='d-flex'>{isLoading ? <Loader></Loader> : null}</div>
    </div>
  );
};

export default Home;
