import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

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
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center  bg-black/20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg bg-white/70 backdrop-blur-xl rounded-layout shadow-lg h-[80vh] overflow-hidden"
            initial={{ y: "105vh" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "anticipate" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            {/* {title && (
              <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button
                  className="text-gray-500 hover:text-black"
                  onClick={onClose}
                >
                  <IoClose size={24} />
                </button>
              </div>
            )} */}

            {/* Modal Content */}
            <div className={`overflow-y-auto h-full   p-16`}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ModalCommon;
