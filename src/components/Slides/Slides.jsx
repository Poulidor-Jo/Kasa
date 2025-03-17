import PropTypes from 'prop-types';
import { useState } from 'react';
import './Slides.scss';

const Slides = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {/* Image principale */}
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="carousel-image"
      />

      {/* Contrôles du carrousel */}
      {pictures.length > 1 && (
        <>
          <i
            className="fa-solid fa-chevron-left chevron chevron-left"
            onClick={goToPrevious}
          ></i>
          <i
            className="fa-solid fa-chevron-right chevron chevron-right"
            onClick={goToNext}
          ></i>
        </>
      )}

      {/* Compteur */}
      {pictures.length > 1 && (
        <div className="carousel-counter">
        {currentIndex + 1}/{pictures.length}
        </div>
        )}
    </div>
  );
};

Slides.propTypes = {
  
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slides;