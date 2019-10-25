import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow'

const Table = styled.div`
  display: table;
  width: 100%;
  overflow : hidden;
  ${TableRow.Space} {
    height: ${({ space }) => space ? space: '10px'}
  }
`;

/** @component */
export default Table;