import React, { useState } from "react";
import AnimeCommon from "../common/anime/anime";
import ImageBox from "../common/banner/image-box";
import { images } from "@/config/value";
import useVideoStore from "@/stores/video-sotre";

interface BannerSectionProps {}

const BannerSection: React.FC<BannerSectionProps> = ({}) => {
  const [onVideoEnd, setVideoEnd] = useState<boolean>(false);
  const videos = useVideoStore((state) => state.videos);
  return (
    <ImageBox
      srcImage={images.banners.images.aBanner}
      srcVideo={videos["b-banner"]}
      onVideoEnd={() => {
        setVideoEnd?.(true);
      }}
    >
      <AnimeCommon
        template={
          onVideoEnd
            ? {
                initial: { opacity: 1, y: 0, x: 0 },
                animate: { x: "28%", y: 0, opacity: 1, delay: 0.3 },
              }
            : "topToBottom"
        }
      >
        <div
          className={`${
            onVideoEnd ? "text-clamp-xl" : "text-clamp-2xl"
          } font-bold text-white duration-1000 flex flex-col gap-0`}
        >
          PORTFOLIO
          <span
            className={`${
              onVideoEnd ? "opacity-100" : "opacity-0"
            } duration-1000 text-lg -mt-[2.5vw] text-end`}
          >
            Phichayoot
          </span>
        </div>
      </AnimeCommon>
    </ImageBox>
  );
};

export default BannerSection;
