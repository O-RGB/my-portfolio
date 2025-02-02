import React from "react";

interface QuotesProps {
  title: string;
  reference?: string;
}

const Quotes: React.FC<QuotesProps> = ({ title, reference }) => {
  return (
    <div className="flex gap-6">
      <div className="w-0.5 bg-gray-500"></div>
      <div className="w-full">
        <div className="w-full text-xl leading-6">{title}</div>
        <div className="w-full leading-6 text-gray-500">{reference}</div>
      </div>
    </div>
  );
};

export default Quotes;
