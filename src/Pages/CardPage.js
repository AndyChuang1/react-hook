import React from 'react';
import Cards from '../components/Card';

function CardPage() {
  const cardData = [
    { header: 'KFC', title: 'Chicken leg', text: 'Delicous' },
    { header: 'Macdonald', title: 'Franch fries', text: 'Delicous' },
  ];
  return (
    <div id='cardPage'>
      <h1>CardPage</h1>
      <div className='row'>
        {cardData.map(item => {
          const { header, title, text } = item;
          return <Cards key={header} header={header} title={title} text={text}></Cards>;
        })}
      </div>
    </div>
  );
}

export default CardPage;
