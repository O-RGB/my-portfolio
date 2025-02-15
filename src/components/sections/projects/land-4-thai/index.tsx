import AnimatedCard from "@/components/common/anime/anime-card";
import CardBox from "@/components/common/card";
import CardContant from "@/components/common/card/card-contant";
import HeaderTitle from "@/components/common/contant/header-title";
import Quotes from "@/components/common/contant/quotes";
import ImageCommon from "@/components/common/image";
import PhoneScreen from "@/components/common/phone-screen";
import { images } from "@/config/value";
import React from "react";

interface Land4ThaiScreenProps {}

const Land4ThaiScreen: React.FC<Land4ThaiScreenProps> = ({}) => {
  const title = "Land4Thai Appilcation";
  const titleBottom = "แอปค้นหาที่ดินทำกินสำหรับชุมชน";

  const first =
    "ครั้งแรกที่เริ่มทำ Appilcation มือถือ โดยใช้ React Native (Expo) การพัฒนาเต็มไปด้วยความยากลำบากเพราะเป็นครั้งแรกทั้งหมดเลย และเลือกใช้ Expo เป็นตัวช่วย Deploy เพราะมีตัวช่วยมากมายและมี Libary ที่ช่วยสำหรับมือใหม่อย่างผมได้ดี";

  const appTitle = "Appilcation";
  const appDetail =
    "แอปพลิเคชันนี้ถูกพัฒนาขึ้นมาเพื่อช่วยให้ชุมชนสามารถค้นหาที่ดินที่สามารถนำมาใช้ทำการเกษตรหรือกิจกรรมอื่นๆ ได้อย่างสะดวกและรวดเร็ว โดยเป็นแอปที่ออกแบบมาเพื่อเป็นเครื่องมือในการช่วยเกษตรกรหรือผู้ที่ต้องการพื้นที่ทำการเกษตรในพื้นที่ต่างๆ สามารถเข้าถึงข้อมูลที่ดินได้จากแอปพลิเคชัน";

  const contantModal = (
    <>
      {first}
      <div className="br"></div>
      <div>
        <Quotes
          isPerson={false}
          title={appTitle}
          reference={appDetail}
        ></Quotes>
        <div className="br"></div>
      </div>
    </>
  );
  const contant = (
    <>
      {first}
      <div className="br"></div>
      <div>
        <div>
          <span className="font-bold">{appTitle} </span>
          {appDetail}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="grid md:grid-cols-2 gap-contant card-limit-height">
        <CardBox className="!p-0 h-full aspect-square md:aspect-auto flex items-center justify-center">
          <div className="flex w-full h-fit z-10 p-10">
            <AnimatedCard
              className="flex w-full h-fit pt-[5vw] xl:pt-[50px] -mx-[15vw] md:-m-[8vw] xl:-m-[100px]"
              start={{ y: 100 }}
            >
              <PhoneScreen layout={"iphone"}>
                <ImageCommon
                  src={images.projects.land4Thai.images.screen}
                  containerClassName="w-full h-full"
                ></ImageCommon>
              </PhoneScreen>
            </AnimatedCard>

            <AnimatedCard
              className="flex w-full h-fit pb-[5vw] xl:pb-[50px] -mx-[15vw] md:-m-[8vw] xl:-m-[100px]"
              start={{ y: -100 }}
            >
              <PhoneScreen layout={"android"}>
                <ImageCommon
                  src={images.projects.land4Thai.images.screen}
                  containerClassName="w-full h-full"
                ></ImageCommon>
              </PhoneScreen>
            </AnimatedCard>
          </div>
        </CardBox>
        <div className="flex flex-col gap-contant">
          <div className="relative grid grid-cols-3 gap-contant h-20 ">
            <AnimatedCard
              delay={0.1}
              className="w-full h-full col-span-2"
              start={{ x: 100 }}
            >
              <CardBox
                className="relative duration-300 !p-0 w-full h-full flex items-center justify-center"
                highlight={false}
              >
                <ImageCommon
                  src={images.projects.gaysorn.images.icon}
                  containerClassName="w-full h-14 p-5"
                  objectFit="contain"
                ></ImageCommon>
              </CardBox>
            </AnimatedCard>

            <AnimatedCard
              delay={0.2}
              className="w-full h-full col-span-1"
              start={{ y: 100 }}
            >
              <CardBox
                className="relative w-full h-full !p-4 flex items-center justify-center gap-2"
                highlight={false}
              >
                <ImageCommon
                  src={images.skills.frontend.images.nextjs}
                  containerClassName="w-14 h-14 hidden dark:block"
                  objectFit="contain"
                ></ImageCommon>
                <ImageCommon
                  src={images.skills.frontend.images.nextjsDark}
                  containerClassName="w-14 h-14 block dark:hidden"
                  objectFit="contain"
                ></ImageCommon>
                <ImageCommon
                  src={images.skills.backend.images.php}
                  containerClassName="w-14 h-14"
                  objectFit="contain"
                ></ImageCommon>
              </CardBox>
            </AnimatedCard>
          </div>
          <AnimatedCard className="w-full h-full col-span-2" start={{ x: 100 }}>
            <CardBox className="h-full" highlight={false}>
              <CardContant
                tags={["React Native"]}
                moreDetail={
                  <>
                    <HeaderTitle
                      className="pb-8"
                      title={title}
                      detail={titleBottom}
                    ></HeaderTitle>
                    {contantModal}
                  </>
                }
                title={`${title} ${titleBottom}`}
                description={contant}
              ></CardContant>
            </CardBox>
          </AnimatedCard>
        </div>
      </div>
    </>
  );
};

export default Land4ThaiScreen;
