import React from 'react'
import { Box, ImageListItem,ImageList } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { LISTE_PROPS } from './constants/constantAbout';
import { LIST_IMG } from './constants/constantImg';


export default function About() {

  return (
    <div id='about'>
        <Box sx={{
                backgroundColor:"#1C2536",
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                paddingTop:"1rem",
                color:"#f1f1f1",
                marginTop:0,
            }}>
            <Box sx={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize:"40px",
                marginBottom:"2rem",
                fontWeight:"800"
            }}>
                A PROPOS
            </Box>

            <Box sx={{
              marginTop:"2rem",
              marginBottom:"2rem"
            }} >
              {LISTE_PROPS.map((list,i) => {
                return(
                  <Card key={i} sx={{ maxWidth: 350,                
                    backgroundColor:"#1C2536",
                  display:"inline-block",
                  flexDirection:"row",
                  flexWrap:"wrap",
                  justifyContent:"center",
                  alignItems:"center",
                  marginLeft:"3rem",
                  marginBottom:"2rem",
                  color:"#f1f1f1",
                  boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                  <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={list.image}
                        alt="green iguana"
                    />
                    <CardContent>
                      <Typography color="success" gutterBottom variant="h5" component="div" sx={{fontFamily: "'Work Sans', sans-serif",}}>
                        {list.title}
                      </Typography>
                      <Typography variant="body2" sx={{
                        color:"#9DA4AE",
                        fontFamily: "'Work Sans', sans-serif",
                      }} >
                        {list.descriptio}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                )
              })}
            </Box>
        </Box>
    </div>
  )
}
