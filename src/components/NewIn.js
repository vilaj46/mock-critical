import React from "react";

import "./NewIn.css";

import swimsuit from "../images/swimsuit.jpg";
import hood from "../images/hood.jpg";
import bag from "../images/bag.jpg";
import jacket from "../images/jacket.jpg";
import hoodie from "../images/hoodie.jpg";
import hoodie2 from "../images/hoodie2.jpg";
import shirt from "../images/shirt.jpg";
import shorts from "../images/shorts.jpg";

const NewIn = () => {
  const images = [swimsuit, hood, bag, jacket, hoodie, hoodie2, shirt, shorts];
  const descriptions = [
    "Moon Tee - White",
    "Black Hole Boardshort - Phantom",
    "Moon Tote - Mist Yellow",
    "Moonlighting Crew - Black",
    "Black Hole Pant - Phantom",
    "Moon Cap - Dirty White",
    "Break Through Tee - Green Black",
    "Break On Through Tote - Phantom",
  ];

  // Jumbled CZ Wetsuit Steamer - Phantom

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return (
    <section id="new-in">
      <a href="/#">
        <h3>New in</h3>
      </a>
      <ul id="new-in-list">
        {images.map((img) => (
          <li key={img}>
            <a href="/#">
              <img src={img} alt="Clothing" className="new-img" />
              <div className="sizes">
                <p>Available Sizes</p>
                <p>S M L XL</p>
              </div>
              <p className="clothing">{descriptions[getRandomInt(8)]}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewIn;
