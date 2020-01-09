import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const TodoItem = props => {
  // const [changeTimes, setChangeTimes] = useState(0);
  //componentDidMount
  useEffect(() => {
    console.log('Run onece');
  }, []);
  //componentDidUpdate 像Vue中的watch props.count 此屬性

  return (
    <tbody>
      {props.todoList.map((item, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{item}</td>
            <td>
              <Button variant='success'>Complete</Button>
              <Button variant='danger' className='ml-4'>
                Delete
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TodoItem;
