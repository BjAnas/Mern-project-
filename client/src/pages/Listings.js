import React from 'react';
import { Link } from 'react-router-dom';
import './Listings.css';

const listings = [
  { id: 1, title: 'Villa de luxe', image: '/images/villa1.jpg', description: 'Magnifique villa de luxe avec vue sur la mer' },
  { id: 2, title: 'Appartement moderne', image: '/images/apartment1.jpg', description: 'Appartement moderne en plein centre-ville' },
  { id: 3, title: 'Chalet traditionnel', image: '/images/chalet1.jpg', description: 'Chalet confortable au pied des montagnes' },
  { id: 4, title: 'Maison de campagne', image: '/images/countryhouse1.jpg', description: 'Charmante maison de campagne entourée de verdure' },
  { id: 5, title: 'Appartement avec vue', image: '/images/apartment2.jpg', description: 'Appartement lumineux avec vue panoramique sur la ville' },
  { id: 6, title: 'Chalet en bois', image: '/images/chalet2.jpg', description: 'Authentique chalet en bois avec cheminée' },
  { id: 7, title: 'Maison contemporaine', image: '/images/contemporaryhouse1.jpg', description: 'Maison spacieuse avec design contemporain' },
  { id: 8, title: 'Appartement de charme', image: '/images/charmingapartment1.jpg', description: 'Bel appartement avec beaucoup de charme' },
  { id: 9, title: 'Villa méditerranéenne', image: '/images/mediterraneanvilla1.jpg', description: 'Villa élégante dans un cadre méditerranéen' },
  { id: 10, title: 'Appartement de standing', image: '/images/highendapartment1.jpg', description: 'Appartement de standing avec vue sur la ville' },
  { id: 11, title: 'Maison de vacances', image: '/images/holidayhouse1.jpg', description: 'Maison idéale pour des vacances en famille' },
  { id: 12, title: 'Appartement lumineux', image: '/images/brightapartment1.jpg', description: 'Appartement lumineux et spacieux avec balcon' },
  // Ajoutez d'autres exemples de maisons et d'appartements avec de vraies photos
];

const Listings = () => {
  return (
    <div className="listings">
      <div className="house-listings">
        {listings.map(listing => (
          <div key={listing.id} className="house-card">
            <img src={listing.image} alt={listing.title} />
            <div className="content">
              <h2>{listing.title}</h2>
              <p>{listing.description}</p>
              <div className="btn-container">
                <Link to={`/listing/${listing.id}`}>
                  <button className="btn">Voir détails</button>
                </Link>
                <Link to={`/reservation/${listing.id}`}>
                  <button className="btn">Réserver</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
