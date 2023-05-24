import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function TopAppBar() {

  const scroll= (id:string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{
        backgroundColor:"white",
        color:"#000",
        boxShadow:"none",
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1,
                color:"#777",
                marginLeft: 2,
                fontSize:"25px",
                fontFamily:"Open Sans",
                fontWeight:"600px"
           }}>
            CINDIA
          </Typography>
          <Box sx={{marginRight:1}} >
              <Button onClick={() => scroll("home")} sx={{ color:"#777",fontFamily:"monospace",fontSize:"15px",fontWeight:"900"}} color="inherit">Home</Button>
              <Button onClick={() => scroll("about")} sx={{ color:"#777",fontFamily:"monospace",fontSize:"15px",fontWeight:"900"}} color="inherit">About</Button>
              <Button onClick={() => scroll("footer")} sx={{ color:"#777",fontFamily:"monospace",fontSize:"15px",fontWeight:"900"}} color="inherit">Contact</Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
