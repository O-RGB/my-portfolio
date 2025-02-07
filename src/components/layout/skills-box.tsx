import React from "react";
import ImageCommon from "../common/image";
import VideoCommon from "../common/video";

interface SkillsBoxProps {
  title?: string;
  contant?: React.ReactNode;
  bg?: string;
  isVideo?: boolean;
}

const SkillsBox: React.FC<SkillsBoxProps> = ({
  title,
  contant,
  bg,
  isVideo,
}) => {
  return (
    <div
      className={`flex flex-col w-full h-full gap-2 rounded-layout p-6 relative overflow-hidden bg-gray-100 dark:bg-white/10  text-black dark:text-white duration-300`}
    >
      {bg && (
        <div className="absolute w-full h-full top-0 left-0 z-10 dark:brightness-[0.5] dark:contrast-150 duration-300">
          {isVideo ? (
            <VideoCommon
              speed={0.75}
              src={bg}
              autoPlay
              loop
              className=" w-full h-full object-cover opacity-40"
            ></VideoCommon>
          ) : (
            <ImageCommon
              className=" w-full h-full object-center"
              objectFit="cover"
              src={bg}
            ></ImageCommon>
          )}
        </div>
      )}
      {title && (
        <div className="h-[20%] text-lg md:text-2xl font-bold w-full relative z-20">
          {title}
        </div>
      )}
      {contant && (
        <div
          className={`${title ? "h-[80%]" : "h-[100%]"} w-full relative z-20`}
        >
          {contant}
        </div>
      )}
    </div>
  );
};

export default SkillsBox;
