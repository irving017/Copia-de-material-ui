import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const TableSortLabel = ({ children, icon, chuck, active }) => {
  const [direction , setDirection] = useState(0);
  const Wrapper = styled.span`
    display: flex;
    width: fit-content;
    & i {
      display: ${active ? 'inherit' : 'none'};
      margin-right: 10px;
    }
    cursor: ${chuck ? "url('http://cur.cursors-4u.net/people/images6/peo696.gif'), auto": 'pointer'};
    align-items: center;
  `;
  return (
    <Wrapper
      onClick={() => setDirection(!direction)}
    >
      <i>{direction ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}</i>
      {children}
    </Wrapper>
  )
}

TableSortLabel.prototype = {
  children: PropTypes.node,
  icon: PropTypes.element,
  selected: PropTypes.bool,
} 

export default TableSortLabel;
