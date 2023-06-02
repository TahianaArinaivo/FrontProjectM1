import React, { useState } from "react";
import { Box, Dialog } from "@mui/material";
import homeBg from "/home-bg.png";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Typical from "react-typical";
import Authentification from "./authentification/authentification";
import { useNavigate } from "react-router-dom";

import { styled } from '@mui/material/styles';
import  { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { cyan, green, lightGreen, purple, teal } from '@mui/material/colors';



export default function Container() {

  const [openDialogAuthenticate, setOpenDialogAuthenticate] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialogAuthenticate(true);
  };

  const handleClose = () => {
    setOpenDialogAuthenticate(false);
  };


  const navigate = useNavigate();


  const ColorButtonLogin = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));

  const ColorButtonRegister = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));


  return (
    <div id="home">
      <Box
        sx={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "cover",
          maxWidth: "100%",
          height: "700px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "30px",
                fontWeight: 400,
              }}
            >
              Bienvenu sur
            </Typography>
            <Typography
              sx={{
                color: "#07A814",
                fontFamily: "sans-serif",
                fontSize: "60px",
                fontWeight: 900,
              }}
            >
              CINDIA
            </Typography>
          </Box>

          <Box
            sx={{
              color: "#1C2536",
              fontFamily: "inherit",
              fontWeight: 800,
              fontSize: "20px",
              marginBottom: "3rem",
              alignContent:"left"
            }}
          >
            <Typical
              steps={[
                "Cindia",
                5000,
                "Lorem ipsum dolor sit,",
                1000,
                "amet consectetur adipisicing elit.",
                1000,
                "Saepe adipis",
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </Box>


          <Stack spacing={2} direction="row">
            <ColorButtonLogin onClick={handleClickOpen} variant="contained">Se connecter</ColorButtonLogin>
            <ColorButtonRegister onClick={() => navigate("/utilisateur/register")}  variant="contained">S'inscrire</ColorButtonRegister>
            </Stack>
          
          <Dialog open={openDialogAuthenticate} onClose={handleClose}>
            <Authentification/>
          </Dialog>
          

        </Box>
      </Box>
    </div>
  );
}
