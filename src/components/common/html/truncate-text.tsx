import React from "react";

interface TruncateTextProps {
  title?: React.ReactNode;
  description: React.ReactNode;
}

const TruncateText: React.FC<TruncateTextProps> = ({ title, description }) => {
  return (
    <div className="relative h-full overflow-hidden md:fade-bottom">
      <div className="md:absolute inset-0 overflow-y-hidden flex flex-col gap-4">
        <span className="text-2xl">{title}</span>
        <span className="line-clamp-[10] md:line-clamp-[10] xl:line-clamp-[15]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default TruncateText;
