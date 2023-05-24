import React from "react";
import TopAppBar from "./AppBar";
import Container from "./Container";
import About from "./About";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Register from "./Register/register";

export default function HomePage() {
  return (
    <>
      <TopAppBar />
      <Container />
      <About />
      <Footer />
    </>
  );
}
