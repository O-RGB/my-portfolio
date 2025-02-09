import CardBox from "@/components/common/card";
import ImageCommon from "@/components/common/image";
import PhoneScreen from "@/components/common/phone-screen";
import VideoCommon from "@/components/common/video";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface NextKaraokeProps {}

const NextKaraoke: React.FC<NextKaraokeProps> = ({}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  return (
    <>
      <CardBox
        className="card-limit-height relative flex items-center justify-center"
        highlight={false}
      >
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : undefined}
          transition={{ ease: "easeInOut", duration: 2 }}
          className="w-[65vw] md:w-[40vw] xl:w-[550px] h-fit"
        >
          <PhoneScreen layout={"ipad"} mode="landscape">
            <VideoCommon
              loop
              src={"/images/project/karaoke/karaoke-ipad-screen.mp4"}
              className="w-full h-full p-0.5"
              autoPlay
            ></VideoCommon>
          </PhoneScreen>
        </motion.div>
        <div
          className={`absolute 
            w-[40vw]      md:w-[28vw]     xl:w-[350px] 
            bottom-[15vw] md:bottom-[8vw] xl:bottom-[100px] 
            -right-[2vw]  md:right-[15vw] xl:right-48  
            z-20  h-fit`}
        >
          <motion.div
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : undefined}
            transition={{ ease: "easeInOut", duration: 2 }}
          >
            <PhoneScreen layout={"iphone"}>
              <VideoCommon
                loop
                src={"/images/project/karaoke/karaoke-iphone-remote.mp4"}
                className=" w-full h-full p-[1vw] md:p-2 pt-[3.5vw] md:pt-8 scale-[1.05] bg-[#64758c]"
                autoPlay
              ></VideoCommon>
            </PhoneScreen>
          </motion.div>
        </div>
      </CardBox>
    </>
  );
};

export default NextKaraoke;
