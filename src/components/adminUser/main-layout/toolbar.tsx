import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Bell as BellIcon } from "../../../icons/bell";
import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";
import { Users as UsersIcon } from "../../../icons/users";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface PropsNotif {
  title: string;
  name: string;
  date: string;
}

export const ToolBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LIST_NOTIF: PropsNotif[] = [
    {
      title: "Nouveau CIN",
      name: "ARINAIVO Tahiana Soavina",
      date: "lundi 12, 13:00 AM",
    },
    {
      title: "Nouveau CIN",
      name: "Alay Patrick",
      date: "lundi 12, 13:00 AM",
    },
    {
      title: "Nouveau CIN",
      name: "ANDRIAMILAMINA Tendriarivelo",
      date: "lundi 12, 13:00 AM",
    },
    {
      title: "Nouvelle ADMIN",
      name: "ARINAIVO Tahiana Soavina",
      date: "mardi 13, 16:00 AM",
    },
    {
      title: "Nouvelle ADMIN",
      name: "ARINAIVO Tahiana Soavina",
      date: "mardi 13, 16:00 AM",
    },
  ];

  const length:number = LIST_NOTIF.length;


  return (
    <Toolbar variant="regular">

      <Tooltip title="Notifications">
        <IconButton
          sx={{ ml: 2 }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Badge badgeContent={length} color="primary">
            <CircleNotificationsOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <Box sx={{ width: "350", height: "auto" }}>
          <Typography variant="h6" sx={{ pl: 2 }}>
            Notification
          </Typography>
          {LIST_NOTIF.map((item, i) => {
            return (
              <Box key={i} ><MenuItem
                sx={{
                  display: "block",
                  flexDirection: "column",
                  alignItems: "left",
                }}
                
                onClick={handleClose}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "100",
                    lineHeight: 1,
                    fontFamily:"cursive",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0,875rem",
                    fontWeight: "500",
                    lineHeight: 1.57,
                    fontFamily: "initial",
                    color: "rgb(99, 102, 241)",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: 1.57,
                    fontFamily: "initial",
                    color: "rgb(108, 115, 127)",
                  }}
                >
                  {item.date}
                </Typography>
              </MenuItem>
              <Divider/></Box>
            );
          })}
        </Box>
      </Menu>

      <Avatar
        sx={{
          cursor: "pointer",
          height: 40,
          width: 40,
          ml: 2,
        }}
        src=""
      >
        <UserCircleIcon fontSize="small" />
      </Avatar>
    </Toolbar>
  );
};