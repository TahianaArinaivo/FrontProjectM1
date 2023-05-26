import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { token } from "../../../theme";
import { Link } from "react-router-dom";

type ItemProps = {
  title: string;
  to: string;
  icon?: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
};

export const Item = (props: ItemProps) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  return (
    <MenuItem
      active={props.selected === props.title}
      style={{
        color: props.selected === props.title ? colors.grey[100] : "",
      }}
      onClick={() => {
        props?.setSelected(props.title);
      }}
      icon={props.icon}
    >
      <Typography
        sx={{
          color: theme.palette.mode === "light" ? "white" : null,
        }}
      >
        {props.title}
      </Typography>
      <Link to={props?.to} />
    </MenuItem>
  );
};
