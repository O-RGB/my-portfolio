import CardBox from "@/components/common/card";
import ImageCommon from "@/components/common/image";
import PhoneScreen from "@/components/common/phone-screen";
import VideoCommon from "@/components/common/video";
import React from "react";

interface NextKaraokeProps {}

const NextKaraoke: React.FC<NextKaraokeProps> = ({}) => {
  return (
    <>
      <CardBox className="aspect-video relative flex items-center justify-center">
        <div className="w-[50vw] xl:w-[700px] h-fit">
          <PhoneScreen layout={"ipad"} mode="landscape">
            <VideoCommon
              loop
              src={"/images/skills/backend/bg-video-2.mp4"}
              className="rotate-90 w-full h-full scale-[2.5]"
              autoPlay
            ></VideoCommon>
          </PhoneScreen>
        </div>
        <div className=" absolute w-[30vw] xl:w-[400px] bottom-[4vw] xl:bottom-[50px] right-10  z-20  h-fit">
          <PhoneScreen layout={"iphone"}>
            <VideoCommon
              loop
              src={"/images/skills/backend/bg-video-2.mp4"}
              className="rotate-90 w-full h-full scale-[2.5]"
              autoPlay
            ></VideoCommon>
          </PhoneScreen>
        </div>
      </CardBox>
    </>
  );
};

export default NextKaraoke;
