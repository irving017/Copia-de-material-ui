import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableCell = ({ children, padding }) => {
  const Wrapper = styled.div`
  display: table-cell;
  flex-wrap: wrap;
  padding: ${padding === 'checkbox' ? 'none': '10px 10px'};
  vertical-align: middle;
  text-align: rigth;
  word-break: break-all;
`;
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

TableCell.prototype = {
  children: PropTypes.node,
  padding: PropTypes.string,
}

export default TableCell;
