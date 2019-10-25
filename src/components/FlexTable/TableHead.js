import React from 'react';
import PropTypes from 'prop-types';
import './DivTable.css';

const TableHead = ({ children }) => {
  return (
    <div className='tableHead'>
    {children}
  </div>    
  )
}

TableHead.prototype = {
  children: PropTypes.node,
}

export default TableHead;