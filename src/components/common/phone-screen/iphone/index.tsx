import React from "react";
import ImageCommon from "../../image";

interface IPhoneFrameProps {
  className?: string;
}

const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ className }) => {
  return (
    <ImageCommon
      src="/images/phone-layout/iphone-layout.png"
      objectFit="contain"
      className={`${className}`}
      containerClassName={`w-full h-full`}
    ></ImageCommon>
  );
};

export default IPhoneFrame;
