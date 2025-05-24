import React from "react";
import ImageCommon from "../../image";

interface AndroidFrameProps {
  className?: string;
}

const AndroidFrame: React.FC<AndroidFrameProps> = ({ className }) => {
  return (
    <div className="relative w-full h-full">
      <ImageCommon
        src="/images/phone-layout/android-layout.png"
        objectFit="contain"
        className={`${className}`}
      ></ImageCommon>
    </div>
  );
};

export default AndroidFrame;
