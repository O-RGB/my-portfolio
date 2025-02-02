import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContainerLayout from "./container";
import MenuItem from "../common/menu";
import DynamicIsland from "../common/dynamic-island";
import SwitchCommon from "../common/switch";
import { FaImage, FaMoon, FaSun } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import ButtonCommon from "../common/button";
import DarkMode from "../tools/dark-mode";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [showDynamicIsland, setShowDynamicIsland] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setShowDynamicIsland(true);
      } else {
        setShowDynamicIsland(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <DynamicIsland />
      </motion.div>
      <ContainerLayout>
        <div className="h-20 flex items-center justify-between">
          <span className="font-bold text-3xl">Phichayoot</span>
          <div className="flex items-center justify-center">
            <MenuItem className="hidden lg:block" label="Home"></MenuItem>
            <MenuItem className="hidden lg:block" label="About me"></MenuItem>
            <MenuItem className="hidden lg:block" label="Work"></MenuItem>

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
