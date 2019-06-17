import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer>
    <div id="footer-links">
      <div>
        <a href="/">Delivery & Returns</a>
        <a href="/">Privacy Policy</a>
      </div>
      <a href="/" className="special-links">
        Login
      </a>
      <a href="/" className="special-links">
        Join
      </a>
    </div>
    <div id="social-links">
      <a href="/">
        <i className="fab fa-instagram" />
      </a>
      <a href="/">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="/">
        <i className="fab fa-pinterest-p" />
      </a>
      <a href="/">
        <i className="fab fa-vimeo-v" />
      </a>
    </div>
    <div>
      <p>Subscribe for TCSS News</p>
      <form>
        <input type="text" placeholder="Email address" required />
        <button type="submit">Join</button>
      </form>
    </div>
    <div>© 2019 The Mock Slide :: Site Credit</div>
  </footer>
);

export default Footer;
