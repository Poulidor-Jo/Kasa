import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Initialisation de l'état

  return (
    <div className="collapse">
      <button
        className={`collapse-btn ${isOpen ? 'open' : ''}`} // Ajout dynamique de la classe `open`
        onClick={() => setIsOpen(!isOpen)} // Mise à jour de l'état
      >
        {title}
        <i className="fa-solid fa-chevron-down"></i> {/* Chevron par défaut */}
      </button>
      <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
      <ul>{content}</ul>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;