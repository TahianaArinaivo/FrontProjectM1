import {
  Box,
  Button,
  IconButton,
  Modal,
  Radio,
  Typography,
} from "@mui/material";
import React from "react";
import VoteResult from "../../adminUser/vote/VoteResult";
import PollIcon from "@mui/icons-material/Poll";

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

function Vote() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Candidats = [
    {
      profile: "/user.png",
      name: "ARINAIVO Tahiana Soavina",
      organisationName: "Partie politique 1",
    },
    {
      profile: "/user.png",
      name: "RAMAROLAHY Andrinandrasana Tsiory",
      organisationName: "Partie politique 2",
    },
    {
      profile: "/user.png",
      name: "RAVOARY Antsa Fitiavana",
      organisationName: "Partie politique 3",
    },
    {
      profile: "/user.png",
      name: "RAMANADRAIBE Aloy Patrick",
      organisationName: "Partie politique 4",
    },
    {
      profile: "/user.png",
      name: "ANDRIAMILAMINA Tendriarivelo",
      organisationName: "Partie politique 5",
    },
    {
      profile: "/user.png",
      name: "RAKOTOARIVONY Sitraka Herisoa",
      organisationName: "Partie politique 6",
    },
    {
      profile: "/user.png",
      name: "MENABENDRAMORA Evrard Kevin SAI",
      organisationName: "Partie politique 7",
    },
  ];

  return (
    <div>
      <Box
        sx={{
          marginTop: "3rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "45%" }}>
          <Typography sx={{ my: 1 }} variant="h4">
            Assistant de vote
          </Typography>
          <Typography sx={{ my: 1 }} variant="h5">
            Type de vote:{" "}
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Président de la république
            </Typography>
          </Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit a
          adipisci eius earum id et assumenda amet eaque, atque, culpa sint
          illum! Magni rerum, tempora voluptatibus earum mollitia voluptate
          iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam aliquam nisi doloribus? Aliquid neque architecto voluptate
          veniam dicta, qui commodi, suscipit exercitationem odit, delectus
          dolorum consectetur ea laborum vel accusamus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ut dolorem rerum voluptatem ex
          labore, minus beatae, totam in ratione, error ipsum magni. Illo
          voluptatem provident repellendus praesentium accusantium quasi
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam nostrum ullam dolor provident accusantium sit fugiat omnis,
          voluptatibus voluptatem vitae suscipit tenetur accusamus recusandae
          dicta optio, enim numquam dolorum ipsa?
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
              Choisissez un candidat
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
                    width={"80"}
                    height={"80px"}
                    src={candidat.profile}
                  />
                  <Box sx={{ width: "60%" }}>
                    <Typography>{candidat.name}</Typography>
                    <Typography>{candidat.organisationName}</Typography>
                  </Box>
                  <Box>
                    <Radio
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Button
            sx={{ alignSelf: "center", marginBottom: "0", marginTop: "20px" }}
            type="submit"
            variant="contained"
          >
            Valider
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Vote;
