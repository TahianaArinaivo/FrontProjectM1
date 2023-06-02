import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@mui/material";
import { ReactNode } from "react";
import LiveHelpRoundedIcon from "@mui/icons-material/LiveHelpRounded";
import faqImg from "/FAQ.jpg";
import { Search as SearchIcon } from "../../../icons/search";

interface LIST_FAQ {
  icon: any;
  title: string;
  description: string;
}

function FaqPage() {
  const listCard: LIST_FAQ[] = [
    {
      icon: faqImg,
      title: "Faq",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ipsam dolore deserunt, perferendis quo, dolorum commodi est aperiam repudiandae maiores nobis in eos omnis eum doloremque aliquid voluptatibu",
    },
    {
      icon: faqImg,
      title: "Faq",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ipsam dolore deserunt, perferendis quo, dolorum commodi est aperiam repudiandae maiores nobis in eos omnis eum doloremque aliquid voluptatibu",
    },
    {
      icon: faqImg,
      title: "Faq",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ipsam dolore deserunt, perferendis quo, dolorum commodi est aperiam repudiandae maiores nobis in eos omnis eum doloremque aliquid voluptatibu",
    },
  ];

  return (
    <div>
      <Box sx={{ mt: 3 }}>
        <Card sx={{ boxShadow:"none" }}>
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
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          width: "150vh",
          mt: "5rem",
        }}
      >
        {listCard.map((item, id) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              ml: "1rem",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pb: 3,
                }}
              >
                <Avatar alt="Product" src={item.icon} variant="square" />
              </Box>
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h5"
              >
                {item.title}
              </Typography>
              <Typography align="center" color="textPrimary" variant="body1">
                {item.description}
              </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default FaqPage;
