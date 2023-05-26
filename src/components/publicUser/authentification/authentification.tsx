import * as React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Authentification() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };


  const navigate = useNavigate();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flexDirection: "column",
          m: "3rem",
        }}
      >
        <Typography
          sx={{
            color: "#07A814",
            fontFamily: "sans-serif",
            fontSize: "30px",
            textAlign:"center",
            fontWeight: 900,
          }}
        >
          CINDIA
        </Typography>
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel>Email</InputLabel>
          <OutlinedInput id="email" label="email" />
        </FormControl>
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            id="passwordId"
            type={showPassword ? "text" : "password"}
            label="password"
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
          />
        </FormControl>
        <Button onClick={() => navigate("/utilisateur/dashboard")} sx={{width:"200px",marginTop:"1rem", alignSelf:"center"}} variant="outlined"> Se connecter</Button>
      </Box>
    </div>
  );
}
