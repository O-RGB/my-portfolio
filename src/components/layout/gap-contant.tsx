import React from "react";

interface GapContantProps {
  children?: React.ReactNode;
}

const GapContant: React.FC<GapContantProps> = ({ children }) => {
  return <div className="flex flex-col gap-10 lg:gap-20">{children}</div>;
};

export default GapContant;
