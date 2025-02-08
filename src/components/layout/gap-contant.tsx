import React from "react";

interface GapContantProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

const GapContant: React.FC<GapContantProps> = ({ children, id, className }) => {
  return (
    <div id={id} className={`flex flex-col gap-3 md:gap-10 lg:gap-20 ${className}`}>
      {children}
    </div>
  );
};

export default GapContant;
