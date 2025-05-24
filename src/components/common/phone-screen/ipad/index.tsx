import React from "react";
import ImageCommon from "../../image";

interface IPadFrameProps {
  className?: string;
}

const IPadFrame: React.FC<IPadFrameProps> = ({className}) => {
  return (
    <div className="relative w-full h-full">
      <ImageCommon
        src="/images/phone-layout/ipad-layout.png"
        objectFit="contain"
        className={`${className}`}
      ></ImageCommon>
    </div>
  );
};

export default IPadFrame;
