import React from "react";

interface CardBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const CardBox: React.FC<CardBoxProps> = ({ children, className }) => {
  //backdrop-blur-sm border border-white/50
  return (
    <div className={`p-6 bg-[#efe9e2] rounded-layout ${className}`}>
      {children}
    </div>
  );
};

export default CardBox;
