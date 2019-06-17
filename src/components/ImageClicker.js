/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import './SlideShow.css';

const ImageClicker = ({ setCount = null, length = 0, count = 0 }) => {
  const createSquares = () => {
    const squares = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      squares.push(
        <Square count={count} key={i} number={i} setCount={setCount} />
      );
    }
    return squares;
  };

  return <section id="image-clicker">{createSquares()}</section>;
};

export function Square({ count, number, setCount }) {
  return (
    <div
      className={`square ${count === number ? 'active' : null}`}
      onClick={() => setCount(number)}
    />
  );
}

Square.propTypes = {
  count: PropTypes.number,
  number: PropTypes.number,
  setCount: PropTypes.func,
};

ImageClicker.propTypes = {
  setCount: PropTypes.func,
  length: PropTypes.number,
  count: PropTypes.number,
};

export default ImageClicker;
