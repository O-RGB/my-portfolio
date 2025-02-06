import React from "react";

interface CardBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const CardBox: React.FC<CardBoxProps> = ({ children, className }) => {
  return (
    <div
      className={`p-6 bg-[#efe9e2] dark:bg-white/5 rounded-layout ${className}`}
    >
      {children}
    </div>
  );
};

export default CardBox;
