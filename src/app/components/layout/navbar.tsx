import React from "react";
import ButtonCommon from "../common/button";
import ContainerLayout from "./container";
import MenuItem from "../common/menu";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <ContainerLayout>
      <div className="h-20 flex items-center justify-between">
        <span className="font-bold text-3xl">Phichayoot</span>
        <div className="flex">
          <MenuItem label="Home"></MenuItem>
          {/* <MenuItem label="About me"></MenuItem>
          <MenuItem label="Work"></MenuItem> */}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default NavBar;
