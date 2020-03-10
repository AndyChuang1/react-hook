import React, { useState } from 'react';
import './App.scss';
import Counter from './components/counter';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
