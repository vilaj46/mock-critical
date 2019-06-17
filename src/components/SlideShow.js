/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SlideShow.css';

import ImageClicker from './ImageClicker';

import useCount from '../hooks/useCount';

const SlideShow = ({ slideShowImages }) => {
  const [count, setCount] = useCount(0);
  const [image, setImage] = useState(slideShowImages[count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage(count, slideShowImages.length, setCount);
    }, 8000);

    setImage(slideShowImages[count]);
    return () => clearTimeout(timer);
  }, [count, setCount, slideShowImages]);

  return (
    <section id="slide-show">
      <div
        className="slide-img"
        style={{
          background: `no-repeat center/100% url("${image}")`,
        }}
      >
        <div id="slide-show-content">
          <LeftArrow
            count={count}
            length={slideShowImages.length}
            setCount={setCount}
          />
          <RightArrow
            count={count}
            length={slideShowImages.length}
            setCount={setCount}
          />
        </div>
      </div>
      <section id="click-wrapper">
        <ImageClicker
          setCount={setCount}
          length={slideShowImages.length}
          count={count}
        />
      </section>
    </section>
  );
};

export function LeftArrow({ count, length, setCount }) {
  return (
    <i
      className="fas fa-arrow-left arrow"
      onClick={() => previousImage(count, length, setCount)}
    />
  );
}

export function RightArrow({ count, length, setCount }) {
  return (
    <i
      className="fas fa-arrow-right arrow"
      onClick={() => nextImage(count, length, setCount)}
    />
  );
}

LeftArrow.propTypes = {
  count: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

RightArrow.propTypes = {
  count: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

SlideShow.propTypes = {
  slideShowImages: PropTypes.array.isRequired,
};

function nextImage(count, length, setCount) {
  if (count + 1 > length - 1) {
    setCount(0);
  } else {
    setCount(count + 1);
  }
}

function previousImage(count, length, setCount) {
  if (count - 1 < 0) {
    setCount(length - 1);
  } else {
    setCount(count - 1);
  }
}

export default SlideShow;
