import React from "react";
import ImageCommon from "../../image";

interface AndroidFrameProps {}

const AndroidFrame: React.FC<AndroidFrameProps> = ({}) => {
  return (
    <div className="relative w-full h-full">
      <ImageCommon src="/android-layout.png" objectFit="contain"></ImageCommon>
    </div>
  );
};

export default AndroidFrame;
