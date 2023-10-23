import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PollIcon from "@mui/icons-material/Poll";
import VoteResult from "./VoteResult";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function VoteAdmin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Candidats = [
    {
      profile: "/user.png",
      name: "ARINAIVO Tahiana Soavina",
      organisationName: "Archivec",
    },
    {
      profile: "/user.png",
      name: "RAMAROLAHY Andrinandrasana Tsiory",
      organisationName: "Archivec",
    },
    {
      profile: "/user.png",
      name: "RAVOARY Antsa Fitiavana",
      organisationName: "Archivec",
    },
    {
      profile: "/user.png",
      name: "RAMANADRAIBE Aloy Patrick",
      organisationName: "Archivec",
    },
    {
      profile: "/user.png",
      name: "ANDRIAMILAMINA Tendriarivelo",
      organisationName: "Archivec",
    },
    {
      profile: "/user.png",
      name: "RAKOTOARIVONY Sitraka Herisoa",
      organisationName: "Archivec",
    },
    {
      profile: "/user.png",
      name: "MENABENDRAMORA Evrard Kevin SAI",
      organisationName: "Archivec",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          marginTop: "3rem",
          mx: "3rem",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ my: 1 }} variant="h4">
            Assistant de vote
          </Typography>
          <FormControl sx={{ height: "auto" }} variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type d'élection:
            </InputLabel>
            <Select label="type">
              <MenuItem value={10}>Président de la république</MenuItem>
              <MenuItem value={20}>Maire</MenuItem>
              <MenuItem value={30}>Député</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              width: "100%",
              height: "500px",
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <form>
              <Typography variant="h4" gutterBottom>
                Enregistrer un candidat :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <FormControl sx={{ my: "5px" }}>
                  <TextField
                    label="Nom et Prénom candidat"
                    type="text"
                    required
                  />
                </FormControl>
                <FormControl sx={{ my: "5px" }}>
                  <TextField label="Partie politique" type="text" required />
                </FormControl>
              </Box>
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam neque soluta repellendus aut nisi assumenda, excepturi
                quis beatae dolorem similique sed, impedit, amet maiores!
                Repellat, pariatur unde. Dolor, vel deleniti.
              </Typography>
              <Button
                sx={{ my: "20px", marginLeft: "70%" }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Enregistrer
              </Button>
            </form>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "85vh",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "10px",
            paddingX: "2rem",
            paddingY: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton onClick={handleOpen} size="large" color="primary">
              <PollIcon fontSize="inherit" />
            </IconButton>

            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <VoteResult />
              </Box>
            </Modal>

            <Typography
              variant="h5"
              sx={{ width: "100%", textAlign: "center", marginBottom: "10px" }}
            >
              Liste des candidats
            </Typography>
          </Box>

          <Box sx={{ overflow: "auto" }}>
            {Candidats.map((candidat, i) => (
              <Box
                key={i}
                sx={{ width: "100%", marginTop: "50px", paddingRight: "30px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                    alt="user profile"
                    width={"50"}
                    height={"50px"}
                    src={candidat.profile}
                  />
                  <Box sx={{ width: "80%" }}>
                    <Typography>{candidat.name}</Typography>
                    <Typography>{candidat.organisationName}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Typography
            variant="h6"
            sx={{ alignSelf: "center", marginBottom: "0", marginTop: "20px" }}
          >
            {Candidats.length}
            {" Candidat(s)"}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
