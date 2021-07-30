import React from "react";

import "./Footer.css";

const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <footer>
      <div id="footer-links">
        <div>
          <button>Delivery & Returns</button>
          <button>Privacy Policy</button>
        </div>
        <div id="special-links">
          <button className="special-links">Login</button>
          <button className="special-links">Join</button>
        </div>
      </div>
      <div id="social-links">
        <i className="fab fa-instagram" />
        <i className="fab fa-facebook-f" />
        <i className="fab fa-pinterest-p" />
        <i className="fab fa-vimeo-v" />
      </div>
      <div>
        <p>Subscribe for TCSS News</p>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Email address" required />
          <button type="submit">Join</button>
        </form>
      </div>
      <div>© 2019 The Mock Slide :: Site Credit</div>
    </footer>
  );
};

export default Footer;
