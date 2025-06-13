import useSectionStore from "@/stores/section-store";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DynamicDescriptionProps {}

const DynamicDescription: React.FC<DynamicDescriptionProps> = ({}) => {
  const sectionName = useSectionStore((state) => state.sectionName);

  return (
    <motion.div
      layout
      className="flex flex-col items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.span
          layout
          key={sectionName?.name || "Home"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          style={{ mixBlendMode: "difference" }}
          className="text-sm font-semibold text-white text-nowrap"
        >
          {sectionName ? sectionName.name : "Home"}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {sectionName?.description && (
          <motion.span
            layout
            key={sectionName.description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{ mixBlendMode: "difference", color: "white" }}
            className="text-xs font-semibold text-nowrap"
          >
            {sectionName.description}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DynamicDescription;
