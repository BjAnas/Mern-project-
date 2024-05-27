import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Explorez le monde avec Airbnb</h1>
        <p>Découvrez des logements uniques et des expériences inoubliables dans le monde entier.</p>
        {/* Utilisez Link pour rediriger vers la page Listings */}
        <Link to="/listings">
          <button>Commencer</button>
        </Link>
      </div>
      <div className="featured-listings">
        <h2>Logements populaires à proximité</h2>
        {/* Liste de logements en vedette */}
        <div className="listing">
          <img src="/images/listing1.jpg" alt="Listing 1" />
          <h3>Appartement moderne</h3>
          <p>Appartement lumineux avec vue panoramique sur la ville.</p>
          {/* Utilisez Link pour rediriger vers la page Listings */}
          <Link to="/listings">
            <button>Voir plus</button>
          </Link>
        </div>
        <div className="listing">
          <img src="/images/listing2.jpg" alt="Listing 2" />
          <h3>Villa de luxe</h3>
          <p>Villa spacieuse avec piscine privée et jardin luxuriant.</p>
          {/* Utilisez Link pour rediriger vers la page Listings */}
          <Link to="/listings">
            <button>Voir plus</button>
          </Link>
        </div>
        {/* Ajoutez plus de listes en fonction des besoins */}
      </div>
      <div className="explore">
        <h2>Découvrez les expériences uniques</h2>
        {/* Carrousel d'expériences */}
        <div className="experience">
          <img src="/images/experience1.jpg" alt="Experience 1" />
          <h3>Randonnée guidée en montagne</h3>
          <p>Explorez les sentiers de montagne avec un guide local.</p>
          {/* Utilisez Link pour rediriger vers la page correspondante */}
          <Link to="/mountain-hike-booking">
            <button>En savoir plus</button>
          </Link>
        </div>
        <div className="experience">
          <img src="/images/experience2.jpg" alt="Experience 2" />
          <h3>Atelier de cuisine traditionnelle</h3>
          <p>Apprenez à cuisiner des plats traditionnels avec un chef local.</p>
          {/* Utilisez Link pour rediriger vers la page correspondante */}
          <Link to="/cooking-workshop-booking">
            <button>En savoir plus</button>
          </Link>
        </div>
        {/* Ajoutez plus d'expériences en fonction des besoins */}
      </div>
    </div>
  );
};

export default Home;
