import { motion, useInView, useAnimationControls } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

interface AnimatePosition {
  x?: number;
  y?: number;
}

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  start?: AnimatePosition;
  end?: AnimatePosition;
  initial?: any;
  animate?: any;
  transition?: any;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  className = "",
  children,
  delay = 0,
  duration = 2,
  start = {},
  end = { x: 0, y: 0 },
  initial = { ...start, opacity: 0 },
  animate = { ...end, opacity: 1 },
  transition = { ease: [0.4, 0, 0.2, 1], duration, delay },
}) => {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const [hasCompleted, setHasCompleted] = useState(false);
  const isInView = useInView(ref, { amount: "some" });

  useEffect(() => {
    if (isInView && !hasCompleted) {
      controls.start({
        ...animate,
        transition: { ...transition },
      });
    }
  }, [isInView, hasCompleted, controls, animate, transition]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={controls}
      onAnimationComplete={() => setHasCompleted(true)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
