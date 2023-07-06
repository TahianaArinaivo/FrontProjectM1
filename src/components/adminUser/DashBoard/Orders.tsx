import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { User } from '../../publicUser/types/User';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: string,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    '⠀•••• 3719',
    "F",
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    '⠀•••• 2574',
    "H",
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', '⠀•••• 1253', "F"),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    '⠀•••• 2000',
    "H",
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    '⠀•••• 5919',
    "F",
  ),
];

interface Props {
  users?: User[]
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders({users}: Props) {
  return (
    <React.Fragment>
      <Title>Recemment enregistrés</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Noms</TableCell>
            <TableCell>Prénoms</TableCell>
            <TableCell>N°CIN</TableCell>
            <TableCell align="right">Sex</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user,i) => (
            <TableRow key={i}>
              <TableCell>{user.createdAt}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.numCIN}</TableCell>
              <TableCell align="right">{`${user.sex}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}