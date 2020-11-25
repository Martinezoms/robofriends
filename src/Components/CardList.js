import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return <Card key={i} {...robot} />;
      })}
    </div>
  );
};

export default CardList;
