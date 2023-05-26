import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

import CancelIcon from "@mui/icons-material/Cancel";

function AppBarRegister() {

    const navigate = useNavigate();
  return (
    <div>
        <AppBar
          sx={{
            backgroundColor: "#1C2536",
            color: "#f1f1f1",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Typography
              sx={{
                ml: 1,
                flex: 1,
                color: "#f1f1f1",
                fontSize: "25px",
                fontFamily: "Open Sans",
                fontWeight: "600px",
              }}
              variant="h6"
              component="div"
            >
              CINDA
            </Typography>
            <IconButton onClick={() => navigate("/")} edge="start" color="inherit" aria-label="close">
              <CancelIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default AppBarRegister