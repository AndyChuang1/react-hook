import React from 'react';

import { Card } from 'react-bootstrap';
function Cards({ header, title, text }) {
  return (
    <div className='Cards'>
      <Card className='mr-2' bg='dark' style={{ width: '18rem' }}>
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
