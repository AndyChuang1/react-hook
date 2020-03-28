import React from 'react';
import './App.scss';
import Counter from './components/CounterClass';
import CounterS from './components/CounterStyle';
import CounterR from './components/CounterRender';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter></Counter>
        {/* <CounterS></CounterS> */}
        {/* <CounterR></CounterR> */}
      </header>
    </div>
  );
}

export default App;
