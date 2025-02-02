"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface SwitchCommonProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const SwitchCommon: React.FC<SwitchCommonProps> = ({
  checked = false,
  onChange,
  className = "",
  leftIcon,
  rightIcon,
}) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
    onChange?.(!isOn);
  };

  return (
    <div
      className={`relative flex h-6 w-12 items-center rounded-full 
      px-2 cursor-pointer ${isOn ? "bg-blue-500" : "bg-gray-400"} 
      transition-colors duration-300 overflow-hidden ${className}`}
      onClick={toggleSwitch}
      style={{ userSelect: "none" }}
    >
      {/* Left Icon */}
      <motion.div
        className="mr-1 text-white text-xs"
        animate={{ x: isOn ? 50 : 20 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 1,
        }}
      >
        {leftIcon}
      </motion.div>

      {/* Toggle Button */}
      <motion.div
        className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-md"
        animate={{ x: isOn ? 25 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Right Icon */}
      <motion.div
        className="mr-1 text-white text-xs"
        animate={{ x: !isOn ? -50 : -17 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 1,
        }}
      >
        {rightIcon}
      </motion.div>
    </div>
  );
};

export default SwitchCommon;
