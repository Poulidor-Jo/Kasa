import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="collapse">
      <button className={`collapse-btn ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>
      {isOpen && (
        <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Collapse;