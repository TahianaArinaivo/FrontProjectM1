import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Divider,
  ListItemIcon,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";
import {
  NotificationsOutlined,
  Settings,
  Logout,
} from "@mui/icons-material";

interface PropsNotif {
  title: string;
  name: string;
  date: string;
}

export const ToolBarPublicUser = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [anchorElAccount, setAnchorElAccount] = React.useState<null | HTMLElement>(null);
  const openAccount = Boolean(anchorElAccount);
  const handleClickAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAccount(event.currentTarget);
  };
  const handleCloseAccount = () => {
    setAnchorElAccount(null);
  };
  const LIST_NOTIF: PropsNotif[] = [
    {
      title: "Demande accepté",
      name: "Certificat de résidence ",
      date: "lundi 12, 13:00 AM",
    },
    {
      title: "Demande accepté",
      name: "Certificat de vie ",
      date: "lundi 12, 13:00 AM",
    },
    {
      title: "Demande réfusé",
      name: "Nouveau CIN",
      date: "lundi 12, 13:00 AM",
    },
  ];

  const length: number = LIST_NOTIF.length;

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
            <NotificationsOutlined
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
              <Box key={i}>
                <MenuItem
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
                      fontFamily: "cursive",
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
                <Divider />
              </Box>
            );
          })}
        </Box>
      </Menu>

      <Avatar onClick={handleClickAccount}
        sx={{
          cursor: "pointer",
          height: 40,
          width: 40,
          ml: 2,
        }}
        src="/user.png"
      >
        <UserCircleIcon fontSize="small" />
      </Avatar>

      <Menu
        anchorEl={anchorElAccount}
        id="account-menu"
        open={openAccount}
        onClose={handleCloseAccount}
        onClick={handleCloseAccount}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseAccount}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseAccount}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Se deconnecter
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};
