import React from "react";
import ImageCommon from "../../image";

interface IPadFrameProps {}

const IPadFrame: React.FC<IPadFrameProps> = ({}) => {
  return (
    <div className="relative w-full h-full">
      <ImageCommon
        src="/images/phone-layout/ipad-layout.png"
        objectFit="contain"
      ></ImageCommon>
    </div>
  );
};

export default IPadFrame;
