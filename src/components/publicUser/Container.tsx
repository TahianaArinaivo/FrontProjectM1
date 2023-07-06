import React, { useState } from "react";
import { Box, Dialog } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Typical from "react-typical";
import Authentification from "./authentification/Authentification";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { cyan, green, lightGreen, purple, teal } from "@mui/material/colors";

export default function Container() {
  const [openDialogAuthenticate, setOpenDialogAuthenticate] =
    React.useState(false);

  const handleClickOpen = () => {
    setOpenDialogAuthenticate(true);
  };

  const handleClose = () => {
    setOpenDialogAuthenticate(false);
  };

  const navigate = useNavigate();

  const ColorButtonMore = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: "rgba(0, 0, 0, 0.127)",
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.407)",
      transitionDuration: ".1s",
    },
  }));

  const ColorButtonRegister = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  }));

  return (
    <div id="home">
      <Box
        sx={{
          pt: "3rem",
          backgroundImage: `url(/bannièreGp.png)`,
          backgroundSize: "cover",
          maxWidth: "100%",
          height: "700px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            pt: "10rem",
            pl: "5rem",
            justifyContent: "left",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "30px",
                fontWeight: 500,
              }}
            >
              Bienvenu sur
            </Typography>
            <Typography
              sx={{
                color: "#71DCEC",
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "60px",
                fontWeight: 700,
              }}
            >
              CINDIA
            </Typography>
          </Box>

          <Box
            sx={{
              marginBottom: "3rem",
              alignContent: "left",
              width: "500px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
              }}
            >
              l’application “CINDIA” apporte aux publiques et aux adminstrateurs à la
              fois avantages et efficacités afin de pouvoir satisfaire leurs
              besoins. Du côté pratique, cette application est un outil qui
              propose un recours au système administratif traditionnel. Le
              système étant entièrement automatisé, l’utilisateur n’aura qu’à
              numériser sa carte d’identité nationale afin de pouvoir profiter
              de tous les services proposés par l’application. 
            </Typography>
          </Box>

          <Stack spacing={2} direction="row">
            <ColorButtonMore onClick={handleClickOpen} variant="contained">
              Voir plus
            </ColorButtonMore>
          </Stack>
        </Box>

        <Box
          sx={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.283)",
            marginTop: "5rem",
          }}
        >
          <img
            style={{ width: "600px", height: "auto" }}
            src="/IAbanner.png"
            alt=""
          />
        </Box>
      </Box>
    </div>
  );
}
