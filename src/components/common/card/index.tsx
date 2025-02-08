import React from "react";
import ButtonCommon from "../button";
import { FaPlus } from "react-icons/fa";

interface CardBoxProps {
  children?: React.ReactNode;
  className?: string;
  moreDetail?: boolean;
  highlight?: boolean;
}

const CardBox: React.FC<CardBoxProps> = ({
  children,
  className,
  moreDetail,
  highlight = true,
}) => {
  return (
    <div
      className={`relative p-6 ${
        highlight ? "bg-[#efe9e2]" : "bg-gray-100"
      } dark:bg-white/10 rounded-layout ${className}`}
    >
      {children}

      {moreDetail && (
        <div className="absolute bottom-4 right-4">
          <ButtonCommon icon={<FaPlus></FaPlus>} isCircle></ButtonCommon>
        </div>
      )}
    </div>
  );
};

export default CardBox;
