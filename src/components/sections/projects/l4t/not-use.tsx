import CardBox from "@/components/common/card";
import GalleryImages from "@/components/common/galleryimages";
import ImageCommon from "@/components/common/image";
import PhoneScreen from "@/components/common/phone-screen";
import { AppleSereenType, ApplePosition } from "@/types/general.type";
import React from "react";

interface Land4ThaiProjectProps {}

const Land4ThaiProject: React.FC<Land4ThaiProjectProps> = ({}) => {
  const genScreen = (
    url?: string,
    layout?: AppleSereenType,
    mode?: ApplePosition
  ) => {
    return (
      <CardBox>
        <PhoneScreen layout={layout} mode={mode}>
          <ImageCommon
            src={url}
            containerClassName="w-full h-full"
          ></ImageCommon>
        </PhoneScreen>
      </CardBox>
    );
  };

  const screen1 = genScreen("/images/project/l4t/L4T.png", "iphone");
  const screen2 = genScreen("/images/project/l4t/L4T.png", "iphone");
  const screen3 = genScreen("/images/project/l4t/L4T.png", "iphone");
  const screen4 = genScreen("/images/project/l4t/L4T.png", "iphone");
  const screen5 = genScreen(
    "/images/project/l4t/L4T.png",
    "iphone",
    "landscape"
  );
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-contant">
          {screen1}
          {screen2}
        </div>
      </div>
      {/* <div className="block md:hidden">
        <GalleryImages
          images={[screen1, screen2, screen3, screen4, screen5]}
        ></GalleryImages>
      </div> */}
    </>
  );
};

export default Land4ThaiProject;
