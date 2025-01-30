import React from "react";

interface CardBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const CardBox: React.FC<CardBoxProps> = ({ children, className }) => {
  return (
    <div
      className={`p-6 bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default CardBox;
