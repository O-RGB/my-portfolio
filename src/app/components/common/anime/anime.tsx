import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ITemplate =
  | "topToBottom"
  | "bottomToTop"
  | "leftToCenter"
  | "rightToCenter"
  | "fadeIn"
  | "fadeOut"
  | "scaleUp"
  | "scaleDown"
  | "rotate"
  | "flipX"
  | "flipY";

interface IAnimateConfig {
  opacity?: number;
  y?: number | string;
  x?: number | string;
  scale?: number;
  rotate?: number;
  delay?: number;
}

interface IAnimate {
  initial: IAnimateConfig;
  animate: IAnimateConfig;
}

interface AnimeCommonProps {
  children: React.ReactNode;
  template?: IAnimate | ITemplate;
}

const templateVariants: Record<ITemplate, IAnimate> = {
  topToBottom: {
    initial: { opacity: 0, y: -200, x: 0 },
    animate: { opacity: 1, y: 0, x: 0 },
  },
  bottomToTop: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  leftToCenter: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  rightToCenter: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  },
  scaleDown: {
    initial: { opacity: 1, scale: 1.5 },
    animate: { opacity: 1, scale: 1 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
  },
  flipX: {
    initial: { opacity: 0, scale: 1, rotate: 180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
  },
  flipY: {
    initial: { opacity: 0, scale: 1, rotate: 180 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
  },
};

const AnimeCommon: React.FC<AnimeCommonProps> = ({ children, template }) => {
  const [animateSelected, setAnimationSelected] = useState<IAnimate>();

  useEffect(() => {
    const selectedTemplate =
      typeof template === "string"
        ? templateVariants[template ?? "bottomToTop"]
        : template;

    const animateDelay = (template as IAnimate).animate?.delay;
    if (animateDelay) {
      setTimeout(() => {
        setAnimationSelected(selectedTemplate);
      }, animateDelay * 1000);
    } else {
      setAnimationSelected(selectedTemplate);
    }
  }, [template]);

  if (!animateSelected) {
    return <></>;
  }

  return (
    <motion.div
      initial={{ ...animateSelected?.initial }}
      animate={{ ...animateSelected?.animate }}
      transition={{ ease: "anticipate", duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimeCommon;
