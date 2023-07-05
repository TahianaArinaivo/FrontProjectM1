import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { token } from "../../theme";
import { Dialog, styled, useTheme } from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Typical from "react-typical";
import Authentification from "./authentification/Authentification";
import { useNavigate } from "react-router-dom";
import { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { cyan, green, lightGreen, purple, teal } from "@mui/material/colors";

export default function TopAppBar() {
  const scroll = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [openDialogAuthenticate, setOpenDialogAuthenticate] =
  React.useState(false);

const handleClickOpen = () => {
  setOpenDialogAuthenticate(true);
};

const handleClose = () => {
  setOpenDialogAuthenticate(false);
};

const navigate = useNavigate();

  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const ColorButtonLogin = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    fontSize:12,
    backgroundColor: "transparent",
    borderRadius:15,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.407)",
      transitionDuration: ".1s",
    },
  }));


  const ColorButtonRegister = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    fontSize:12,
    backgroundColor: "#7874D6",
    borderRadius:15,
    "&:hover": {
      backgroundColor: "#3E3D6C",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position:"fixed",
          background: "rgba(0, 0, 0, 0.127)",
          color: "#000",
          boxShadow: "0px 3px 6px rgba(0,0,0,.031372549)",
          padding:"1rem",
        }}
      >
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1, marginLeft: 4 }}>
            <Typography variant="h4" color={"#71DCEC"} sx={{fontFamily:"'Roboto Mono', monospace"}}>
              CINDIA
            </Typography>
          </Box>
          <Box sx={{ marginRight: 6 }}>
            <Button
              onClick={() => scroll("home")}
              sx={{
                color: "#FDFEFE",
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "15px",
                fontWeight: "500",
              }}
              color="inherit"
            >
              Maison
            </Button>
            <Button
              onClick={() => scroll("about")}
              sx={{
                color: "#FDFEFE",
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "15px",
                fontWeight: "500",
              }}
              color="inherit"
            >
              A propos
            </Button>
            <Button
              onClick={() => scroll("footer")}
              sx={{
                color: "#FDFEFE",
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "15px",
                fontWeight: "500",
              }}
              color="inherit"
            >
              Contact
            </Button>
          </Box>

          <Stack spacing={0} direction="row">
            <ColorButtonLogin onClick={handleClickOpen} variant="contained">
              Se connecter
            </ColorButtonLogin>

            <ColorButtonRegister onClick={() => navigate("/utilisateur/register")} variant="contained">
              S'inscrire
            </ColorButtonRegister>
          </Stack>
        </Toolbar>
      </AppBar>
      <Dialog sx={{backgrondColor:"rgba(0, 0, 0, 0.431"}} open={openDialogAuthenticate} onClose={handleClose}>
            <Authentification />
      </Dialog>
    </Box>
  );
}
