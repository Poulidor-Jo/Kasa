import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <button className={`collapse-btn`} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <div className={`collapse-content`}>
        {isOpen ? <span className="collapse-arrow">ouvert</span> : <span className="collapse-arrow">fermer</span>}
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Collapse;