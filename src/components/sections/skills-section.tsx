import React from "react";
import ImageBox from "../common/banner/image-box";

interface SkillsSectionProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-contant relative">
        <span className="text-clamp-lg font-bold">Skills</span>
        <div className="grid grid-rows-3 gap-contant hidden md:block">
          <div className="rows-span-2 h-[400px]">
            <div className="grid grid-cols-3 h-full w-full  gap-contant">
              <div className="col-span-1">
                <div className="grid grid-rows-3 w-full h-full  gap-contant">
                  <div className="row-span-1">
                    <ImageBox
                      className=" w-full h-full"
                      srcImage="/images/about-me/me.jpg"
                    ></ImageBox>
                  </div>
                  <div className="row-span-2">
                    <ImageBox
                      className=" w-full h-full"
                      srcImage="/images/about-me/me.jpg"
                    ></ImageBox>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-rows-2 w-full h-full  gap-contant">
                  <div className="row-span-1">
                    <ImageBox
                      className=" w-full h-full"
                      srcImage="/images/about-me/me.jpg"
                    ></ImageBox>
                  </div>
                  <div className="row-span-1 grid grid-cols-2 gap-contant">
                    <ImageBox
                      className=" w-full h-full"
                      srcImage="/images/about-me/me.jpg"
                    ></ImageBox>
                    <ImageBox
                      className=" w-full h-full"
                      srcImage="/images/about-me/me.jpg"
                    ></ImageBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rows-span-1 grid grid-cols-6  gap-contant h-[150px]">
            <div className="col-span-1">
              <ImageBox
                className=" w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
            <div className="col-span-3">
              <ImageBox
                className=" w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
            <div className="col-span-2">
              <ImageBox
                className=" w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-contant block md:hidden">
          <div className="grid grid-cols-2 gap-contant h-[200px]">
            <div className="w-full h-full">
              <ImageBox
                className="w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
            <div className="w-full h-full">
              <ImageBox
                className="w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
          </div>
          <div className="h-[300px]">
            <ImageBox
              className=" w-full h-full"
              srcImage="/images/about-me/me.jpg"
            ></ImageBox>
          </div>
          <div className="grid grid-cols-2 gap-contant h-[300px]">
            <div className="grid grid-rows-2 gap-contant  ">
              <div className=" w-full h-full">
                <ImageBox
                  className=" w-full h-full"
                  srcImage="/images/about-me/me.jpg"
                ></ImageBox>
              </div>

              <div className=" w-full h-full">
                <ImageBox
                  className=" w-full h-full"
                  srcImage="/images/about-me/me.jpg"
                ></ImageBox>
              </div>
            </div>
            <div>
              <ImageBox
                className=" w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-contant h-[200px]">
            <div className=" w-full h-full">
              <ImageBox
                className=" w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
            <div className=" w-full h-full">
              <ImageBox
                className=" w-full h-full"
                srcImage="/images/about-me/me.jpg"
              ></ImageBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
