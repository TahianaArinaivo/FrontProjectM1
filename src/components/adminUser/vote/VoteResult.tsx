import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function VoteResult() {
  const Candidats = [
    {
      profile: "/user.png",
      name: "ARINAIVO Tahiana Soavina",
      organisationName: "Archivec",
      voteNumber: 300000,
      porcentage: "40%",
    },
    {
      profile: "/user.png",
      name: "RAMAROLAHY Andrinandrasana Tsiory",
      organisationName: "Archivec",
      voteNumber: 300000,
      porcentage: "40%",
    },
    {
      profile: "/user.png",
      name: "RAVOARY Antsa Fitiavana",
      organisationName: "Archivec",
      voteNumber: 300000,
      porcentage: "40%",
    },
    {
      profile: "/user.png",
      name: "RAMANADRAIBE Aloy Patrick",
      organisationName: "Archivec",
      voteNumber: 300000,
      porcentage: "40%",
    },
    {
      profile: "/user.png",
      name: "ANDRIAMILAMINA Tendriarivelo",
      organisationName: "Archivec",
      voteNumber: 300000,
      porcentage: "40%",
    },
    {
      profile: "/user.png",
      name: "RAKOTOARIVONY Sitraka Herisoa",
      organisationName: "Archivec",
      voteNumber: 300000,
      porcentage: "40%",
    },
    {
      profile: "/user.png",
      name: "MENABENDRAMORA Evrard Kevin SAI",
      organisationName: "Archivec",
      voteNumber: 300000,
      porcentage: "40%",
    },
  ];
  return (
    <div>
      <Box>
        <Typography variant="h5" textAlign={"center"} marginY={"10px"}>
          Resultat de vote
        </Typography>
        <Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Profile</TableCell>
                <TableCell>Nom et prénom</TableCell>
                <TableCell>Partie politique</TableCell>
                <TableCell>Nombre de vote</TableCell>
                <TableCell>Pourcentage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Candidats.map((candidat, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                      alt="user profile"
                      width={"30px"}
                      height={"30px"}
                      src={candidat.profile}
                    />
                  </TableCell>
                  <TableCell>{candidat.name}</TableCell>
                  <TableCell>{candidat.organisationName}</TableCell>
                  <TableCell>{candidat.voteNumber}</TableCell>
                  <TableCell>{candidat.porcentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </div>
  );
}

export default VoteResult;
