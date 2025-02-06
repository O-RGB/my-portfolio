import React from "react";

interface TitleBoxProps {
  number: string;
  title: string;
  bottomTitle?: string;
  description: string;
}

const TitleBox: React.FC<TitleBoxProps> = ({
  number,
  title,
  bottomTitle,
  description,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-0 md:gap-12 py-6 border-b border-gray-200 dark:border-white/30 duration-300">
        <div className="text-clamp-base text-gray-300 font-bold">
          /0{number}
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-start md:gap-16 w-full">
          <div className="text-clamp-base font-bold text-gray-900 dark:text-white mb-3 md:mb-0 md:w-[250px] flex flex-col gap-1 ">
            <div className="leading-10">{title}</div>
            {bottomTitle && (
              <div className="text-base text-gray-400 dark:text-gray-400">{bottomTitle}</div>
            )}
          </div>
          <p className="text-lg text-gray-500 dark:text-white font-light leading-relaxed flex-1">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default TitleBox;
