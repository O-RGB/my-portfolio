import React from "react";
import ImageCommon from "../../image";

interface MacBoockFrameProps {}

const MacBoockFrame: React.FC<MacBoockFrameProps> = ({}) => {
  return (
    <div className="relative w-full h-full">
      <ImageCommon
        src="/macbook-layout.png"
        objectFit="contain"
        className="w-full h-full"
      ></ImageCommon>
    </div>
  );
};

export default MacBoockFrame;
