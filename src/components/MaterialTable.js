import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { Reddit, Adb, Face, SportsKabaddi } from '@material-ui/icons'
// import TableSortLabel from '@material-ui/core/TableSortLabel'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '80vw',
    height: '50vh',
    margin: '10vh 5vw',
  },
}));

function MaterialTable () {
  const classes = useStyles();
  return(
    <div>
      <Paper className={ classes.root }>
        <Table>
          <TableHead>
            <TableRow hover>
              <TableCell align='center' padding='none'>Program Name</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center' padding='none'>Program Name</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center' padding='none'>Program Name</TableCell>
              <TableCell align='center'>zellassdadsasadasds</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center' padding='none'>Program Name</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center' padding='none'>Program Name</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'>zell</TableCell>
              <TableCell align='center'><Reddit /><Adb /><Face /><SportsKabaddi /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default MaterialTable;
