import React, { Fragment } from 'react';
import styled from 'styled-components';

const Space = styled.div`
display: table-row;
width: 100%;
background: none;
`;

const TableRow = ({ children }) => {
  const Wrapper = styled.div`
  display: table-row;
  width: 100%;
  background-color: #FFFFFF;
`;
  return (
    <Fragment>
      <Wrapper>
        {children}
      </Wrapper>
      <Space />
    </Fragment>
  )
}

TableRow.Space = Space;

export default TableRow;