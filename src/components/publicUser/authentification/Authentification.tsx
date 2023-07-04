import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import homeBg from "/home-bg.png";
import { useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';
import { Stack } from '@mui/material';
import Input from "@mui/joy/Input";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sindway
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function AuthenticationUser() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const ColorButtonLog = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    fontSize:12,
    backgroundColor: "#7874D6",
    borderRadius:15,
    "&:hover": {
      backgroundColor: "#3E3D6C",
    },
  }));

  

const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: 'auto', }}>
        <CssBaseline />

        <Grid item xs={12}  component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgrondColor:"rgba(0, 0, 0, 0.431"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#7A3764' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Authentification
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, color:"#7874D6" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Télephone"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
              />

              <Stack>
              <ColorButtonLog
              onClick={() => navigate("/utilisateur/dashboard")}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,  }}
              >
                Se connecter
              </ColorButtonLog>
              </Stack>
              <Grid container>
                <Grid item xs>
                  <Link color={"#7874D6"} href="#" variant="body2">
                    Mot de passe oublier
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}