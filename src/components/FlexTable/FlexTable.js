import React from 'react';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableSortLabel from '../TableSortLabel';
import { Reddit, Adb, Face, SportsKabaddi } from '@material-ui/icons'
import './DivTable.css'

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Somebody' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Somebody' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Somebody' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Somebody' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Ones' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Created by' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Inactive since' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Last Update' },
];

const FlexTable = () => {
  return(
    <div className='board'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell checkbox><Checkbox /></TableCell>
            <TableCell><TableSortLabel>Program Name</TableSortLabel></TableCell>
            <TableCell><TableSortLabel direction>Location</TableSortLabel></TableCell>
            <TableCell><TableSortLabel>Created by</TableSortLabel></TableCell>
            <TableCell><TableSortLabel>Last Update</TableSortLabel></TableCell>
            <TableCell><TableSortLabel>Inactive since</TableSortLabel></TableCell>
            <TableCell><TableSortLabel active>Status</TableSortLabel></TableCell>
            <TableCell><TableSortLabel>Actions</TableSortLabel></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell checkbox><Checkbox /></TableCell>
            <TableCell><div>adasd<div>saddasa</div></div></TableCell>
            <TableCell>Locaas dad asdstion</TableCell>
            <TableCell>asdas</TableCell>
            <TableCell>Last Update</TableCell>
            <TableCell>Inactive since</TableCell>
            <TableCell><Chip label="Told me" color="secondary"/></TableCell>
            <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
          </TableRow>
          <TableRow>
            {headCells.map((element, index) => {
              if (index === 0) return <TableCell checkbox><Checkbox /></TableCell>
              if (index === headCells.length -1) return <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
              return <TableCell>{element.label}</TableCell>
            })}
          </TableRow>
          <TableRow>
            <TableCell checkbox><Checkbox /></TableCell>
            <TableCell>Somebody</TableCell>
            <TableCell>Ones</TableCell>
            <TableCell>Created by</TableCell>
            <TableCell>Last Update</TableCell>
            <TableCell>Inactive since</TableCell>
            <TableCell><Chip label="Told me" color="secondary"/></TableCell>
            <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell checkbox><Checkbox /></TableCell>
            <TableCell>Somebody</TableCell>
            <TableCell>Ones</TableCell>
            <TableCell>Created by</TableCell>
            <TableCell>Last Update</TableCell>
            <TableCell>Inactive since</TableCell>
            <TableCell><Chip label="Told me" color="secondary"/></TableCell>
            <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell checkbox><Checkbox /></TableCell>
            <TableCell>The World</TableCell>
            <TableCell>is gonna</TableCell>
            <TableCell>Created by</TableCell>
            <TableCell>Last Update</TableCell>
            <TableCell>Inactive since</TableCell>
            <TableCell><Chip label="Roll me" color="secondary"/></TableCell>
            <TableCell><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default FlexTable;
