import React from "react";
import ImageCommon from "../../image";

interface IPhoneFrameProps {}

const IPhoneFrame: React.FC<IPhoneFrameProps> = ({}) => {
  return (
    <ImageCommon
      src="/images/phone-layout/iphone-layout.png"
      objectFit="contain"
      containerClassName="w-full h-full"
    ></ImageCommon>
  );
};

export default IPhoneFrame;
