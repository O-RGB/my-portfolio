import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import ImageBox from "../banner/image-box";

import React, { isValidElement, JSX } from "react";

interface GalleryImagesProps {
  images?: (string | JSX.Element)[];
}

const GalleryImages: React.FC<GalleryImagesProps> = ({ images = [] }) => {
  return (
    <Swiper
      effect="creative"
      speed={1000}
      loop
      modules={[EffectCreative, Pagination, Autoplay]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-100%", 0, -100],
          scale: 0.9,
        },
        next: {
          translate: ["100%", 0, -100],
          scale: 0.9,
        },
      }}
      className=" [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-white"
    >
      {images.map((img, index) =>
        isValidElement(img) ? (
          <SwiperSlide key={`node-i-${index}`}>{img}</SwiperSlide>
        ) : (
          <SwiperSlide key={index}>
            <ImageBox
              className="w-full h-[340px]"
              srcImage={img as string}
            ></ImageBox>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default GalleryImages;
