import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/CounterClass';
import Cards from './components/Card';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter></Counter>
        <Cards
          header='KFC'
          title='Fried Chicken'
          text='Special recipt in our fried Chieken'
        ></Cards>
        {/* <CounterS></CounterS> */}
        {/* <CounterR></CounterR> */}
      </header>
    </div>
  );
}

export default App;
