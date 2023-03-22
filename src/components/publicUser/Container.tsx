import React from "react";
import { Box } from "@mui/material";
import homeBg from "./home-bg.png";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Grid from "@mui/material/Unstable_Grid2";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Typical from "react-typical";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Container() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

          <Button onClick={handleClickOpen} color="success" variant="outlined">
            Nouveau CIN
          </Button>

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar
              sx={{
                position: "relative",
                backgroundColor: "#f1f1f1",
                color: "#000",
                mb: "1rem",
                boxShadow: "none",
              }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CancelIcon />
                </IconButton>
                <Typography
                  sx={{
                    ml: 2,
                    flex: 1,
                    color: "#777",
                    marginLeft: 4,
                    fontSize: "25px",
                    fontFamily: "Open Sans",
                    fontWeight: "600px",
                  }}
                  variant="h6"
                  component="div"
                >
                  CINDA
                </Typography>
                <Button
                  autoFocus
                  variant="contained"
                  color="success"
                  onClick={handleClose}
                >
                  Enregistrer
                </Button>
              </Toolbar>
            </AppBar>
            <Box sx={{ width: "98%" }}>
              <Grid
                container
                rowSpacing={0}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
                    Lorem ipsum, dolor sit amet consectetur
                  </Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  aliquid sed inventore neque a quibusdam rem debitis nam maxime
                  natus velit saepe aspernatur est molestiae, error vero
                  suscipit qui esse?
                  <Box
                    sx={{
                      width: "98%",
                      height: "350px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: "2rem",
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    }}
                  >
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>

                    <img src="" alt="sary eto" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: "1rem",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        height: "50px",
                      }}
                    >
                      Analyser
                    </Button>
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontFamily: "cursive" }}
                  >
                    Résustat de lanalyse
                  </Typography>
                  <Box
                    sx={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
                      marginTop: 1,
                      height: "100%",
                      borderRadius: "5%",
                    }}
                  ></Box>
                </Grid>
              </Grid>
            </Box>
          </Dialog>
        </Box>
      </Box>
    </div>
  );
}
