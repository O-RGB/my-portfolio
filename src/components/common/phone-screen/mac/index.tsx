import React from "react";
import ImageCommon from "../../image";

interface MacBoockFrameProps {
  className?: string;
}

const MacBoockFrame: React.FC<MacBoockFrameProps> = ({className}) => {
  return (
    <ImageCommon
      src="/images/phone-layout/macbook-layout.png"
      objectFit="contain"
      className={`${className}`}
      containerClassName={`w-full h-full`}
    ></ImageCommon>
  );
};

export default MacBoockFrame;
