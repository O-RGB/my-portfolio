import React from "react";
import ButtonCommon from "../button";
import Link from "next/link";

interface MenuItemProps {
  label?: string;
  active?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  active,
  href,
  className,
  onClick,
}) => {
  return (
    <Link className={className} href={href ?? "/"}>
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
