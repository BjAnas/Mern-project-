import React from 'react';
import { useParams } from 'react-router-dom';
import listings from './listingsData'; // Importer les données des logements

const Details = () => {
  const { id } = useParams();
  const listing = listings.find(item => item.id === parseInt(id));

  if (!listing) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="details">
      <h1>{listing.title}</h1>
      <img src={listing.image} alt={listing.title} />
      <p>{listing.description}</p>
      {/* Ajoutez plus de détails spécifiques ici */}
    </div>
  );
};

export default Details;

