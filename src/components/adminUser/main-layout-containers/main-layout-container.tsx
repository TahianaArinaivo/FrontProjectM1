import React from 'react';
import Home from "../DashBoard/DashBoard";
import User from "../user/user";
import Stats from "../Statistic/stats";
import { ToolBar } from '../main-layout/toolbar';
import Content from '../contents/content';
import SideNav from '../main-layout/sideNav';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import List from '../list/list';

export default function MainLayoutContainer() {
  return(
    <>
        <SideNav/>
    </>
  );
}
