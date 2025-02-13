import React from "react";
import AnimeCommon from "../common/anime/anime";
import ImageBox from "../common/banner/image-box";
import { images } from "@/config/value";
import useVideoStore from "@/stores/video-sotre";

interface BannerSectionProps {
  videoEnd?: boolean;
  onVideoEnd?: (is: boolean) => void;
  videoSrc?: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  videoEnd,
  onVideoEnd,
  videoSrc,
}) => {
  const videos = useVideoStore((state) => state.videos);
  return (
    <ImageBox
      srcImage={images.banners.images.aBanner}
      srcVideo={videos["b-banner"]}
      onVideoEnd={() => {
        onVideoEnd?.(true);
      }}
    >
      <AnimeCommon
        template={
          videoEnd
            ? {
                initial: { opacity: 1, y: 0, x: 0 },
                animate: { x: "28%", y: 0, opacity: 1, delay: 0.3 },
              }
            : "topToBottom"
        }
      >
        <div
          className={`${
            videoEnd ? "text-clamp-xl" : "text-clamp-2xl"
          } font-bold text-white duration-1000 flex flex-col gap-0`}
        >
          PORTFOLIO
          <span
            className={`${
              videoEnd ? "opacity-100" : "opacity-0"
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
