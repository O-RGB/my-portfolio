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
        <div className="break-all">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          nobis, exercitationem odio voluptate modi veniam quis dolor labore!
          Velit incidunt molestias ipsum atque laboriosam aspernatur quo libero
          iusto, optio temporibus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo nam alias vero ex, non dolore ducimus placeat at
          ea tempora voluptatum neque delectus quos dolor repellendus sint iste
          odit. Labore! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Mollitia nobis, exercitationem odio voluptate modi veniam quis
          dolor labore! Velit incidunt molestias ipsum atque laboriosam
          aspernatur quo libero iusto, optio temporibus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quo nam alias vero ex, non dolore
          ducimus placeat at ea tempora voluptatum neque delectus quos dolor
          repellendus sint iste odit. Labore! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Mollitia nobis, exercitationem odio
          voluptate modi veniam quis dolor labore! Velit incidunt molestias
          ipsum atque laboriosam aspernatur quo libero iusto, optio temporibus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam alias
          vero ex, non dolore ducimus placeat at ea tempora voluptatum neque
          delectus quos dolor repellendus sint iste odit. Labore! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Mollitia nobis,
          exercitationem odio voluptate modi veniam quis dolor labore! Velit
          incidunt molestias ipsum atque laboriosam aspernatur quo libero iusto,
          optio temporibus? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo nam alias vero ex, non dolore ducimus placeat at ea tempora
          voluptatum neque delectus quos dolor repellendus sint iste odit.
          Labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Mollitia nobis, exercitationem odio voluptate modi veniam quis dolor
          labore! Velit incidunt molestias ipsum atque laboriosam aspernatur quo
          libero iusto, optio temporibus? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo nam alias vero ex, non dolore ducimus placeat at
          ea tempora voluptatum neque delectus quos dolor repellendus sint iste
          odit. Labore! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Mollitia nobis, exercitationem odio voluptate modi veniam quis
          dolor labore! Velit incidunt molestias ipsum atque laboriosam
          aspernatur quo libero iusto, optio temporibus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quo nam alias vero ex, non dolore
          ducimus placeat at ea tempora voluptatum neque delectus quos dolor
          repellendus sint iste odit. Labore! 123123123
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
                    animate: { x: "33%", y: 0, opacity: 1, delay: 0.3 },
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  quas, cumque itaque sint Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid aperiam et ut quaerat,
                  quod, recusandae illo molestias cumque officia labore, rerum
                  dignissimos eaque optio blanditiis debitis dolorum excepturi
                  incidunt veritatis.
                </span>
              </div>
              <div>
                <ButtonCommon
                  variant="transparent"
                  label="See More"
                  onClick={() => {
                    setOpen(true);
                  }}
                ></ButtonCommon>
              </div>
            </CardBox>
            <div className="col-span-1 row-span-1 h-full w-full">
              <ImageBox
                className="w-full h-[300px] sm:h-full"
                srcImage="images/IMG_6943.JPG"
              ></ImageBox>
            </div>
          </div>
        </div>
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
