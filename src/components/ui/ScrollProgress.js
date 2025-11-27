import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.span
      style={{ scaleX }}
      className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-designColor via-[#ff6b6b] to-[#fcea7e] origin-left z-[60]"
    />
  );
};

export default ScrollProgress;

