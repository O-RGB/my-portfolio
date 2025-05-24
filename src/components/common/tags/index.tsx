import React from "react";
import { TagsProps } from "./types/tags.type";

const Tag: React.FC<TagsProps> = ({ label }) => {
  return (
    <span className="border border-gray-800 dark:border-white/60 text-gray-800 dark:text-white rounded-full px-2 py-1 w-fit h-fit text-xs duration-500">
      {label}
    </span>
  );
};

export default Tag;
