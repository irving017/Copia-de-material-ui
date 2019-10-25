import React from 'react';
import PropTypes from 'prop-types';
import './DivTable.css';

const TableBody = ({ children }) => {
  return (
    <div className='tableBody'>
    {children}
  </div>    
  )
}

TableBody.prototype = {
  children: PropTypes.node,
}

export default TableBody;