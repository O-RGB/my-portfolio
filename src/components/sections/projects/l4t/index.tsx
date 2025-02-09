import CardBox from "@/components/common/card";
import CardContant from "@/components/common/card/card-contant";
import ImageCommon from "@/components/common/image";
import PhoneScreen from "@/components/common/phone-screen";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface Land4ThaiScreenProps {}

const Land4ThaiScreen: React.FC<Land4ThaiScreenProps> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  return (
    <>
      <div className="relative h-32 bg-[#207c04] rounded-layout p-3 overflow-hidden hidden md:block">
        <div className="absolute z-10 w-56 h-56 left-0 top-0">
          <ImageCommon
            src="/images/project/l4t/L4T.png"
            objectFit="contain"
            className="rotate-90 "
          ></ImageCommon>
        </div>
        <div className="absolute z-10 w-56 h-56 right-0 top-0">
          <ImageCommon
            src="/images/project/l4t/L4T.png"
            objectFit="contain"
            className="-rotate-90 "
          ></ImageCommon>
        </div>

        <ImageCommon
          src="/images/project/l4t/l4i-logo.png"
          objectFit="contain"
          className="w-full"
          containerClassName="relative z-20"
        ></ImageCommon>
      </div>
      <div className="grid md:grid-cols-2 gap-contant md:aspect-video">
        <CardBox className="!p-0 h-full aspect-square md:aspect-auto flex items-center justify-center">
          <div className="flex w-full h-fit z-10 p-10">
            <motion.div
              ref={ref}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : undefined}
              transition={{ ease: "easeInOut", duration: 2 }}
              className="flex w-full h-fit pt-[5vw] xl:pt-[50px] -mx-[15vw] md:-m-[8vw] xl:-m-[100px]"
            >
              <PhoneScreen layout={"iphone"}>
                <ImageCommon
                  src={"/images/project/l4t/screen.png"}
                  containerClassName="w-full h-full"
                ></ImageCommon>
              </PhoneScreen>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : undefined}
              transition={{ ease: "easeInOut", duration: 2 }}
              className="flex w-full h-fit pb-[5vw] xl:pb-[50px] -mx-[15vw] md:-m-[8vw] xl:-m-[100px]"
            >
              <PhoneScreen layout={"android"}>
                <ImageCommon
                  src={"/images/project/l4t/screen.png"}
                  containerClassName="w-full h-full"
                ></ImageCommon>
              </PhoneScreen>
            </motion.div>
          </div>
        </CardBox>
        <div className="flex flex-col gap-contant">
          <div
            ref={ref}
            className="relative grid grid-cols-3 gap-contant h-20 md:h-28"
          >
            <motion.div
              className="w-full h-full col-span-2"
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : undefined}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 2, delay: 0.1 }}
            >
              <CardBox
                className="relative duration-300 !p-0 w-full h-full flex items-center justify-center"
                highlight={false}
              >
                <ImageCommon
                  src="/images/project/gur/icon.png"
                  containerClassName="w-full h-14 p-4 md:p-6"
                  objectFit="contain"
                ></ImageCommon>
              </CardBox>
            </motion.div>
            <motion.div
              className="w-full h-full col-span-1"
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : undefined}
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 2, delay: 0.2 }}
            >
              <CardBox
                className="relative w-full h-full !p-4 flex items-center justify-center gap-2"
                highlight={false}
              >
                <ImageCommon
                  src="/images/skills/frontend/nextjs.png"
                  containerClassName="w-14 h-14 hidden dark:block"
                  objectFit="contain"
                ></ImageCommon>
                <ImageCommon
                  src="/images/skills/frontend/nextjs-dark.png"
                  containerClassName="w-14 h-14 block dark:hidden"
                  objectFit="contain"
                ></ImageCommon>
                <ImageCommon
                  src="/images/skills/backend/php.png"
                  containerClassName="w-14 h-14"
                  objectFit="contain"
                ></ImageCommon>
              </CardBox>
            </motion.div>
          </div>
          <motion.div
            className="w-full h-full col-span-2"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : undefined}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 2 }}
          >
            <CardBox className="h-full" highlight={false}>
              <CardContant
                tags={["test", "2020"]}
                moreDetail={<>test</>}
                title={
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore quis eum architecto sunt, ipsa cumque assumenda
                    dolorum corporis autem illum asperiores suscipit earum
                    nulla, quo beatae quod perspiciatis, nostrum atque.
                  </>
                }
                description={
                  <>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus qui corrupti aliquid, quae illo blanditiis, natus,
                    maxime vero fugit reiciendis mollitia perspiciatis
                    laboriosam. Suscipit, quis quasi! Quasi ex deserunt
                    repellat. lines Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ipsum quisquam impedit sequi? Dolorum
                    deleniti aliquam exercitationem ullam vitae
                  </>
                }
              ></CardContant>
            </CardBox>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Land4ThaiScreen;
