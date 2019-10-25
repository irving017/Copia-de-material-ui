import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableCell = ({ children, checkbox }) => {
  const Wrapper = styled.div`
  max-height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  flex: ${checkbox ? 'none': '1 0 0' };
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
`;
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

TableCell.prototype = {
  children: PropTypes.node,
  checkbox: PropTypes.bool,
}

TableCell.defaultProps = {
  checkbox: false,
}

export default TableCell;
