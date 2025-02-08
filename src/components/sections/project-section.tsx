import React from "react";
import VideoCommon from "../common/video";
import CardBox from "../common/card";
import ImageCommon from "../common/image";
import Tag from "../common/tags";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-contant relative h-fit">
        <span className="text-clamp-lg font-bold">Project</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-contant h-full">
          <CardBox className="w-full !p-0 overflow-hidden aspect-square md:aspect-auto">
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
          <div className="rounded-layout overflow-hidden">
            <div className="flex flex-col gap-contant">
              <div className="grid grid-cols-3 gap-contant h-fit">
                <CardBox
                  className="relative col-span-2 duration-300 !p-0 flex items-center justify-center"
                  highlight={false}
                >
                  <ImageCommon
                    src="/images/project/gur/icon.png"
                    className="w-full h-14 p-2"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
                <CardBox
                  className="relative col-span-1 w-full !p-4 flex items-center justify-center gap-2"
                  highlight={false}
                >
                  <ImageCommon
                    src="/images/skills/frontend/nextjs.png"
                    className="w-14 h-14 hidden dark:block"
                    objectFit="contain"
                  ></ImageCommon>
                  <ImageCommon
                    src="/images/skills/frontend/nextjs-dark.png"
                    className="w-14 h-14 block dark:hidden"
                    objectFit="contain"
                  ></ImageCommon>
                  <ImageCommon
                    src="/images/skills/backend/php.png"
                    className="w-14 h-14"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
              </div>
              <CardBox
                moreDetail
                className="md:h-[400px] flex flex-col gap-4"
                highlight={false}
              >
                <div className="flex gap-2">
                  <Tag label="2023"></Tag>
                  <Tag label="Google Sheets"></Tag>
                  <Tag label="Google App Script"></Tag>
                </div>
                <div className="text-2xl">Lorem ipsum dolor sit,</div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                delectus repudiandae iusto pariatur modi suscipit. Quo aliquam
                nihil repellat deleniti, recusandae molestiae qui, temporibus
                blanditiis nisi accusamus, repudiandae dolor voluptate!...
              </CardBox>
              {/* <div className="grid grid-cols-3 gap-contant">
                <CardBox className="relative col-span-1 w-full">
                  <ImageCommon
                    src="/images/skills/backend/php.png"
                    className="w-full h-14"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
                <CardBox className="relative col-span-2  duration-300 !p-4">
                  <ImageCommon
                    src="/images/skills/backend/phpmyadmin.png"
                    className="w-full h-14 scale-125"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
              </div>
              <div className="grid grid-cols-2 gap-contant">
                <CardBox className="relative col-span-1 w-full">
                  <ImageCommon
                    src="/images/skills/backend/google-sheets.png"
                    className="w-full h-14"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
                <CardBox className="relative col-span-1  duration-300 !p-4">
                  <ImageCommon
                    src="/images/skills/backend/phpmyadmin.png"
                    className="w-full h-14"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
              </div>
              <div className="grid grid-cols-2 gap-contant">
                <CardBox className="relative col-span-1 w-full">
                  <ImageCommon
                    src="/images/skills/backend/google-sheets.png"
                    className="w-full h-14"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
                <CardBox className="relative col-span-1  duration-300 !p-4">
                  <ImageCommon
                    src="/images/skills/backend/phpmyadmin.png"
                    className="w-full h-14"
                    objectFit="contain"
                  ></ImageCommon>
                </CardBox>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
