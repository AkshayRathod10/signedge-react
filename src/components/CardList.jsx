import React from 'react';
import Card from './Card';

const CardList = ({ cardsData }) => {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
