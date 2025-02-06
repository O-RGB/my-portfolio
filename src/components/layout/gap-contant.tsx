import React from "react";

interface GapContantProps {
  children?: React.ReactNode;
  id?: string;
}

const GapContant: React.FC<GapContantProps> = ({ children, id }) => {
  return (
    <div id={id} className="flex flex-col gap-10 lg:gap-20">
      {children}
    </div>
  );
};

export default GapContant;
