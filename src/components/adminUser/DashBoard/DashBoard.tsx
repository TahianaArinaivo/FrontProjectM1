import React, { Suspense } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import { useGetUser } from "../../../hooks/useUser";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const { data } = useGetUser();

  return (
    <>
      <Typography
        sx={{ m: 1, pl: 3, fontFamily: "'Work Sans', sans-serif" }}
        variant="h4"
      >
        Tableau de bord
      </Typography>
      <Box>
        <Container maxWidth="lg" sx={{ mt: 1, mb: 4 }}>
          <Deposits users={data?.result} />
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Suspense fallback={<Skeleton count={5} />}>
              <Chart users={data?.result} />
            </Suspense>
          </Paper>

          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Suspense fallback={<Skeleton count={5} />}>
              <Orders users={data?.result} />
            </Suspense>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
