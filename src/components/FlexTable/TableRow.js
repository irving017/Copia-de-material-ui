import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRow = ({ children, spacing }) => {
  const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  & > div {
    margin-left: ${spacing}px;
    margin-right: ${spacing}px;
  }
  background-color: #FFFFFF;
`;
  return (
    <Wrapper>
    {children}
  </Wrapper>    
  )
}

TableRow.prototype = {
  children: PropTypes.node,
  spacing: PropTypes.number,
}

TableRow.defaultProps = {
  spacing: 10,
}

export default TableRow;
