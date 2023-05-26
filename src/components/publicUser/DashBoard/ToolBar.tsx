import React, { useContext } from "react";
import { ColorModeContext, token } from "../../../theme";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlineOutlined,
  SearchOutlined,
  PersonAdd,
  Settings,
  Logout,
} from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, InputBase, ListItemIcon, Menu, MenuItem, useTheme } from "@mui/material";
import { UserCircle as UserCircleIcon } from "../../../icons/user-circle";

export const ToolBarPublicUser = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        <IconButton>
          <NotificationsOutlined
            sx={{
              fontSize: "30px",
            }}
          />
        </IconButton>
        <Avatar
        onClick={handleClick}
          sx={{
            cursor: "pointer",
            height: 40,
            width: 40,
            ml: 2,
          }}
          src="https://avatars.githubusercontent.com/u/62210936?s=400&u=1d1d6b35732fefd1f1731c399d094aa130485089&v=4"
        >
          <UserCircleIcon fontSize="small" />
        </Avatar>
        <Box>

        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Parametre
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Se deconnecter
        </MenuItem>
      </Menu>

        </Box>
      </Box>
    </Box>
  );
};
