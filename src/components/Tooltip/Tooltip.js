import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

const Tooltip = ({ placement, title, children }) => (
    <div className='tooltip'>
      {children}
    </div>  
);

export default Tooltip;
