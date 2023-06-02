import React from 'react';
import Box from '@mui/material/Box';
import { TrafficBySex } from './trafficBySex';

export default function Stats() {
  return (
    <>
    <Box sx={{display: "flex"}}>
        <Box component="main" sx={{flexGrow: 1, p:3}}>
            <TrafficBySex/>
        </Box>
    </Box>
</>
  )
}
