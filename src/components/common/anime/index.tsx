import React, { useState } from "react";
import { motion } from "framer-motion";

interface TestCommonProps {
  children: React.ReactNode;
}

const TestCommon: React.FC<TestCommonProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ ease: "anticipate", duration: 3 }}
      // className="text-2xl font-bold"
    >
      {children}
    </motion.div>
  );
};

export default TestCommon;
