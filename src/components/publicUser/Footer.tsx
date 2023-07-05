import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Divider } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Input from "@mui/joy/Input";
import SendIcon from '@mui/icons-material/Send';
function Copyright() {
  return (
    <Typography variant="body2" color="#f1f1f1" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Sindwai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div id="footer">
      <Box
        sx={{
          backgroundColor: "#1C2536",
          color: "#f1f1f1",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "40px",
            marginTop: "1rem",
            marginBottom: "2rem",
            fontWeight: "900",
          }}
        >
          Contact
        </Box>

        <Grid container>
          <Grid item md={6} xs={12}>
            <Box
              component="form"
              sx={{
                mt:7,
                mb:5,
                ml:20,
                mr:3

              }}
              noValidate
              autoComplete="off"
            >
              <Input
                color="info"
                placeholder="Envoyer"
                size="lg"
                variant="outlined"
                endDecorator={<SendIcon/>}
              />
            </Box>
            <Copyright />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "60%",
                textAlign: "left",
                marginTop: "3rem",
                marginBottom: "1rem",
                ml:7,
                mr:5
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              voluptates aut maxime tenetur adipisci pariatur cum vero
              quibusdam, aperiam praesentium assumenda atque illum! Libero
              reprehenderit corporis nulla, cumque eligendi vitae.
            </Box>
            <Box
              sx={{
                ml:"25%"
              }}
            >
              <IconButton sx={{ color: "#f1f1f1" }}>
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton sx={{ color: "#f1f1f1" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "#f1f1f1" }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton sx={{ color: "#f1f1f1" }}>
                <AlternateEmailIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
