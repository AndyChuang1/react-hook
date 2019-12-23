import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

const Loader = props => {
  const [changeTimes, setChangeTimes] = useState(0);
  //componentDidMount
  useEffect(() => {
    console.log('Run onece');
  }, []);
  //componentDidUpdate 像Vue中的watch props.count 此屬性

  return <div id='loader'></div>;
};

export default Loader;
