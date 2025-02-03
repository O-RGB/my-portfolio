import React from "react";

interface HeaderTitleProps {
  title: string;
  detail?: string;
  className?: string;
  titleClassName?: string;
  detailClassName?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  detail,
  className,
  titleClassName,
  detailClassName,
}) => {
  return (
    <div className={className}>
      <span className={`text-4xl ${titleClassName}`}>{title}</span> <br />
      <span className={`text-xl text-gray-500 dark:text-gray-400 ${detailClassName}`}>
        {detail}
      </span>
    </div>
  );
};

export default HeaderTitle;
