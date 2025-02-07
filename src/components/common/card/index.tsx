import React from "react";
import ButtonCommon from "../button";
import { FaPlus } from "react-icons/fa";

interface CardBoxProps {
  children?: React.ReactNode;
  className?: string;
  moreDetail?: boolean;
}

const CardBox: React.FC<CardBoxProps> = ({
  children,
  className,
  moreDetail,
}) => {
  return (
    <div
      className={`relative p-6 bg-[#efe9e2] dark:bg-white/10 rounded-layout ${className}`}
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
