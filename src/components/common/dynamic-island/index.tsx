import DarkMode from "@/components/tools/dark-mode";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import DynamicDescription from "./description";
import ButtonCommon from "../button";
import { FaList } from "react-icons/fa";
import ListMenu from "../menu/list-menu";
import useSectionStore from "@/stores/section-store";

interface DynamicIslandProps {
  onShow?: boolean;
}

const DynamicIsland: React.FC<DynamicIslandProps> = ({ onShow }) => {
  const [hideOptions, setHideOptions] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);
  const [allMenu, setAllMenu] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrolling = useSectionStore((state) => state.scrolling);

  const close = () => {
    setHideOptions(false);
    setHovering(false);
    setAllMenu(false);
  };

  const onOptionsChange = () => {
    if (hovering) {
      return;
    }
    setHideOptions(false);

    if (hideOptionsTimeout) {
      clearTimeout(hideOptionsTimeout);
    }

    const timeout = setTimeout(() => {
      if (hovering) {
        return;
      }
      setHideOptions(true);
    }, 2500);
    setHideOptionsTimeout(timeout);
  };

  const openAllMenu = () => {
    setAllMenu(true);
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
        setHovering(false);
        setAllMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (scrolling) {
      setHideOptions(true);
      setHovering(false);
      setAllMenu(false);
    }
  }, [scrolling]);

  useEffect(() => {
    onOptionsChange();
    if (!onShow) {
      close();
    }
  }, [onShow]);

  return (
    <motion.div
      layout
      ref={containerRef}
      onHoverStart={() => {
        setHideOptions(false);
        setHovering(true);
      }}
      onHoverEnd={() => {
        setHideOptions(true);
        setAllMenu(false);
        setHovering(false);
      }}
      onTouchStart={() => {
        setHideOptions(false);
        setHovering(true);
      }}
      onClick={onOptionsChange}
      initial={{ scale: 1 }}
      animate={{
        paddingRight: !hideOptions ? "5.5rem" : "2.5rem",
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
      className={` relatve rounded-[28px] flex flex-col w-fit py-2 px-10 backdrop-blur-xl bg-black/40 shadow-lg group select-none cursor-default`}
    >
      <motion.div layout className="flex items-center justify-center min-w-32">
        <DynamicDescription />
      </motion.div>

      <motion.div
        layout
        className={`absolute right-12 top-2.5 ${
          !hideOptions ? "opacity-100" : "opacity-0"
        } duration-100`}
      >
        <DarkMode disabled={hideOptions} />
      </motion.div>

      <motion.div
        layout
        className={`absolute right-2 top-2.5 ${
          !hideOptions ? "opacity-100" : "opacity-0"
        } duration-100`}
      >
        <ButtonCommon
          disabled={hideOptions}
          onClick={openAllMenu}
          icon={
            <FaList
              className={`text-sm transition-colors duration-300 text-white dark:text-black`}
            />
          }
          isCircle
          variant="custom"
          customColor={`bg-[#000] dark:bg-[#fff] transition-colors duration-300`}
        />
      </motion.div>

      <div
        className={`${
          allMenu ? "h-[10.7rem] opacity-100" : "h-0 opacity-0"
        } duration-300 overflow-hidden -ml-[2rem] -mr-[5rem] `}
      >
        <div className="p-1.5 w-full">
          <hr className="opacity-25" />
          <ListMenu onClick={close} href="/#about" label="About me"></ListMenu>
          <ListMenu onClick={close} href="/#experience" label="Work"></ListMenu>
          <ListMenu onClick={close} href="/#skills" label="Skills"></ListMenu>
          <ListMenu onClick={close} href="/#project" label="Project"></ListMenu>
        </div>
      </div>
    </motion.div>
  );
};

export default DynamicIsland;
