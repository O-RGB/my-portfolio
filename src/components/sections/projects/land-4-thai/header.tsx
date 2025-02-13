import ImageCommon from "@/components/common/image";
import { images } from "@/config/value";
import React from "react";

interface Land4ThaiHeaderProps {}

const Land4ThaiHeader: React.FC<Land4ThaiHeaderProps> = ({}) => {
  return (
    <>
      <div className="relative h-32 bg-[#207c04] rounded-layout p-3 overflow-hidden hidden md:block">
        <div className="absolute z-10 w-56 h-56 left-0 top-0">
          <ImageCommon
            src={images.projects.land4Thai.images.overlayPreview}
            objectFit="contain"
            className="rotate-90 "
          ></ImageCommon>
        </div>

        <div className="absolute z-10 w-56 h-56 right-0 top-0">
          <ImageCommon
            src={images.projects.land4Thai.images.overlayPreview}
            objectFit="contain"
            className="-rotate-90 "
          ></ImageCommon>
        </div>

        <ImageCommon
          src={images.projects.land4Thai.images.logoApp}
          objectFit="contain"
          className="w-full"
          containerClassName="relative z-20"
        ></ImageCommon>
      </div>
    </>
  );
};

export default Land4ThaiHeader;
