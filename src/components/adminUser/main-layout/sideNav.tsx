import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DomainVerificationOutlinedIcon from "@mui/icons-material/DomainVerificationOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import Content from "../contents/content";
import { ToolBar } from "./toolbar";

const drawerWidth = 220;

interface Props {
  window?: () => Window;
}

export default function SideNav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const LIST_ITEM = [
    {
      link: "/admin/",
      title: "Tableau de bord",
      icon: <DashboardOutlinedIcon />,
    },
    {
      link: "/admin/liste",
      title: "Liste",
      icon: <BallotOutlinedIcon />,
    },
    {
      link: "/admin/domain",
      title: "Eléction",
      icon: <DomainVerificationOutlinedIcon />,
    },
    {
      link: "/admin/user",
      title: "Utilisateur",
      icon: <AdminPanelSettingsOutlinedIcon />,
    },
    {
      link: "/admin/stat",
      title: "Statistique",
      icon: <ShowChartOutlinedIcon />,
    },
  ];

  const drawer = (
    <div>
      <Box
        sx={{
          fontFamily: "Verdana",
          fontSize: "30px",
          marginLeft: "15%",
          marginTop: 3,
          marginBottom: 3,
          color: "#9DA4AE",
        }}
      >
        CINDIA
      </Box>

      <Divider sx={{ color: "#9DA4AE" }} />

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
              fontFamily: "cursive",
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
                }}
                primary={item.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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

          <Tooltip title="Recherche">
            <IconButton onClick={() => handleClickOpen()} sx={{ ml: 1 }}>
              <SearchIcon
                sx={{
                  fontSize: "30px",
                }}
              />
            </IconButton>
          </Tooltip>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="search"
            aria-describedby="search-description"
          >
            <DialogTitle id="alert-dialog-title">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "500px" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Recherche"
                  variant="outlined"
                  placeholder="recherche..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="list list">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                repellendus dicta veniam tempora magni praesentium sapiente
                doloremque accusantium, et deleniti a expedita. Explicabo vero
                vel impedit voluptatum soluta odio natus.
              </DialogContentText>
            </DialogContent>
          </Dialog>

          <Box sx={{ flexGrow: 1 }} />

          <ToolBar />
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        <Content />
      </Box>
    </Box>
  );
}
