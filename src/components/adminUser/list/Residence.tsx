import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

function Residence() {
  return (
    <Box sx={{p:"1rem"}}>
        <Box sx={{textAlign:"center",mb:1}}>
            <Typography sx={{fontSize:"10px"}}>
                REPOBLIKAN'I MADAGASIKARA
            </Typography>
            <Typography sx={{fontSize:"10px"}}>
                Fitiavana - Tanindrazana - Fandrosoana
            </Typography>
            <Divider sx={{width:"100px",margin:" 0 auto"}}></Divider>
        </Box>

        <Box sx={{mb:2}}>
            <Grid container spacing={8}>
                <Grid item md={6} sx={{textAlign:"center"}}>
                    <Typography sx={{fontSize:"10px"}}>
                        MINISITERAN'NY ATITANY SY NY FITSINJARAM-PAHEFANA
                    </Typography>
                    <Divider sx={{width:"100px",margin:" 0 auto"}}></Divider>
                    <Typography sx={{fontSize:"10px"}}>
                        PREFECTORAN'NY POLISIN'ANTANANARIVO
                    </Typography>
                    <Divider sx={{width:"100px",margin:" 0 auto"}}></Divider>
                    <Typography sx={{fontSize:"10px",fontWeight:600}}>
                        DISTRIKAN'ANTANANARIVO II
                    </Typography>
                    <Divider sx={{width:"100px",margin:" 0 auto"}}></Divider>
                </Grid>
                <Grid item md={6} sx={{textAlign:"center"}}>
                    <Box sx={{ml:"5rem",border: "thick double #000"}}>
                        <Typography sx={{fontWeight:600}}>
                            FANAMARINAM-PONENANA
                        </Typography>
                        <Typography sx={{fontStyle:"italic", fontWeight:500}}>
                            CERTIFICAT DE RESIDENCE
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{pl:2}}>
            <Grid container spacing={4}>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"12px"}}>
                        FOKONTANY: ........................
                    </Typography>
                    <Typography sx={{fontSize:"12px"}}>
                        LE: ...................
                    </Typography>
                </Grid>
                <Grid item md={6} sx={{textAlign:"center"}}>
                    <Typography sx={{fontSize:"14px"}}>
                        NY SEFO FOKOTANY DIA MANAMARINA FA:
                    </Typography>
                    <Typography sx={{fontSize:"14px", fontStyle:"italic"}}>
                        LE CHEF FOKONTANY CERTIFIE QUE:
                    </Typography>
                </Grid>
            </Grid>
        </Box>


        <Box sx={{pl:2}}>
            <Grid container>
                <Grid item md={8}>
                    <Typography sx={{fontSize:"12px"}}>
                       A/toa: ........................
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography sx={{fontSize:"12px"}}>
                        Asa: ..........................
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{pl:2}}>
            <Grid container>
                <Grid item md={4}>
                    <Typography sx={{fontSize:"12px"}}>
                        Teraka tamin'ny: ....................
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography sx={{fontSize:"12px"}}>
                        Tao: .....................
                    </Typography>
                </Grid>
                <Grid item md={4}>
                    <Typography sx={{fontSize:"12px"}}>
                        Zom-pirenena: .......................
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{pl:2}}>
            <Grid container>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"12px"}}>
                        Zanak'i: .......................
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"12px"}}>
                        sy: ..........................
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{pl:2}}>
            <Typography sx={{fontSize:"12px"}}>
                Dia monina ao amin'ny: ....................
            </Typography>
        </Box>

        <Box sx={{pl:2}}>
            <Typography sx={{fontSize:"12px"}}>
                Antony ilàna azy: .....................
            </Typography>
        </Box>

        <Box sx={{pl:5, mt:1,mb:1}}>
            <Typography sx={{fontSize:"12px", fontWeight:600}}>
                Noho izany, dia omena azy ity fanamarinana ity, mba hampiasainy sy hanan-kery amin'izay rehetra mety ilàna azy.
            </Typography>
            <Typography sx={{fontSize:"12px", fontStyle:"italic"}}>
                En foi de quoi, le présent certificat lui est délivré pour servir et valoir ce que de droit.
            </Typography>
        </Box>

        <Box sx={{pl:2}}>
            <Grid container>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"12px"}}>
                        Fanisam-bahoaka If: .................
                    </Typography>
                    <Typography sx={{fontSize:"12px"}}>
                        CIN-Passeport N°: ...................
                    </Typography>
                    <Typography sx={{fontSize:"12px"}}>
                        du ..................................... à .........................
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"12px"}}>
                        Natao tao .............................. androany faha ....................
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{pl:10}}>
            <Typography>
                N° {'(Numero residence)'}
            </Typography>
        </Box>
    </Box>
  )
}

export default Residence