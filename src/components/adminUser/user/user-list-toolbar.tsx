import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "../../../icons/search";
import { useRecoilState } from "recoil";
import dialogAtom from "../../../atom/dialogAtom";

export const UserListToolbar = (props: any) => {
  const [showDialog, setShowDialog] = useRecoilState(dialogAtom);

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1,fontFamily: "'Work Sans', sans-serif" }} variant="h4">
          Utilisateurs
        </Typography>
        <Box sx={{ m: 1,fontFamily: "'Work Sans', sans-serif" }}>
          <Button color="primary" variant="contained" onClick={() => setShowDialog(true)}>
            Nouvelle utilisateur
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card sx={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px" }}>
          <CardContent>
            <Box sx={{ maxWidth: 400 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Recherche utilisateur"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
