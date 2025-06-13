import React from "react";
import { LiquidGlass } from "../glass";

interface ButtonCommonProps {
  variant?: "black" | "transparent" | "custom";
  customColor?: string;
  isCircle?: boolean;
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ButtonCommon: React.FC<ButtonCommonProps> = ({
  variant = "black",
  customColor = "#000",
  isCircle = false,
  disabled = false,
  icon,
  label,
  onClick,
  className,
}) => {
  return (
    <LiquidGlass edgeWidth={3} edgeBlur={10} glassBlur={10}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${className} flex items-center justify-center ${
          isCircle ? "w-8 h-8" : "px-4 py-2"
        } transition-all font-bold text-white`}
      >
        {icon ? icon : label}
      </button>
    </LiquidGlass>
  );
};

export default ButtonCommon;
