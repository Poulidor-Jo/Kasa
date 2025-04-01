import PropTypes from 'prop-types'; // Import PropTypes
import './Banner.scss';

const Banner = ({ customClass, title }) => {
  return (
    <section className={`banner ${customClass || ''}`}>
      {title && <h1 className="banner-title">{title}</h1>}
    </section>
  );
};

// Validation des props
Banner.propTypes = {
  customClass: PropTypes.string,
  title: PropTypes.string,
};

export default Banner;