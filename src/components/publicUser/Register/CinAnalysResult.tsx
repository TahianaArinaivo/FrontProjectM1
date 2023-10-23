import { Box, Typography } from "@mui/material";
import React from "react";
import { User } from "../types/User";

export type CIN = {
  lastName?: string;
  name?: string;
  birth?: string;
  birthplace?: string;
  numCIN?: string;
  address?: string;
  district?: string;
  job?: string;
  fathersName?: string;
  mothersName?: string;
  doneAt?: string;
  on?: string;
};

interface Props {
  data?: User;
}

export const CinAnalysResult = ({ data }: Props) => {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Nom :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.name}</Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Prénom(s) :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>
          {data?.lastName}
        </Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Né le :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.birth}</Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Né à :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>
          {data?.birthplace}
        </Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Numéro CIN :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.numCIN}</Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Adresse :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.address}</Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          District :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>
          {data?.district}
        </Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Profession :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.job}</Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Nom du père :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>
          {data?.fatherName}
        </Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Nom de la mère:
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>
          {data?.motherName}
        </Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Fait à :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.doneAt}</Typography>
      </Box>
      <Box sx={{ fontFamily: "cursive", display: "flex" }}>
        <Typography sx={{ textDecoration: "underline", marginRight: "10px" }}>
          Fait le :
        </Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.on}</Typography>
      </Box>
    </Box>
  );
};
