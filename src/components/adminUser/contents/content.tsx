import React from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "../DashBoard/DashBoard";
import User from "../user/user";
import Stats from "../Statistic/stats";
import List from "../list/List";
import ProfileAdminUser from "../main-layout/profile";
import VoteAdmin from "../vote/VoteAdmin";

const drawerWidth = 220;

export default function Content() {
  return (
    <Box component="main">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/liste" element={<List />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/stat" element={<Stats />}></Route>
        <Route path="/admin profile" element={<ProfileAdminUser />}></Route>
        <Route path="/vote" element={<VoteAdmin />}></Route>
      </Routes>
    </Box>
  );
}
