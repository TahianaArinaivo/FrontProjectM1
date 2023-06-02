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
    <Typography variant="body2" color="text.secondary" align="center" mt="6rem" sx={{color:'#9DA4AE'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sindwai
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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
          width: "150vh",
          mt: "5rem",
        }}
      >
        <React.Fragment>
          <Card sx={{width:"150vh"}}>
            <CardContent >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Avatar
                  src="https://avatars.githubusercontent.com/u/62210936?s=400&u=1d1d6b35732fefd1f1731c399d094aa130485089&v=4"
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
              <Button color="primary" fullWidth variant="text" sx={{fontSize:"10px"}}>
                Ajouter une photo de Profil
              </Button>
            </CardActions>
            </CardContent>
            <Divider />
            <CardContent>
            <img style={{ width:"350px", height:"200px" }} src="/cin.jpg" alt="picCin" />  
            </CardContent>  
         
          </Card>
        </React.Fragment>

        <form autoComplete="off" noValidate>
          <Card sx={{ml:"1rem"}}>
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
              <Copyright/>
            </Box>
          </Card>
        </form>
      </Box>
    </div>
  );
}

export default ProfilePublicUser;
