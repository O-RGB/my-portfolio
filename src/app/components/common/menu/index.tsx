import React from "react";
import ButtonCommon from "../button";
import Link from "next/link";

interface MenuItemProps {
  label?: string;
  active?: boolean;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, active, href }) => {
  return (
    <Link href={href ?? "/"}>
      <ButtonCommon
        label={label}
        variant="transparent"
        className={`!border-none hover:!opacity-60 active:!opacity-80 ${
          active ? "underline" : ""
        }`}
      ></ButtonCommon>
    </Link>
  );
};

export default MenuItem;
