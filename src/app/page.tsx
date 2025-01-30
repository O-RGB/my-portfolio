"use client";
import React from "react";
import ImageCommon from "./components/common/image";
import ContainerLayout from "./components/layout/container";
import CardBox from "./components/common/card";
import ButtonCommon from "./components/common/button";
import Home from "./components/pages/home";
import NavBar from "./components/layout/navbar";

interface HomeAppProps {}

const HomeApp: React.FC<HomeAppProps> = ({}) => {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
    </>
  );
};

export default HomeApp;
