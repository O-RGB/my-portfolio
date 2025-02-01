import React from "react";

interface HeaderTitleProps {
  title: string;
  detail?: string;
  className?: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  detail,
  className,
}) => {
  return (
    <div className={className}>
      <span className="text-4xl">{title}</span> <br />
      <span className="text-xl text-gray-500">{detail}</span>
    </div>
  );
};

export default HeaderTitle;
