import * as React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Props {
  handlePassword? : (password:string) => void
  handlePhone? : (phone: string) => void
}

function Step2(props: Props) {

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
          <InputLabel>Téléphone</InputLabel>
          <OutlinedInput id="email" label="phone" onChange={(e) => props?.handlePhone?.(e.target.value)} />
        </FormControl>
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <InputLabel>Mot de passe</InputLabel>
          <OutlinedInput
            id="passwordId"
            type={showPassword ? "text" : "password"}
            label="Mot de passe"
            onChange={(e) => props?.handlePassword?.(e.target.value)} 
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