import './Card.scss'; // Import des styles spécifiques à la carte
import PropTypes from 'prop-types';

const Card = ({ image, title, link }) => {
  return (
    <a href={link} className="housing-link">
      <div className="housing-card">
        <div className="image-container">
          <img src={image} alt={title} />
        </div>
        <h3 className="housing-title">{title}</h3>
      </div>
    </a>
  );
};

Card.propTypes = {
  image: PropTypes.string, // image peut être vide
  title: PropTypes.string.isRequired, // titre obligatoire
  link: PropTypes.string.isRequired, // lien obligatoire
};

export default Card;