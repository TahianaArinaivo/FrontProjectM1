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
      <Link color="inherit" href="https://mui.com/">
        Sindwai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function ProfileAdminUser() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          mt: "6rem",
          fontFamily: "'Work Sans', sans-serif",
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={4} xs={12}>
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
                    NIRINTSOA
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Ambatoroka, Madagascar
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
            </Card>
          </Grid>

          <Grid item md={8} xs={12}>
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
                        label="First name"
                        name="firstName"
                        required
                        value="RAPA"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Last name"
                        name="lastName"
                        required
                        value="Patrick"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        required
                        value="rapa@gmail.com"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="number"
                        value="0346655577"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        required
                        value="Ambatoroka"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Select State"
                        name="state"
                        required
                        value="Gadralava"
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

export default ProfileAdminUser;
