import React from 'react';
import { Link } from 'react-router-dom';
import './House.css';

const House = ({ id, title, image, description }) => (
  <div className="house">
    <img src={image} alt={title} className="house-image"/>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to={`/listings/${id}`} className="details-link">Voir détails</Link>
  </div>
);

export default House;
