"use client"
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="relative pt-6 lg:pt-10">
      <div className="h-[400px] bg-gray-800 dark:bg-gray-900 "></div>
    </div>
  );
};

export default Footer;
