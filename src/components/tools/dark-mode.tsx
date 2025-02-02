"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import ButtonCommon from "../common/button";

const DarkModeToggle = () => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ButtonCommon
        isCircle
        variant="custom"
        customColor="bg-transparent"
        icon={<div className="w-4 h-4" />}
      />
    );
  }

  return (
    <ButtonCommon
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      icon={
        <FaMoon
          className={`text-sm ${
            resolvedTheme === "dark" ? "text-black" : "text-white"
          } transition-colors duration-300`}
        />
      }
      isCircle
      variant="custom"
      customColor={`${
        resolvedTheme === "dark" ? "bg-[#fff]" : "bg-[#000]"
      } transition-colors duration-300`}
    />
  );
};

export default DarkModeToggle;
