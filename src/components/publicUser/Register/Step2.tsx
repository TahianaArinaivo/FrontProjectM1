import * as React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Input from "@mui/joy/Input";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Props {
  handlePassword?: (password: string) => void;
  handlePhone?: (phone: string) => void;
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
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          flexDirection: "column",
          mt: "10rem",
          height: "500px",
          marginTop: "100px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "dotted 2px white",
            borderRadius: 2,
            padding: 7,
          }}
        >
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <Input
            id="email"
            onChange={(e) => props?.handlePhone?.(e.target.value)}
            type="tel"            
            size="lg"
            placeholder="Téléphone"
            variant="outlined" 
            color="info"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
          <Input
            id="passwordId"
            type={showPassword ? "text" : "password"}
            size="lg"
            placeholder="Mot de passe"
            variant="outlined" 
            color="info"
            onChange={(e) => props?.handlePassword?.(e.target.value)}
            endDecorator={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff sx={{color:"#f1f1f1"}} /> : <Visibility sx={{color:"#f1f1f1"}} />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </Box>
      </Box>
    </>
  );
}

export default Step2;
