"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContainerLayout from "./container";
import MenuItem from "../common/menu";
import DynamicIsland from "../common/dynamic-island";
import DarkMode from "../tools/dark-mode";
import useSectionStore from "@/stores/section-store";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [showDynamicIsland, setShowDynamicIsland] = useState(false);
  const modalOpening = useSectionStore((state) => state.modalOpening);
  const scrollPosition = useSectionStore((state) => state.scrollPosition);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 50) {
  //       setShowDynamicIsland(true);
  //     } else {
  //       setShowDynamicIsland(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (scrollPosition >= 50 && modalOpening === false) {
      setShowDynamicIsland(true);
    } else {
      setShowDynamicIsland(false);
    }
  }, [scrollPosition, modalOpening]);

  return (
    <>
      <motion.div
        className="fixed left-1/2 transform -translate-x-1/2 z-50"
        initial={{ top: -70 }}
        animate={{
          top: showDynamicIsland ? 13 : -70,
        }}
        transition={{ ease: "backInOut", duration: 1 }}
      >
        <DynamicIsland onShow={showDynamicIsland} />
      </motion.div>
      <ContainerLayout>
        <div className="h-28 flex items-center justify-between">
          <span className="font-bold text-3xl">Phichayoot</span>
          <div className="flex items-center justify-center">
            <MenuItem
              href="/#about"
              className="hidden lg:block"
              label="About me"
            ></MenuItem>
            <MenuItem
              href="/#experience"
              className="hidden lg:block"
              label="Work"
            ></MenuItem>
            <MenuItem
              href="/#skills"
              className="hidden lg:block"
              label="Skills"
            ></MenuItem>
            <MenuItem
              href="/#project"
              className="hidden lg:block"
              label="Project"
            ></MenuItem>

            <div className="pl-4">
              <DarkMode></DarkMode>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};

export default NavBar;
