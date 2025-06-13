import React from "react";
import { TagsProps } from "./types/tags.type";
import { LiquidGlass } from "../glass";

const Tag: React.FC<TagsProps> = ({ label }) => {
  return (
    <LiquidGlass
      edgeWidth={3}
      edgeBlur={10}
      glassBlur={10}
      className="rounded-full overflow-hidden"
    >
      <span className="border border-gray-800 dark:border-white/60 text-gray-800 dark:text-white  px-2 py-1 w-fit h-fit text-xs duration-500">
        {label}
      </span>
    </LiquidGlass>
  );
};

export default Tag;
