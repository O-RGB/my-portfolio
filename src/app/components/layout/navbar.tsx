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
          <MenuItem className="hidden lg:block" label="Home"></MenuItem>
          <MenuItem className="hidden lg:block" label="About me"></MenuItem>
          <MenuItem className="hidden lg:block" label="Work"></MenuItem>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default NavBar;
