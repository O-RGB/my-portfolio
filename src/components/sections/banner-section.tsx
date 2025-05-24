import React, { useEffect, useRef, useState } from "react";
import AnimeCommon from "../common/anime/anime";
import ImageBox from "../common/banner/image-box";
import { images } from "@/config/value";
import { videoPaths } from "@/stores/video-sotre";
import { motion } from "framer-motion";

interface BannerSectionProps {}

const BannerSection: React.FC<BannerSectionProps> = ({}) => {
  const [onVideoEnd, setVideoEnd] = useState<boolean>(false);

  const eleTextBase =
    "text-clamp-lg font-bold text-white max-h-[120px] w-fit ease-in-out overflow-hidden text-nowrap";
  const eleTextHeight = "min-h-[60px] h-[8vw]";
  const eleTextlimitHeight = "min-h-[0px] h-[0vw]";

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth * 0.17);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <ImageBox
      srcImage={images.banners.images.aBanner}
      srcVideo={videoPaths["b-banner"]}
      onVideoEnd={() => {
        setVideoEnd?.(true);
      }}
    >
      <div className="flex gap-6 relative w-full">
        <motion.div
          initial={{ opacity: 1, y: 0, x: 0 }}
          animate={onVideoEnd ? { opacity: 1, y: 0, x: width } : {}}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 1.5,
            delay: onVideoEnd ? 1.7 : 0,
          }}
          layout
          className="hidden md:block"
        >
          <div
            className={`${eleTextBase} ${
              onVideoEnd ? eleTextHeight : eleTextlimitHeight
            } duration-[1500ms]`}
          >
            I'm
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 0, x: 0 }}
          animate={onVideoEnd ? { opacity: 1, y: 0, x: width - 5 } : {}}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 1.5,
            delay: onVideoEnd ? 1.5 : 0,
          }}
          layout
        >
          <div
            className={`${eleTextBase} ${
              onVideoEnd ? eleTextHeight : eleTextlimitHeight
            } duration-[1500ms] delay-150`}
          >
            Phichayoot
          </div>
        </motion.div>
        <div className="-bottom-12 md:-bottom-[7vw] right-0 absolute flex gap-[2vw] md:gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={onVideoEnd ? { opacity: 1, y: 0, x: width } : {}}
            transition={{
              ease: [0.65, 0, 0.35, 1],
              duration: 1.5,
              delay: onVideoEnd ? 1.8 : 0,
            }}
          >
            <div
              className={`text-clamp-sm text-white font-bold ${
                onVideoEnd ? eleTextHeight : eleTextlimitHeight
              } duration-[1500ms]`}
            >
              Happy dev,
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0, x: 0 }}
            animate={onVideoEnd ? { opacity: 1, y: 0, x: width - 5 } : {}}
            transition={{
              ease: [0.65, 0, 0.35, 1],
              duration: 1.5,
              delay: onVideoEnd ? 1.7 : 0,
            }}
          >
            <div
              className={`text-clamp-sm text-white font-bold ${
                onVideoEnd ? eleTextHeight : eleTextlimitHeight
              } duration-[1500ms]`}
            >
              happy code
            </div>
          </motion.div>
        </div>
      </div>
      ​
    </ImageBox>
  );
};

export default BannerSection;
