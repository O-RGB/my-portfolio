import DarkMode from "@/components/tools/dark-mode";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

interface DynamicIslandProps {
  title?: string;
  description?: string;
  onShow?: boolean;
}

const DynamicIsland: React.FC<DynamicIslandProps> = ({
  title = "About Me",
  description = "Test page section",
  onShow,
}) => {
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

  // Close on outside click
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
      ref={containerRef}
      onHoverStart={() => {
        setHideOptions(false);
      }}
      onHoverEnd={() => {
        setHideOptions(true);
      }}
      onClick={onOptionsChange}
      initial={{ paddingRight: "2.5rem", scale: 1 }}
      animate={{
        paddingRight: !hideOptions ? "4rem" : "2.5rem",
        scale: !hideOptions ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 1,
      }}
      className="flex items-center justify-center gap-6 rounded-full w-fit py-2 px-10 backdrop-blur-xl bg-black/40 shadow-lg group select-none cursor-default"
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-sm font-semibold text-white text-nowrap">
          {title}
        </span>
        {description && (
          <span className="text-xs font-semibold text-gray-300 text-nowrap">
            {description}
          </span>
        )}
      </div>
      <div
        className={`absolute right-2 ${
          !hideOptions ? "opacity-100" : "opacity-0"
        } duration-100`}
      >
        <DarkMode />
      </div>
    </motion.div>
  );
};

export default DynamicIsland;
