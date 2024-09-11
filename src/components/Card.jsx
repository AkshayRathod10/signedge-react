import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="text-center">
      <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg mb-2">{title}</h3>
        <p  >{description}</p>
      </div>
    </div>
  );
};

export default Card;