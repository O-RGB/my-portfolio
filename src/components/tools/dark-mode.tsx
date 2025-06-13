"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import ButtonCommon from "../common/button";

interface DarkModeToggleProps {
  disabled?: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ disabled }) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ButtonCommon
        disabled={disabled}
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
        <>
          {resolvedTheme !== "dark" ? (
            <FaMoon
              className={`text-sm text-white transition-colors duration-300`}
            />
          ) : (
            <FaSun
              className={`text-sm text-white transition-colors duration-300`}
            ></FaSun>
          )}
        </>
      }
      isCircle
      variant="custom"
      customColor={`bg-white/40 hover:bg-white/40! transition-colors duration-300`}
    />
  );
};

export default DarkModeToggle;
