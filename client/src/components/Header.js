import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">Airbnb</a>
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/listings">Listings</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/add-post">Add Post</a></li> {/* Ajoutez ce lien */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
