import React, { useRef } from "react";
import CardBox from "../common/card";
import PhoneScreen from "../common/phone-screen";
import { ApplePosition, AppleSereenType } from "@/types/general.type";
import { motion, useInView } from "framer-motion";
import AnimatedCard from "../common/anime/anime-card";

interface ProjectBoxProps {
  children?: React.ReactNode;
  layout: AppleSereenType;
  screenContant?: React.ReactNode;
  mode?: ApplePosition;
  reverse?: boolean;
  className?: string;
  phoneClassName?: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  children,
  layout,
  screenContant,
  mode,
  reverse = false,
  className,
  phoneClassName,
}) => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { amount: "some" });

  return (
    <div
      className={`${
        children ? "grid grid-cols-1 md:grid-cols-2 gap-contant" : ""
      } ${className} card-limit-height`}
    >
      {/* <motion.div
        className={`${
          children
            ? reverse
              ? "order-first md:order-last"
              : "order-first"
            : ""
        }`}
        ref={ref}
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : undefined}
        transition={{ ease: [0.4, 0, 0.2, 1], duration: 2, delay: 0.1 }}
      > */}
      <AnimatedCard
        delay={0.1}
        start={{ x: reverse ? 100 : -100 }}
        className={`${
          children
            ? reverse
              ? "order-first md:order-last"
              : "order-first"
            : ""
        }`}
         
      >
        <CardBox className="h-full flex items-center justify-center">
          <div className="w-full">
            <PhoneScreen mode={mode} layout={layout}>
              {screenContant}
            </PhoneScreen>
          </div>
        </CardBox>
      </AnimatedCard>
      {/* </motion.div> */}

      {children && (
        <div
          className={`rounded-layout ${
            !reverse ? "order-last" : "order-last md:order-first"
          } h-full`}
        >
          <div className="flex flex-col gap-contant h-full">{children}</div>
        </div>
      )}
    </div>
  );
};

export default ProjectBox;
