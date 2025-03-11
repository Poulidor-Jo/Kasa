import PropTypes from 'prop-types';
import { useState } from 'react';
import './Slides.scss';

const Slides = ({ pictures }) => {
  return (
    <div className="carousel">
      {/* Image principale */}
      <img
        src={pictures[0]}
        alt={`Image 1`}
        className="carousel-image"
      />
    </div>
  );
};

Slides.propTypes = {
  
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slides;