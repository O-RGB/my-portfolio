import Link from "next/link";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

interface ListMenuProps {
  href: string;
  label?: string;
  onClick?: () => void;
}

const ListMenu: React.FC<ListMenuProps> = ({ href, label, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className="p-2 flex justify-between items-center hover:bg-white/5 duration-300 text-white"
    >
      <div>{label}</div>
      <div>
        <RiArrowRightSLine></RiArrowRightSLine>
      </div>
    </Link>
  );
};

export default ListMenu;
