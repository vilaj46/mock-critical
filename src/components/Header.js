import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <ul>
      <i className="fas fa-hamburger" />
      <a href="/" className="hidden">
        Shop
      </a>
      <a href="/" className="hidden">
        Blog
      </a>
      <a href="/" className="hidden">
        About
      </a>
      <a href="/">
        <h1>Mock Critical</h1>
      </a>
      <a href="/" className="hidden">
        Stockists
      </a>
      <a href="/" className="hidden">
        Contact
      </a>
      <a href="/" className="hidden">
        Region
      </a>
      <i className="fas fa-shopping-cart" />
    </ul>
  </header>
);

export default Header;
