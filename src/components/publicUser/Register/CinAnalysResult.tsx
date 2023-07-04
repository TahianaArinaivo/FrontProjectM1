import { Box, Typography } from '@mui/material';
import React from 'react'
import { User } from '../types/User';

export type CIN = {
    lastName? : string;
    name?: string;
    birth?: string;
    birthplace?: string;
    numCIN?: string;
    address?: string;
    district?: string;
    job?: string;
    fatherName?: string
    motherName?: string;
    doneAt?: string;
    on?: string;
}

interface Props {
    data?: User
}

export const CinAnalysResult = ({data}: Props) => {
  return (
    <Box>
        <Typography>Nom: {data?.name}</Typography>
        <Typography>Prénom(s): {data?.lastName}</Typography>
        <Typography>Date de naissance: {data?.birth}</Typography>
        <Typography>Lieu de naissance: {data?.birthplace}</Typography>
        <Typography>Numéro CIN: {data?.numCIN}</Typography>
        <Typography>Adresse: {data?.address}</Typography>
        <Typography>District: {data?.district}</Typography>
        <Typography>Profession: {data?.job}</Typography>
        <Typography>Nom du père: {data?.fatherName}</Typography>
        <Typography>Nom de la mère: {data?.motherName}</Typography>
        <Typography>Fait à : {data?.doneAt}</Typography>
        <Typography>Fait le: {data?.on}</Typography>
    </Box>
  )
}
