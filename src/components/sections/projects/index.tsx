import React from "react";
import ProjectBox from "../../layout/project-box";
import VideoCommon from "../../common/video";
import Gaysornurbanresort from "./gaysornurbanresort";
import ImageCommon from "@/components/common/image";
import PhoneScreen from "@/components/common/phone-screen";
import IPadFrame from "@/components/common/phone-screen/ipad";
import IPhoneFrame from "@/components/common/phone-screen/iphone";
import CardBox from "@/components/common/card";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-contant relative h-fit">
        <span className="text-clamp-lg font-bold">Project</span>
        <div className="flex flex-col gap-20">
          <ProjectBox
            layout="iphone"
            screenContant={
              <div className="relative w-full h-full">
                <VideoCommon
                  src="/images/project/test.mp4"
                  autoPlay
                  loop
                ></VideoCommon>
              </div>
            }
          >
            <Gaysornurbanresort></Gaysornurbanresort>
          </ProjectBox>
          <ProjectBox
            layout="ipad"
            reverse
            mode="landscape"
            screenContant={
              <div className="relative w-full h-full">
                <ImageCommon src="/images/project/rfp/home.png"></ImageCommon>
              </div>
            }
          >
            <Gaysornurbanresort></Gaysornurbanresort>
          </ProjectBox>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
