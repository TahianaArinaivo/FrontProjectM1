import React from 'react';
import Home from "../components/DashBoard/DashBoard";
import Domain from "../components/domain";
import User from "../components/user";
import Stats from "../components/stats";
import { ToolBar } from '../components/toolbar';
import Content from '../components/content';
import SideNav from '../components/sideNav';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import List from '../components/list';

export default function MainLayoutContainer() {
  return(
    <>
        <SideNav/>
    </>
  );
}
