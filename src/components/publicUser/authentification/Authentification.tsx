import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button, { ButtonProps } from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import homeBg from "/home-bg.png";
import { useNavigate } from "react-router-dom";
import { Credentials } from "../types/Auth";
import { useSignIn } from "../../../hooks/useSignIn";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  styled,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Sindway
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AuthenticationUser() {
  const navigate = useNavigate();
  const { signIn, isLoading, error, data: userAuth, isSuccess } = useSignIn();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const ColorButtonLog = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    fontSize: 12,
    backgroundColor: "#7874D6",
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "#3E3D6C",
    },
  }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo: Credentials = {
      tel: data.get("tel")?.toString(),
      password: data.get("password")?.toString(),
    };
    console.log("userInfo:", userInfo);
    signIn(userInfo);
  };

  React.useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", userAuth?.token ? userAuth.token : "");
      localStorage.setItem(
        "userId",
        userAuth?.user?.userId ? userAuth?.user?.userId : ""
      );
      navigate("/utilisateur/dashboard");
    }
  }, [isSuccess]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "auto" }}>
        <CssBaseline />
        <Grid item xs={12} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#7A3764" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Authentification
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                sx={{ borderRadius: "15px", mb: "2rem" }}
                margin="normal"
                required
                fullWidth
                id="tel"
                label="Téléphone"
                name="tel"
                autoComplete="phone"
                autoFocus
                color="secondary"
              />
              <FormControl
                variant="outlined"
                color="secondary"
                required
                fullWidth
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Mot de passe
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Mot de passe"
                />
              </FormControl>

              <Stack>
                <ColorButtonLog
                  //onClick={() => navigate("/utilisateur/dashboard")}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
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
