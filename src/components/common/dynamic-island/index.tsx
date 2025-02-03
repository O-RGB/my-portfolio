import DarkMode from "@/components/tools/dark-mode";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import DynamicDescription from "./description";

interface DynamicIslandProps {
  onShow?: boolean;
}

const DynamicIsland: React.FC<DynamicIslandProps> = ({ onShow }) => {
  const [hideOptions, setHideOptions] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onOptionsChange = () => {
    setHideOptions(false);

    if (hideOptionsTimeout) {
      clearTimeout(hideOptionsTimeout);
    }

    const timeout = setTimeout(() => {
      setHideOptions(true);
    }, 2500);
    setHideOptionsTimeout(timeout);
  };

  const [hideOptionsTimeout, setHideOptionsTimeout] =
    useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setHideOptions(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    onOptionsChange();
  }, [onShow]);

  return (
    <motion.div
      layout
      ref={containerRef}
      onHoverStart={() => setHideOptions(false)}
      onHoverEnd={() => setHideOptions(true)}
      onClick={onOptionsChange}
      initial={{ scale: 1 }}
      animate={{
        paddingRight: !hideOptions ? "4rem" : "2.5rem",
      }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 0.3,
        },
        paddingRight: {
          type: "spring",
          stiffness: 500,
          damping: 20,
          duration: 1,
        },
      }}
      className="flex items-center justify-center gap-6 rounded-full w-fit py-2 px-10 backdrop-blur-xl bg-black/40 shadow-lg group select-none cursor-default"
    >
      <motion.div layout className="flex items-center justify-center min-w-32">
        <DynamicDescription />
      </motion.div>

      <motion.div
        layout
        className={`absolute right-2 ${
          !hideOptions ? "opacity-100" : "opacity-0"
        } duration-100`}
      >
        <DarkMode />
      </motion.div>
    </motion.div>
  );
};

export default DynamicIsland;
