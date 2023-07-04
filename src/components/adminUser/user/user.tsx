import React from 'react';
import Box from '@mui/material/Box';
import { UserListToolbar } from './user-list-toolbar';
import UserListResults from './user-list-results';
import { Grid } from '@mui/material';

export default function User() {
  return (
    <>
        <Box sx={{ p:3}}>
              <UserListToolbar/>
              <UserListResults/>
        </Box>
</>
  )
}
