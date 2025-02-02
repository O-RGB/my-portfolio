"use client";
import React, { useState } from "react";
import ImageCommon from "../common/image";
import ContainerLayout from "../layout/container";

import VideoCommon from "../common/video";
import ImageBox from "../common/banner/image-box";
import GapContant from "../layout/gap-contant";
import AnimeCommon from "../common/anime/anime";
import CardBox from "../common/card";
import ButtonCommon from "../common/button";
import ModalCommon from "../common/modal";
import GalleryImages from "../common/galleryimages";
import HeaderTitle from "../common/contant/header-title";
import Quotes from "../common/contant/quotes";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [hide, setHide] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ContainerLayout>
      <ModalCommon
        isOpen={open}
        // footer={false}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="break-words flex flex-col gap-4">
          <HeaderTitle
            className="pb-4"
            title="About Me"
            detail={`สวัสดีครับ ผม "ส้มโอ"`}
          ></HeaderTitle>

          <div className="flex flex-col gap-4">
            <span>
              มีประสบการณ์ในสายนี้มา 2 ปีแล้ว ส่วนใหญ่จะใช้ Next.js และ NestJS
              ในการพัฒนาเว็บไซต์ และในบางงานก็มีใช้ PHP เป็น Backend บ้าง
              และมีประสบการณ์การเขียน App ด้วย React Native
            </span>

            <ImageBox
              className="h-[200px] w-full"
              srcImage="/images/about-me/me.jpg"
            ></ImageBox>

            <Quotes
              title={`"The biggest risk is not taking any risk."`}
              reference="Mark Zuckerberg"
            ></Quotes>
            <span>
              ในด้านการทำงานผมจะเป็นคนละเอียดอ่อนในการทำงานและเขียนโค้ด
              จะเขียนโค้ดที่ Reuse
              ให้ได้มากที่สุดและคำนึงถึงทีมเมื่อมีการส่งต่อให้ทีมอ่านโค้ดและแก้ไขต่อไปได้
            </span>
            <span>
              ปัจจุบัน ผมกำลังมองหาความท้าทายใหม่ๆ ที่จะช่วยเสริมทักษะในการเป็น
              Full-Stack Developer รวมถึงการเรียนรู้เครื่องมือใหม่ๆ เช่น CI/CD
              เพื่อให้กระบวนการพัฒนาเว็บไซต์มีความสะดวกและรวดเร็วมากขึ้น
            </span>
          </div>
        </div>
      </ModalCommon>

      <GapContant>
        <ImageBox
          srcImage="images/banner/b-banner.png"
          srcVideo="images/banner/b-banner.mov"
          onVideoEnd={() => {
            setHide(true);
          }}
        >
          <AnimeCommon
            template={
              hide
                ? {
                    initial: { opacity: 1, y: 0, x: 0 },
                    animate: { x: "28%", y: 0, opacity: 1, delay: 0.3 },
                  }
                : "topToBottom"
            }
          >
            <div
              className={`${
                hide ? "text-clamp-lg" : "text-clamp-xl"
              } font-bold text-white duration-1000 flex flex-col gap-0`}
            >
              PORTFOLIO
              <span
                className={`${
                  hide ? "opacity-100" : "opacity-0"
                } duration-1000 text-lg -mt-[2.5vw] text-end`}
              >
                Phichayoot
              </span>
            </div>
          </AnimeCommon>
        </ImageBox>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="col-span-1 md:col-span-2">
            <ImageBox
              className="h-[300px] md:h-full"
              srcImage="images/IMG_6946.JPG"
            ></ImageBox>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-6 w-full h-full">
            <CardBox className="row-span-1 relative grid grid-cols-1 gap-2">
              <span className="font-bold text-2xl">About Me</span>
              <div>
                <span className="text-clamp-base line-clamp-5 leading-5">
                  สวัสดีครับ ผม "ส้มโอ" มีประสบการณ์ในสายนี้มา 2 ปีแล้ว
                  ส่วนใหญ่จะใช้ Next.js และ NestJS ในการพัฒนาเว็บไซต์
                  และในบางงานก็มีใช้ PHP เป็น Backend บ้าง
                  และมีประสบการณ์การเขียน App ด้วย React Native บ้าง
                </span>
              </div>
              <div>
                <ButtonCommon
                  variant="transparent"
                  label="อ่านเพิ่มเติม"
                  onClick={() => {
                    setOpen(true);
                  }}
                ></ButtonCommon>
              </div>
            </CardBox>
            <div className="col-span-1 row-span-1 h-full w-full">
              <GalleryImages
                images={["/images/IMG_6943.JPG", "/images/IMG_6944.JPG"]}
              ></GalleryImages>
            </div>
          </div>
        </div>
        <div></div>
      </GapContant>
    </ContainerLayout>
  );

  return (
    <>
      <ContainerLayout>
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-3xl transition-all duration-1000">
          <div className="absolute top-0 left-0 bottom-0 bg-red-500 w-full">
            <ImageCommon
              src="images/banner/b-banner.png"
              objectFit="cover"
              className="h-full"
            ></ImageCommon>
          </div>

          <div className="absolute top-0 left-0 bottom-0 w-full h-full">
            <VideoCommon
              onEnded={() => setHide(true)}
              src="images/banner/b-banner.mov"
              className={`w-full h-full object-cover ${
                hide ? "opacity-0" : "opacity-100"
              } transition-all duration-1000`}
              loop={false}
              autoPlay
            ></VideoCommon>
          </div>

          <div
            className={`top-0 absolute w-full h-full flex items-center justify-center  text-white z-50`}
          >
            <AnimeCommon>
              <div
                className={`font-bold ${
                  hide ? "text-clamp-lg" : "text-clamp-xl"
                } duration-1000`}
              >
                PORTFOLIO
              </div>
            </AnimeCommon>
          </div>
          {/* <div className="top-[50px] md:top-[70px] absolute w-full h-full flex items-center justify-center  text-white z-50 duration-1000">
            <div
              className={`font-bold ${
                hide ? "opacity-100" : "opacity-0"
              } text-clamp-lg duration-1000`}
            >
              Boonton
            </div>
          </div> */}
          {/* <div className="absolute bottom-5 left-5 z-50">
            <CardBox className="max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              ab nihil error molestiae ratione
            </CardBox>
          </div> */}
        </div>
      </ContainerLayout>
    </>
  );
};

export default Home;
