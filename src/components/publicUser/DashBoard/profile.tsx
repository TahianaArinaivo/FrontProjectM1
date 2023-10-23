import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Avatar,
  CardActions,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      mt="3rem"
      sx={{ color: "#9DA4AE" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function ProfilePublicUser() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          mt: "10rem",
          fontFamily: "'Work Sans', sans-serif",
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    src="/user.png"
                    sx={{
                      height: 64,
                      mb: 2,
                      width: 64,
                    }}
                  />
                  <Typography color="textPrimary" gutterBottom variant="h5">
                    Tendriarivelo
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Andohanimandroseza
                  </Typography>
                </Box>
                <CardActions>
                  <Button
                    color="primary"
                    fullWidth
                    variant="text"
                    sx={{ fontSize: "10px" }}
                  >
                    Ajouter une photo de Profil
                  </Button>
                </CardActions>
              </CardContent>
              <Divider />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "350px",
                    height: "200px",
                  }}
                  src="/cin.jpg"
                  alt="picCin"
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} xs={12}>
            <form autoComplete="off" noValidate>
              <Card sx={{ ml: "1rem" }}>
                <CardHeader
                  subheader="Les Informations ne peut pas être modifier"
                  title="Profile"
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="Please specify the first name"
                        label="Nom"
                        name="Nom"
                        value="ANDRIAMILAMINA"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Prénom"
                        name="Prenom"
                        value="Tendriarivelo"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="Email"
                        value="tandriamilamina@gmail.com"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Numéro téléphone"
                        name="Numéro téléphone"
                        type="number"
                        value="0346655577"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Lot"
                        name="Lot"
                        value="Andohanimandroseza"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Profession"
                        name="Profession"
                        value="Etudiant"
                        variant="outlined"
                      ></TextField>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <Copyright />
                </Box>
              </Card>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProfilePublicUser;
