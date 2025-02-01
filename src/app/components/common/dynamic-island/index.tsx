import React, { useEffect } from "react";

interface DynamicIslandProps {
  title?: string;
}

const DynamicIsland: React.FC<DynamicIslandProps> = ({ title = "test" }) => {
  useEffect(() => {}, [title]);

  return (
    <div className="rounded-full w-52 p-2  flex items-center justify-center backdrop-blur-xl bg-black/20 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white/30">
      <span className="text-lg font-semibold text-white">{title}</span>
    </div>
  );
};

export default DynamicIsland;
