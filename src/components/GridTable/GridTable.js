import React from 'react';
import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableSortLabel from '../TableSortLabel';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import { Reddit, Adb, Face, SportsKabaddi } from '@material-ui/icons'
import './GridTable.css'


const headCells = [
  { id: 'program', numeric: false, disablePadding: true, label: 'Program Name' },
  { id: 'location', numeric: true, disablePadding: false, label: 'Location' },
  { id: 'create', numeric: false, disablePadding: false, label: 'Created By' },
  { id: 'update', numeric: true, disablePadding: false, label: 'Last update' },
  { id: 'applicant', numeric: true, disablePadding: false, label: 'Applicants' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Actions' },
];

const sortHeader = (props) => {
  const { sortFunction } = props; 
  return (
    <TableRow>
      <TableCell padding='checkbox'>
        <Checkbox />
      </TableCell>
      {headCells.map(header => 
        <TableCell>
          <TableSortLabel>{header.label}</TableSortLabel>
        </TableCell>
      )}
    </TableRow>
  )
}

const GridTable = () => {
  return (
    <div className='board2'>
      <Table>
        <sortHeader/>
        <TableRow>
          <TableCell checkbox><Checkbox /></TableCell>
          <TableCell><div>adasd<div>saddasa</div></div></TableCell>
          <TableCell>Locaassdfsdfsd</TableCell>
          <TableCell>asdasda</TableCell>
          <TableCell>Last Update</TableCell>
          <TableCell>Inactive since</TableCell>
          <TableCell><Chip label="Told me" color="secondary"/></TableCell>
          <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell checkbox><Checkbox /></TableCell>
          <TableCell><div>adasd<div>saddasa</div></div></TableCell>
          <TableCell>Locaassdfsdfsd</TableCell>
          <TableCell>asdasda</TableCell>
          <TableCell>Last Update</TableCell>
          <TableCell>Inactive since</TableCell>
          <TableCell><Chip label="Told me" color="secondary"/></TableCell>
          <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell checkbox><Checkbox /></TableCell>
          <TableCell><div>adasd<div>saddasa</div></div></TableCell>
          <TableCell>Locaassdfsdfsd</TableCell>
          <TableCell>asdasda</TableCell>
          <TableCell>Last Update</TableCell>
          <TableCell>Inactive since</TableCell>
          <TableCell><Chip label="Told me" color="secondary"/></TableCell>
          <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell checkbox><Checkbox /></TableCell>
          <TableCell><div>adasd<div>saddasa</div></div></TableCell>
          <TableCell>Locaassdfsdfsd</TableCell>
          <TableCell>asdasda</TableCell>
          <TableCell>Last Update</TableCell>
          <TableCell>Inactive since</TableCell>
          <TableCell><Chip label="Told me" color="secondary"/></TableCell>
          <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell checkbox><Checkbox /></TableCell>
          <TableCell><div>adasd<div>saddasa</div></div></TableCell>
          <TableCell>Locaas dad asdstion</TableCell>
          <TableCell>asdasd</TableCell>
          <TableCell>Last Update</TableCell>
          <TableCell>Inactive since</TableCell>
          <TableCell><Chip label="Told me" color="secondary"/></TableCell>
          <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
        </TableRow>
      </Table>
    </div>
  )
}

export default GridTable;
