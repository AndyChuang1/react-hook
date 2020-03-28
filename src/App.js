import React from 'react';
import './App.scss';
import Cards from './components/Card';
function App() {
  const cardData = [
    { header: 'KFC', title: 'Chicken leg', text: 'Delicous' },
    { header: 'Macdonald', title: 'Franch fries', text: 'Delicous' },
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <div className='row'>
            {cardData.map(item => {
              const { header, title, text } = item;
              return <Cards header={header} title={title} text={text}></Cards>;
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
