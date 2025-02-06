import React from "react";

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
  const getBackground = () => {
    if (variant === "black") return "bg-black text-white ";
    if (variant === "transparent")
      return "bg-transparent border border-black text-black dark:text-white backdrop-blur-sm bg-white/40 dark:bg-white/0 dark:border dark:border-white/50";
    return `${customColor} text-white `;
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${getBackground()} ${className} flex items-center justify-center ${
        isCircle ? "w-8 h-8 rounded-full" : "px-4 py-2 rounded-full"
      } transition-all hover:opacity-80 active:opacity-70 disabled:opacity-50 `}
    >
      {icon ? icon : label}
    </button>
  );
};

export default ButtonCommon;
