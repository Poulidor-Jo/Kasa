import { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  return (
    <div className="collapse">
      <button className={`collapse-btn`}>
        {title}
      </button>
      <div className={`collapse-content`}>
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