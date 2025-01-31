import React, { useState } from "react";
import ImageCommon from "../image";
import VideoCommon from "../video";
import { BaseOptions } from "vm";

interface ImageBoxProps {
  srcImage?: string;
  srcVideo?: string;
  className?: string;
  children?: React.ReactNode;
  onVideoEnd?: () => void;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  srcImage,
  srcVideo,
  className = "h-[400px] lg:h-[600px]",
  children,
  onVideoEnd,
}) => {
  const [onEnd, setEnd] = useState<boolean>(false);

  const onEnded = () => {
    setEnd(true);
    onVideoEnd?.();
  };

  return (
    <>
      <div
        className={`relative w-full ${className} overflow-hidden rounded-layout transition-all duration-1000`}
      >
        <div className="absolute top-0 left-0 bottom-0 bg-slate-200 w-full">
          <ImageCommon
            src={srcImage}
            objectFit="cover"
            className="h-full"
          ></ImageCommon>
        </div>

        {srcVideo && (
          <div className="absolute top-0 left-0 bottom-0 w-full h-full">
            <VideoCommon
              onEnded={onEnded}
              src={srcVideo}
              className={`w-full h-full object-cover ${
                onEnd ? "opacity-0" : "opacity-100"
              } transition-all duration-1000`}
              loop={false}
              autoPlay
            ></VideoCommon>
          </div>
        )}

        {children && (
          <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <div>{children}</div>
          </div>
        )}

        {/* <div
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
        </div> */}
      </div>
    </>
  );
};

export default ImageBox;
