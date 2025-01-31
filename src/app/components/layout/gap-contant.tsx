import React from "react";

interface GapContantProps {
  children?: React.ReactNode;
}

const GapContant: React.FC<GapContantProps> = ({ children }) => {
  return <div className="flex flex-col gap-layout">{children}</div>;
};

export default GapContant;
