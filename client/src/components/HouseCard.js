import React from 'react';
import './HouseCard.css'; // Vous pouvez créer ce fichier CSS pour styliser votre composant

const HouseCard = ({ title, image, description }) => {
  return (
    <div className="house-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HouseCard;
