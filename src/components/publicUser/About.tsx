import React from 'react'
import { Box, ImageListItem,ImageList } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
  title:string;
  descriptio:string;
  image:string
}

interface PropsImg {
  alt:string;
  img:string;
}

export default function About() {

  const LISTE_PROPS: Props[] = [
    {
      title:"Lorem ipsum dolor sit amet",
      descriptio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos nemo, id qui nulla necessitatibus error odio delectus eaque laborum nisi ipsam iste explicabo quae neque atque rem sint beatae?",
      image:"/recensement.png"
    },  
    {
      title:"Lorem ipsum dolor sit amet",
      descriptio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos nemo, id qui nulla necessitatibus error odio delectus eaque laborum nisi ipsam iste explicabo quae neque atque rem sint beatae?",
      image:"/cin.jpg"
    }, 
    {
      title:"Lorem ipsum dolor sit amet",
      descriptio:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos nemo, id qui nulla necessitatibus error odio delectus eaque laborum nisi ipsam iste explicabo quae neque atque rem sint beatae?",
      image:"/vote.jpg"
    }, 
  ];


  const LIST_IMG: PropsImg[] = [
    {
      alt:"string",
      img:"/image/1.jpg",
    },
    {
      alt:"string",
      img:"/image/2.jpg",
    },
    {
      alt:"string",
      img:"/image/3.png",
    },
    {
      alt:"string",
      img:"/image/4.jpg",
    },
    {
      alt:"string",
      img:"/image/5.jfif",
    },
    {
      alt:"string",
      img:"/image/6.jfif",
    },
    {
      alt:"string",
      img:"/image/7.jfif",
    },
    {
      alt:"string",
      img:"/image/8.jfif",
    },
    {
      alt:"string",
      img:"/image/9.png",
    },
    {
      alt:"string",
      img:"/image/10.png",
    },
  ];

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
                paddingBottom:"5rem",
                color:"#f1f1f1",
            }}>
              <Box sx={{
                position:"relative",
                backgroundColor:"white",
                top:"-1rem",
                width:"100%",
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"center",
                alignItems:"center",
              }}>


                {LIST_IMG.map((items,i) => {
                  return(
                    <ImageListItem key={i} sx={{ 
                    width:80,
                    height:60,     
                    marginLeft:0,                
                    display:"inline-block",
                    flexDirection:"row",
                    flexWrap:"wrap",
                    justifyContent:"center",
                    alignItems:"center",}}  >
                      <img loading="lazy" src={items.img} alt={items.alt}  />
                    </ImageListItem>
                  )
                })}
              </Box>
            <Box sx={{
                fontFamily:"cursive",
                fontSize:"40px",
                marginBottom:"2rem",
                fontWeight:"900"
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
                      <Typography color="success" gutterBottom variant="h5" component="div">
                        {list.title}
                      </Typography>
                      <Typography variant="body2" sx={{
                        color:"#9DA4AE",
                        fontFamily:"cursive",
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
