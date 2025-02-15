import React from "react";

interface QuotesProps {
  title: React.ReactNode;
  reference?: React.ReactNode;
  isPerson?: boolean;
}

const Quotes: React.FC<QuotesProps> = ({
  title,
  reference,
  isPerson = true,
}) => {
  return (
    <div className={`flex ${isPerson ? "gap-6" : "gap-6"} `}>
      <div className="w-0.5 bg-gray-500"></div>
      <div className="w-full">
        <div className={`w-full text-xl leading-6 ${isPerson ? "" : "pb-2"}`}>
          {title}
        </div>
        <div className={`w-full ${isPerson ? "leading-6 text-gray-500" : ""}`}>
          {reference}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
