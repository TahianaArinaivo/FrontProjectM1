import React from "react";
import { Box, Link, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { Divider } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

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
            fontFamily: "cursive",
            fontSize: "40px",
            marginTop: "1rem",
            marginBottom: "2rem",
            fontWeight: "900",
          }}
        >
          Contact
        </Box>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            "& > :not(style)": { m: 1, width: "300px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            color="success"
            label="Name"
            variant="outlined"
            focused
          />
          <TextField
            id="standard-basic"
            color="success"
            label="Email"
            variant="outlined"
            focused
          />
          <TextField
            id="standard-basic"
            color="success"
            label="Message"
            variant="outlined"
            focused
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "50%",
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          voluptates aut maxime tenetur adipisci pariatur cum vero quibusdam,
          aperiam praesentium assumenda atque illum! Libero reprehenderit
          corporis nulla, cumque eligendi vitae.
        </Box>
        <Box
          sx={{
            marginBottom: "3rem",
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

        <Copyright/>
      </Box>
    </div>
  );
}
