import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimeCommonProps {
  children: React.ReactNode;
}

const AnimeCommon: React.FC<AnimeCommonProps> = ({ children }) => {
  const [animation, setAnimation] = useState({
    opacity: 1,
    y: 0,
    x: 0,
  });

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setAnimation({ opacity: 1, y: 0, x: 50 });
  //     }, 6000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -200, x: 0 }}
      animate={animation}
      transition={{ ease: "anticipate", duration: 3 }}
      className="text-2xl font-bold"
    >
      {children}
    </motion.div>
  );
};

export default AnimeCommon;
