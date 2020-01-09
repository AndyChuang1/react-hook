import React, { useState, useEffect } from 'react';
import TodoList from '../components/Todo/Todolist';

const Todo = () => {
  const [itemList, setItemList] = useState([]);
  const [inputValue, setinputValue] = useState('');
  //componentDidMount
  useEffect(() => {
    console.log('Run onece');
  }, []);

  const addItem = () => {
    const newTodo = [...itemList, inputValue];
    setItemList(newTodo);
    setinputValue('');
  };
  const deleteItem
  return (
    <div id='todo' className='container'>
      <h1>Todo List</h1>
      <input
        value={inputValue}
        onChange={e => {
          setinputValue(e.target.value);
        }}
      ></input>
      <button className='btn-pimary ml-2' onClick={addItem}>
        Add
      </button>
      <TodoList todoList={itemList}></TodoList>
    </div>
  );
};

export default Todo;
