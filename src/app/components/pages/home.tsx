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

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [hide, setHide] = useState<boolean>(false);

  return (
    <ContainerLayout>
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
                    animate: { x: "12vw", y: 0, opacity: 1, delay: 0.3 },
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
                } duration-1000 text-lg -mt-4 text-end`}
              >
                Phichayoot
              </span>
            </div>
          </AnimeCommon>
        </ImageBox>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-layout">
          <ImageBox
            className="h-[400px] lg:h-[500px]"
            srcImage="images/IMG_6946.JPG"
          ></ImageBox>
          <CardBox>
            <span className="font-bold text-2xl">About Me</span>
            <div>
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                quas, cumque itaque sint
              </span>
            </div>
            <div>
              <span className="text-3xl">Lorem ipsum dolor sit</span>
            </div>
          </CardBox>
        </div>
      </GapContant>
    </ContainerLayout>
  );

  return (
    <>
      <ContainerLayout>
        <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-3xl transition-all duration-1000">
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
          {/* <div className="top-[50px] lg:top-[70px] absolute w-full h-full flex items-center justify-center  text-white z-50 duration-1000">
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
