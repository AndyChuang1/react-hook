import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = props => {
  // const [changeTimes, setChangeTimes] = useState(0);
  //componentDidMount
  useEffect(() => {
    console.log('Run onece');
  }, []);
  //componentDidUpdate 像Vue中的watch props.count 此屬性

  return (
    <Table variant='dark' className='mt-4'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Action</th>
          <th>Function</th>
        </tr>
      </thead>
      <TodoItem todoList={props.todoList}></TodoItem>
    </Table>
  );
};

export default TodoList;
