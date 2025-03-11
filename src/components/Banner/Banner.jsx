import PropTypes from 'prop-types'; // Import PropTypes
import './Banner.scss'; // Assure-toi que ce chemin est correct

const Banner = ({ className, title }) => {
  return (
    <section className={`banner ${className || ''}`}>
      {title && <h1 className="banner-title">{title}</h1>}
    </section>
  );
};

// Validation des props
Banner.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string, // Enlever .isRequired pour le rendre optionnel
};

export default Banner;