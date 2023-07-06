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
  fatherName?: string;
  motherName?: string;
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
        <Typography sx={{ textDecoration: "underline", marginRight: "10px"}}>Nom:</Typography>
        <Typography sx={{ textDecoration: "none" }}>{data?.name}</Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: "cursive",
          textDecoration: "underline",
        }}
      >
        Prénom(s):
        <Typography sx={{ textDecoration: "none" }}>
          {data?.lastName}
        </Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Date de naissance:
        <Typography sx={{ textDecoration: "none" }}>{data?.birth}</Typography>
      </Typography>
      <Typography
        sx={{
          fontFamily: "cursive",
          textDecoration: "underline",
        }}
      >
        Lieu de naissance:
        <Typography sx={{ textDecoration: "none" }}>
          {data?.birthplace}
        </Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Numéro CIN:
        <Typography sx={{ textDecoration: "none" }}>{data?.numCIN}</Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Adresse:
        <Typography sx={{ textDecoration: "none" }}>{data?.address}</Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        District:
        <Typography sx={{ textDecoration: "none" }}>
          {data?.district}
        </Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Profession:
        <Typography sx={{ textDecoration: "none" }}>{data?.job}</Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Nom du père:
        <Typography sx={{ textDecoration: "none" }}>
          {data?.fatherName}
        </Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Nom de la mère:
        <Typography sx={{ textDecoration: "none" }}>
          {data?.motherName}
        </Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Fait à :
        <Typography sx={{ textDecoration: "none" }}>{data?.doneAt}</Typography>
      </Typography>
      <Typography sx={{ fontFamily: "cursive", textDecoration: "underline" }}>
        Fait le:
        <Typography sx={{ textDecoration: "none" }}>{data?.on}</Typography>
      </Typography>
    </Box>
  );
};
