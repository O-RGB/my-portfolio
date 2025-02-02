import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ModalCommonProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  footer?: boolean | React.ReactNode;
  children?: React.ReactNode;
}

const ModalCommon: React.FC<ModalCommonProps> = ({
  isOpen,
  onClose,
  title = "title",
  footer,
  children,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
            <motion.div
              className="relative z-50 w-full max-w-lg bg-white/70 dark:bg-black/50 backdrop-blur-xl rounded-layout shadow-lg h-[80vh] overflow-hidden"
              initial={{ y: "105vh" }}
              animate={{ y: 0 }}
              exit={{ y: "105vh" }}
              transition={{ duration: 0.7, ease: "anticipate" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`overflow-y-auto h-full p-10 lg:p-16`}>
                {children}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute flex items-center justify-center w-full h-full z-40 bg-black"
              onClick={onClose}
            ></motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ModalCommon;
