import React, { useRef } from "react";
import ProjectBox from "../../layout/project-box";
import VideoCommon from "../../common/video";
import Gaysornurbanresort from "./gaysornurbanresort";
import ImageCommon from "@/components/common/image";
import layout from "@/app/layout";
import CardBox from "@/components/common/card";
import PhoneScreen from "@/components/common/phone-screen";
import { motion, useInView } from "framer-motion";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  return (
    <>
      <div className="flex flex-col gap-contant relative h-fit">
        <span className="text-clamp-lg font-bold">Project</span>
        <div className="flex flex-col gap-contant">
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

          <CardBox
            className="relative overflow-hidden aspect-video hidden md:block"
            highlight={false}
          >
            <div className="absolute top-10 left-0 w-full flex items-center justify-center">
              <ImageCommon
                src="/images/project/rfp/icon.png"
                objectFit="contain"
                containerClassName="w-full h-[8vw]"
              ></ImageCommon>
            </div>
            <motion.div
              ref={ref}
              initial={{ y: 200, scale: 1.5 }}
              animate={isInView ? { y: 0, scale: 1 } : undefined}
              transition={{ ease: "anticipate", duration: 3 }}
            >
              <PhoneScreen layout="ipad" mode="landscape" className="scale-90">
                <div className="relative w-full h-full pl-3">
                  <ImageCommon src="/images/project/rfp/home.png"></ImageCommon>
                </div>
              </PhoneScreen>
            </motion.div>
          </CardBox>
          <ProjectBox
            reverse
            layout="macbook"
            screenContant={
              <div className="relative w-full h-full p-[0.5%]">
                <ImageCommon src="/images/project/rfp/award.png"></ImageCommon>
              </div>
            }
          >
            <Gaysornurbanresort></Gaysornurbanresort>
          </ProjectBox>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-contant">
            <CardBox className="!p-0 relative aspect-square" highlight={false}>
              <div className="absolute w-full h-full">
                <ImageCommon
                  src="/images/project/l4t/L4T.png"
                  containerClassName="w-full h-full"
                ></ImageCommon>
              </div>
            </CardBox>
            <div className="flex flex-col gap-contant h-full">
              <Gaysornurbanresort></Gaysornurbanresort>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
