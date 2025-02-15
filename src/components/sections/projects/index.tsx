import React, { useRef } from "react";
import ProjectBox from "../../layout/project-box";
import VideoCommon from "../../common/video";
import ImageCommon from "@/components/common/image";
import CardBox from "@/components/common/card";
import PhoneScreen from "@/components/common/phone-screen";
import { motion, useInView } from "framer-motion";
import Land4ThaiScreen from "./land-4-thai";
import NextKaraoke from "./karaoke";
import Gaysornurbanresort from "./gaysorn";
import RfpProject from "./rfp";
import Land4ThaiHeader from "./land-4-thai/header";
import { images } from "@/config/value";
import useVideoStore from "@/stores/video-sotre";
import AnimatedCard from "@/components/common/anime/anime-card";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const videos = useVideoStore((state) => state.videos);
  // const ref = useRef(null);
  // const isInView = useInView(ref, { amount: "some" });
  return (
    <>
      <div className="flex flex-col gap-contant">
        <span className="text-clamp-lg font-bold">Project</span>
        <div className="flex flex-col gap-contant">
          <div className="card-limit-height ">
            <ProjectBox
              layout="iphone"
              screenContant={
                <div className="relative w-full h-full ">
                  <VideoCommon
                    src={videos["gaysorn-preview"]} //images.projects.gaysorn.videos.preview
                    autoPlay
                    loop
                  ></VideoCommon>
                </div>
              }
            >
              <Gaysornurbanresort></Gaysornurbanresort>
            </ProjectBox>
          </div>
          <div>
            <CardBox
              className="relative overflow-hidden h-[45vw] xl:h-[600px] hidden md:block"
              highlight={false}
            >
              <div className="absolute top-12 left-0 right-0 flex items-center justify-center z-10 ">
                <div className="w-[600px] h-[150px] ">
                  <ImageCommon
                    src={images.projects.rfp.images.icon}
                    objectFit="contain"
                    containerClassName="w-full h-full"
                  ></ImageCommon>
                </div>
              </div>
              {/* <motion.div
                className="relative z-20"
                ref={ref}
                initial={{ y: 200, scale: 1.5 }}
                animate={isInView ? { y: 0, scale: 1 } : undefined}
                transition={{ ease: "anticipate", duration: 3 }}
              > */}
              <AnimatedCard
                className="relative z-20"
                initial={{ y: 200, scale: 1.5 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ ease: "anticipate", duration: 3 }}
              >
                <PhoneScreen
                  layout="ipad"
                  mode="landscape"
                  className="scale-90"
                >
                  <div className="relative w-full h-full pl-3 bg-white">
                    <ImageCommon
                      src={images.projects.rfp.images.homeScreen}
                    ></ImageCommon>
                  </div>
                </PhoneScreen>
              </AnimatedCard>
              {/* </motion.div> */}
            </CardBox>
          </div>
          <div>
            <ProjectBox
              reverse
              layout="macbook"
              screenContant={
                <div className="relative w-full h-full p-[0.5%]">
                  <ImageCommon
                    src={images.projects.rfp.images.awardScreen}
                  ></ImageCommon>
                </div>
              }
            >
              <RfpProject></RfpProject>
            </ProjectBox>
          </div>
          <div>
            <Land4ThaiHeader></Land4ThaiHeader>
          </div>
          <div>
            <Land4ThaiScreen></Land4ThaiScreen>
          </div>
          <div>
            <NextKaraoke></NextKaraoke>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
