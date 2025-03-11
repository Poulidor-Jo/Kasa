import PropTypes from 'prop-types';
import './DetailedCard.scss';

const DetailedCard = ({ title, location, tags, host, rating }) => {
  return (
    <div className="detailed-card">
      <div className="details-info">
        <div className="details-header">        
          <h1 className="details-header-title">{title}</h1>
          <p className="details-header-location">{location}</p>
        </div>
        <div className="details-tags">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="host-rating">
        <div className="host">
          <div className="host-name">
            <p>{host.name.split(' ')[0]}</p>
            <p>{host.name.split(' ')[1]}</p>
          </div>
          <div className="host-picture">
            <img src={host.picture} alt={`Photo de ${host.name}`} />
          </div>
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa-solid fa-star ${index < rating ? '' : 'empty'}`}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
};

DetailedCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default DetailedCard;