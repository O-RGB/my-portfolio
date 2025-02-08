import React from "react";
import ImageCommon from "../../image";

interface IPhoneFrameProps {}

const IPhoneFrame: React.FC<IPhoneFrameProps> = ({}) => {
  return (
    <ImageCommon
      src="/iphone-layout.png"
      objectFit="contain"
      className="w-full h-full"
    ></ImageCommon>
  );
};

export default IPhoneFrame;
