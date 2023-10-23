import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DomainVerificationOutlinedIcon from "@mui/icons-material/DomainVerificationOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Link from "@mui/material/Link";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

import { token } from "../../../theme";

//import Content from "../contents/content";
import { ToolBarPublicUser } from "./ToolBar";
import { Typography, useTheme } from "@mui/material";
import Content from "./content";
import ContentPublicUser from "./content";

const drawerWidth = 260;

interface Props {
  window?: () => Window;
}

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      mt="12rem"
      sx={{ color: "#9DA4AE" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Sindwai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SideNavPublicUser(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const LIST_ITEM = [
    {
      link: "/utilisateur/dashboard/",
      title: "Page d'accueil",
      icon: <DashboardOutlinedIcon />,
    },
    {
      link: "/utilisateur/dashboard/profile",
      title: "Profil",
      icon: <PersonOutlinedIcon />,
    },
    {
      link: "/utilisateur/dashboard/vote",
      title: "Assistant de vote",
      icon: <HowToVoteIcon />,
    },
    {
      link: "/utilisateur/dashboard/faq",
      title: "FAQ Page",
      icon: <HelpOutlineOutlinedIcon />,
    },
  ];

  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const drawer = (
    <div>
      <Box mb="25px" mt="40px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            style={{ cursor: "pointer", borderRadius: "50%" }}
            alt="user profile"
            width={"80"}
            height={"80px"}
            src="/user.png"
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h4"
            color={theme.palette.mode === "dark" ? colors.grey[100] : "white"}
            fontWeight="400"
            fontSize={"20px"}
            sx={{ margin: "5px 0 10px 0" }}
          >
            ANDRIAMILAMINA Tendriarivelo
          </Typography>
          <Typography
            variant="h3"
            color={colors.greenAccent[500]}
            sx={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            CINDIA
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ color: "#f1f1f1" }} />

      <List>
        {LIST_ITEM.map((item, i) => (
          <ListItem
            onClick={() => navigate(item.link)}
            disablePadding
            key={i}
            sx={{
              color: "#9DA4AE",
              paddingLeft: "2px",
              webkitBoxFlex: 1,
              flexGrow: 1,
              fontWith: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              lineHeight: "24px",
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: "30px",
                borderWidth: "20px",
                paddingLeft: "30px",
                ":hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                },
              }}
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    position: "absolute",
                    color: "#9DA4AE",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText
                sx={{
                  paddingLeft: "25%",
                  fontFamily: "'Work Sans', sans-serif",
                }}
                primary={item.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Copyright />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <ToolBarPublicUser />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1C2536",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1C2536",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        <ContentPublicUser />
      </Box>
    </Box>
  );
}
