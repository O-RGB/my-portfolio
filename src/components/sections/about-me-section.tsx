import React from "react";
import ImageBox from "../common/banner/image-box";
import CardBox from "../common/card";
import GalleryImages from "../common/galleryimages";
import CardContant from "../common/card/card-contant";
import AboutMeModal from "../modals/about-me-modal";

interface AboutMeSectionProps {
  setReadMore?: (open: boolean) => void;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ setReadMore }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-contant">
        <div className="col-span-1 md:col-span-2 hidden md:block ">
          <ImageBox
            className="h-[300px] md:h-full"
            srcImage={"/images/about-me/about-me-3.jpg"}
          ></ImageBox>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-contant w-full h-full">
          <CardBox className="row-span-1 relative grid grid-cols-1 gap-2">
            {/* <span className="font-bold text-2xl">About Me</span>
            <div>
              <span className="line-clamp-5 ">
                สวัสดีครับ ผม "ส้มโอ" มีประสบการณ์ในสายนี้มา 2 ปีแล้ว
                ส่วนใหญ่จะใช้ Next.js และ NestJS ในการพัฒนาเว็บไซต์
                และในบางงานก็มีใช้ PHP เป็น Backend บ้าง และมีประสบการณ์การเขียน
                App ด้วย React Native บ้าง
              </span>
            </div>
            <div>
              <ButtonCommon
                variant="transparent"
                label="อ่านเพิ่มเติม"
                onClick={() => {
                  setReadMore?.(true);
                }}
              ></ButtonCommon>
            </div> */}

            <CardContant
              title="About Me"
              description={`สวัสดีครับ ผม "ส้มโอ" มีประสบการณ์ในสายนี้มา 2 ปีแล้ว
                ส่วนใหญ่จะใช้ Next.js และ NestJS ในการพัฒนาเว็บไซต์
                และในบางงานก็มีใช้ PHP เป็น Backend บ้าง และมีประสบการณ์การเขียน
                App ด้วย React Native บ้าง`}
              moreDetail={<AboutMeModal />}
              tags={["Frontend", "Design"]}
            ></CardContant>
          </CardBox>
          <div className="col-span-1 row-span-1 h-full w-full hidden md:block">
            <GalleryImages
              images={[
                "/images/about-me/about-me-1.jpg",
                "/images/about-me/about-me-2.jpg",
              ]}
            ></GalleryImages>
          </div>
          <div className="col-span-1 row-span-1 h-full w-full block md:hidden">
            <GalleryImages
              images={[
                "/images/about-me/about-me-3.jpg",
                "/images/about-me/about-me-1.jpg",
                "/images/about-me/about-me-2.jpg",
              ]}
            ></GalleryImages>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
