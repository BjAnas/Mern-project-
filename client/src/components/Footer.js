import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>À propos de nous</h3>
          <p>
            Nous proposons les meilleures maisons à louer pour vos vacances.
            Profitez de notre sélection de propriétés haut de gamme dans des
            emplacements privilégiés.
          </p>
        </div>
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Entrez votre email" />
            <button type="submit">S'abonner</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VotreNom. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
