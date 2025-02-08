import React from "react";
import ImageCommon from "../../image";

interface IPadFrameProps {}

const IPadFrame: React.FC<IPadFrameProps> = ({}) => {
  return (
    <div className="relative w-full h-full">
      <ImageCommon
        src="/ipad-layout.png"
        objectFit="contain"
        className="w-full h-full"
      ></ImageCommon>
    </div>
  );
};

export default IPadFrame;
