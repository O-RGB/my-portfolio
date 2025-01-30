"use client";
import React, { useEffect, useState } from "react";
import ButtonCommon from "../common/button";
import CardBox from "../common/card";
import ImageCommon from "../common/image";
import ContainerLayout from "../layout/container";
import AnimeCommon from "../common/anime";
import VideoCommon from "../common/video";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [hide, setHide] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 6000);
  }, []);
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
