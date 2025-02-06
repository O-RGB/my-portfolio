import React from "react";

interface SkillsBoxProps {
  title?: string;
  contant?: React.ReactNode;
  bg?: string;
}

const SkillsBox: React.FC<SkillsBoxProps> = ({ title, contant, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className={`flex flex-col w-full h-full gap-2 rounded-layout p-6 text-black ${
        !bg ? "bg-gray-100" : ""
      }`}
    >
      {title && (
        <div className="h-[20%] text-lg md:text-2xl font-bold w-full">
          {title}
        </div>
      )}
      {contant && (
        <div className={`${title ? "h-[80%]" : "h-[100%]"} w-full`}>
          {contant}
        </div>
      )}
    </div>
  );
};

export default SkillsBox;
