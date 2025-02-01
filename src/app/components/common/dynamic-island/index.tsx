import React, { useEffect } from "react";

interface DynamicIslandProps {
  title?: string;
  description?: string;
}

const DynamicIsland: React.FC<DynamicIslandProps> = ({
  title = "About Me",
  description = "Test page section",
}) => {
  useEffect(() => {}, [title, description]);

  return (
    <div className="rounded-full min-w-52 p-2 px-4  flex flex-col items-center justify-center backdrop-blur-xl bg-black/40 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white/30 ">
      <span className="text-sm font-semibold text-white text-nowrap">
        {title}
      </span>
      {description && (
        <span className="text-xs font-semibold text-gray-300 text-nowrap">
          {description}
        </span>
      )}
    </div>
  );
};

export default DynamicIsland;
