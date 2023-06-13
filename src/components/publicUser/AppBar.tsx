import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { token } from '../../theme';
import { useTheme } from '@mui/material';

export default function TopAppBar() {

  const scroll= (id:string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{
        backgroundColor:"white",
        color:"#000",
        boxShadow:"none",
      }}>
        <Toolbar>
          <Box component="div" 
          sx={{ flexGrow: 1,
                marginLeft: 2,
           }}>
                            <Typography variant="h4" color={"#07A814"}>
                CINDIA
                </Typography>
          </Box>
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
