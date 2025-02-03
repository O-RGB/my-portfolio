import React from "react";

interface ContainerPropsLayout {
  children?: React.ReactNode;
  className?: string;
}

const ContainerLayout: React.FC<ContainerPropsLayout> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center h-full ${className}`}
    >
      <div className="w-full max-w-7xl relative h-full px-6 lg:px-10 transition-all duration-1000">
        {children}
      </div>
    </div>
  );
};

export default ContainerLayout;
