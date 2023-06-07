import React from 'react'
import { Routes, Route, BrowserRouter,useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
import HomePublicUser from './home';
import ProfilePublicUser from './profile';
import FaqPage from './faqPage';

const drawerWidth = 220;

export default function ContentPublicUser() {
  return (
    <Box component="main" >
                <Routes>
                  <Route path="/" element={<HomePublicUser/>}></Route>
                  <Route path="/profile" element={<ProfilePublicUser/>}></Route>
                  <Route path="/faq" element={<FaqPage/>}></Route>
                </Routes>
    </Box>
  )
}
