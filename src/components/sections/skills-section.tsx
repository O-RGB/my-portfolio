import React, { useRef, useState } from "react";
import SkillsBox from "../layout/skills-box";
import ImageCommon from "../common/image";
import { motion, useInView } from "framer-motion";
import { images } from "@/config/value";
import useVideoStore, { videoPaths } from "@/stores/video-sotre";
import AnimatedCard from "../common/anime/anime-card";

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  // const videos = useVideoStore((state) => state.videoUrls);
  const duration = 3;
  const space = 200;
  // const ref = useRef(null);
  // const isInView = useInView(ref, { amount: "some" });
  const Ai = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ x: -space, opacity: 0 }}
    //   animate={isInView ? { x: 0, opacity: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration }}
    // >
    <AnimatedCard
      className="w-full h-full"
      start={{ x: -space }}
      duration={duration}
    >
      <SkillsBox
        title="เรียนรู้การใช้ AI"
        contant={
          <div className="flex justify-end items-end h-full ">
            <div className="flex items-center justify-center gap-4 ">
              <div className="w-10 lg:h-14 h-10 lg:w-14">
                <ImageCommon
                  src={images.skills.ai.images.claude}
                  className="relative w-10 lg:w-14 h-10 lg:h-14"
                  objectFit={"contain"}
                ></ImageCommon>
              </div>
              <div className="w-10 lg:h-14 h-10 lg:w-14">
                <ImageCommon
                  src={images.skills.ai.images.chatGPT}
                  className="w-full h-full"
                  objectFit={"contain"}
                ></ImageCommon>
              </div>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );
  const Frontend = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ x: -space, opacity: 0 }}
    //   animate={isInView ? { x: 0, opacity: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration, delay: 0.3 }}
    // >
    <AnimatedCard
      className="w-full h-full"
      start={{ x: -space }}
      duration={duration}
      delay={0.3}
    >
      <SkillsBox
        bg={videoPaths["skills-frontend"]} //images.skills.frontend.videos.skillsFrontend
        isVideo
        title="Frontend"
        contant={
          <div className="flex flex-col justify-between h-full gap-4">
            <div>
              <span className="text-3xl md:text-6xl font-bold">NextJs</span>{" "}
              <br />
              <span>ประสบการณ์ 2 ปี</span>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center gap-1 h-14 w-9">
                <ImageCommon
                  src={images.skills.frontend.images.dnd}
                  containerClassName="w-full h-full"
                  objectFit="contain"
                ></ImageCommon>
                <span className="font-bold text-xs">DndKit</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 h-14 w-9">
                <ImageCommon
                  src={images.skills.frontend.images.gql}
                  containerClassName="w-full h-full"
                  objectFit="contain"
                ></ImageCommon>
                <span className="font-bold text-xs">GraphQL</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 h-14 w-9">
                <ImageCommon
                  src={images.skills.frontend.images.antd}
                  containerClassName="w-full h-full"
                  objectFit="contain"
                ></ImageCommon>
                <span className="font-bold text-xs">Antd</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 h-14 w-9">
                <ImageCommon
                  src={images.skills.frontend.images.zustand}
                  containerClassName="w-full h-full"
                  objectFit="contain"
                ></ImageCommon>
                <span className="font-bold text-xs">Zustand</span>
              </div>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );
  const Backend = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ x: space, opacity: 0 }}
    //   animate={isInView ? { x: 0, opacity: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration }}
    // >
    <AnimatedCard
      className="w-full h-full"
      start={{ x: space }}
      duration={duration}
    >
      <SkillsBox
        title="Backend"
        bg={videoPaths["skills-backend-bg-2"]} //images.skills.backend.videos.skillsBackendBg
        isVideo
        contant={
          <div className="flex justify-between h-full ">
            <div>
              <span className="text-3xl md:text-6xl font-bold">
                NestJs + GQL
              </span>
              <br />
              <span>ประสบการณ์ 1 ปี</span>
            </div>
            <div className="w-20 lg:w-32 h-20 lg:h-32 -mt-8 lg:-mt-4">
              <ImageCommon
                src={images.skills.backend.images.nestJs}
                className="w-20 lg:w-32 h-20 lg:h-32"
              ></ImageCommon>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );
  const Databse = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ opacity: 0, scale: 0.7 }}
    //   animate={isInView ? { opacity: 1, scale: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration, delay: 0.3 }}
    // >
    <AnimatedCard
      delay={0.3}
      duration={duration}
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <SkillsBox
        title="Database"
        contant={
          <div className="flex justify-between h-full">
            <div>
              <span className="text-3xl md:text-5xl font-bold">
                MySQL, <br /> Sequelize
              </span>
              <br />
              <span>ทำงานร่วมกับ NestJs</span>
            </div>
            <div className="w-16 h-20 -mt-8 lg:-mt-4">
              <ImageCommon
                src={images.skills.database.images.sequelize}
                className="w-16 h-20"
                objectFit={"contain"}
              ></ImageCommon>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );
  const StyleSheets = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ x: space, opacity: 0 }}
    //   animate={isInView ? { x: 0, opacity: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration, delay: 0.3 }}
    // >
    <AnimatedCard
      duration={duration}
      delay={0.3}
      className="w-full h-full"
      start={{ x: space }}
    >
      <SkillsBox
        bg={images.skills.utility.images.tailwindBG}
        contant={
          <div className="flex justify-center items-center h-full py-8 lg:py-0">
            <div className="w-full h-8">
              <ImageCommon
                src={images.skills.utility.images.tailwind}
                className="w-full h-full"
                objectFit={"contain"}
              ></ImageCommon>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );
  const Utility = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ x: -space, opacity: 0 }}
    //   animate={isInView ? { x: 0, opacity: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration, delay: 0.5 }}
    // >
    <AnimatedCard
      className="w-full h-full"
      start={{ x: -space }}
      duration={duration}
      delay={0.5}
    >
      <SkillsBox
        contant={
          <div className="flex justify-center items-center h-full p-2 gap-4 lg:gap-0">
            <div className="self-start w-16 lg:w-14 h-16 lg:h-14">
              <ImageCommon
                src={images.skills.utility.images.git}
                className="w-16 lg:w-14 h-16 lg:h-14"
                objectFit="contain"
              ></ImageCommon>
            </div>
            <div className="self-end w-16 lg:w-14 h-16 lg:h-14">
              <ImageCommon
                src={images.skills.utility.images.figma}
                className="w-16 lg:w-14 h-16 lg:h-14"
                objectFit="contain"
              ></ImageCommon>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );
  const Python = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ y: space, opacity: 0 }}
    //   animate={isInView ? { y: 0, opacity: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration, delay: 0.5 }}
    // >
    <AnimatedCard
      className="w-full h-full"
      start={{ x: space }}
      duration={duration}
      delay={0.5}
    >
      <SkillsBox
        bg={images.skills.utility.images.pythonBG}
        contant={
          <div className="flex justify-between items-center h-full ">
            <div>
              <span className="text-3xl md:text-6xl font-bold">Python</span>
              <br />
              <div className="pt-2 w-[80%]">
                สามารถใช้งานได้ในระดับพื้นฐาน, FlaskAPI, UI, FileSystem, Ai
                (พื้นฐาน)
              </div>
            </div>
            <div className="w-24 h-24">
              <ImageCommon
                src={images.skills.utility.images.python}
                className="w-24 h-24"
                objectFit="contain"
              ></ImageCommon>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );
  const PHP = (
    // <motion.div
    //   className="w-full h-full"
    //   initial={{ x: space, opacity: 0 }}
    //   animate={isInView ? { x: 0, opacity: 1 } : undefined}
    //   transition={{ ease: [0.4, 0, 0.2, 1], duration, delay: 0.5 }}
    // >
    <AnimatedCard
      className="w-full h-full"
      start={{ x: space }}
      duration={duration}
      delay={0.5}
    >
      <SkillsBox
        contant={
          <div className="flex justify-between items-center h-full ">
            <div>
              <span className="text-3xl md:text-6xl font-bold">PHP API</span>
              <br />
              <span>ผ่านมาแล้ว 2 Project</span>
            </div>
          </div>
        }
      ></SkillsBox>
    </AnimatedCard>
    // </motion.div>
  );

  return (
    <>
      <div className="flex flex-col gap-contant relative h-fit">
        <span className="text-clamp-lg font-bold">Skills</span>
        <div className="hidden lg:block">
          <div className="flex flex-col gap-contant">
            <div className="">
              <div className="grid grid-cols-3 h-full w-full gap-contant">
                <div className="col-span-1">
                  <div className="grid grid-rows-3 w-full h-full gap-contant">
                    <div className="row-span-1">{Ai}</div>
                    <div className="row-span-2">{Frontend}</div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-rows-2 w-full h-full gap-contant">
                    <div className="row-span-1">{Backend}</div>
                    <div className="row-span-1 grid grid-cols-2 gap-contant">
                      {Databse}
                      {StyleSheets}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-contant">
              <div className="col-span-1">{Utility}</div>
              <div className="col-span-3">{Python}</div>
              <div className="col-span-2">{PHP}</div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col gap-contant">
            <div className="flex gap-contant">
              <div className="w-[30%]">{Utility}</div>
              <div className="w-[70%]">{Backend}</div>
            </div>
            <div className="grid grid-cols-2 gap-contant">
              <div className="">{Frontend}</div>
              <div className="grid grid-rows-2 gap-contant">
                <div>{Ai}</div>
                <div>{StyleSheets}</div>
              </div>
            </div>
            <div className="flex gap-contant">
              <div className="w-[70%]">{Databse}</div>
              <div className="w-[30%]">{PHP}</div>
            </div>
            <div>{Python}</div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex flex-col gap-contant">
            {Ai}
            {Backend}
            {Databse}
            {Frontend}
            {Utility}
            {StyleSheets}
            {PHP}
            {Python}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
