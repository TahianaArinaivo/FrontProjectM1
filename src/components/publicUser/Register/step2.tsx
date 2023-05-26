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

function Step2() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignContent:"center",
          flexDirection: "column",
          m: "3rem",
        }}
      >
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
      </Box>
    </div>
  )
}

export default Step2