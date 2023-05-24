import React from 'react'
import { Routes, Route, BrowserRouter,useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
import Home from "../DashBoard/DashBoard";
import Domain from "../domain/domain";
import User from "../user/user";
import Stats from "../stats/stats";
import List from '../list/list';

const drawerWidth = 220;

export default function Content() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/liste" element={<List/>}></Route>
                  <Route path="/domain" element={<Domain/>}></Route>
                  <Route path="/user" element={<User/>}></Route>
                  <Route path="/stat" element={<Stats/>}></Route>
                </Routes>
    </Box>
  )
}
