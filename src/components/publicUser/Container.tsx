import React, { useState } from "react";
import { Box, Dialog } from "@mui/material";
import homeBg from "./home-bg.png";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Typical from "react-typical";
import Authentification from "./authentification/authentification";
import { useNavigate } from "react-router-dom";



export default function Container() {

  const [openDialogAuthenticate, setOpenDialogAuthenticate] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialogAuthenticate(true);
  };

  const handleClose = () => {
    setOpenDialogAuthenticate(false);
  };


  const navigate = useNavigate();


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

          <Box>
          <Button onClick={handleClickOpen} color="success" variant="outlined">
            Se connecter
          </Button>
          <Button onClick={() => navigate("/utilisateur/register")} color="success" variant="text">
            S'inscrire
          </Button>
          </Box>
          
          <Dialog open={openDialogAuthenticate} onClose={handleClose}>
            <Authentification/>
          </Dialog>
          

        </Box>
      </Box>
    </div>
  );
}
