import React from "react";
import VideoCommon from "../common/video";
import CardBox from "../common/card";
import ImageCommon from "../common/image";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-contant relative h-fit">
        <span className="text-clamp-lg font-bold">Project</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-contant">
          <CardBox
            className="w-full aspect-square !p-0 overflow-hidden"
            moreDetail
          >
            <div className="relative flex items-center justify-center w-full h-full scale-[0.8]">
              <div className="absolute flex items-center justify-center w-full h-full">
                <VideoCommon
                  src="/images/project/test.mp4"
                  className="rounded-[3vw] border overflow-hidden h-[95%] shadow-xl md:shadow-2xl drop-shadow-lg md:drop-shadow-xl"
                  autoPlay
                  loop
                ></VideoCommon>
              </div>
              <ImageCommon
                src="/iphone-layout.png"
                objectFit="contain"
                className="w-full h-full"
              ></ImageCommon>
            </div>
          </CardBox>
          <CardBox className="!p-0 overflow-hidden"></CardBox>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
