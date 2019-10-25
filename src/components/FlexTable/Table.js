import React from 'react';
import PropTypes from 'prop-types';
import './DivTable.css';

const Table = ({ children }) => {
  return (
    <div className='table'>
      {children}
    </div>
  )
}

Table.prototype ={
  children: PropTypes.node,
}

export default Table;
