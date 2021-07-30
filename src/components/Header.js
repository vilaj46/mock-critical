import React from "react";
import "./Header.css";

const Header = () => (
  <header>
    <ul>
      <i className="fas fa-hamburger" />
      <button className="hidden">Shop</button>
      <button className="hidden">Blog</button>
      <button className="hidden">About</button>
      <a href="/">
        <h1>Mock Critical</h1>
      </a>
      <button className="hidden">Stockists</button>
      <button className="hidden">Contact</button>
      <button className="hidden">Region</button>
      <i className="fas fa-shopping-cart" />
    </ul>
  </header>
);

export default Header;
