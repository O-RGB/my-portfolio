"use client";
import React from "react";
import Home from "../components/pages/home";
import NavBar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

interface HomeAppProps {}

const HomeApp: React.FC<HomeAppProps> = ({}) => {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </>
  );
};

export default HomeApp;
