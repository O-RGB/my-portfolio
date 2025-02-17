import React from "react";
import ImageCommon from "../../image";

interface MacBoockFrameProps {}

const MacBoockFrame: React.FC<MacBoockFrameProps> = ({}) => {
  return (
    <ImageCommon
      src="/images/phone-layout/macbook-layout.png"
      objectFit="contain"
      containerClassName="w-full h-full"
    ></ImageCommon>
  );
};

export default MacBoockFrame;
