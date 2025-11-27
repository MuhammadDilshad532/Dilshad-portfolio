import React from "react";
import { motion } from "framer-motion";
import { floatTransition } from "../../utils/motionPresets";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.span
        className="absolute -top-6 left-10 w-24 h-24 rounded-full bg-designColor/20 blur-2xl"
        animate={floatTransition}
      />
      <motion.span
        className="absolute bottom-10 right-4 w-32 h-32 rounded-full bg-[#3b82f6]/20 blur-3xl"
        animate={{ ...floatTransition, transition: { ...floatTransition.transition, duration: 8 } }}
      />
      <motion.span
        className="absolute top-1/3 right-1/4 w-16 h-16 border border-designColor/40 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
          transition: { duration: 12, repeat: Infinity, ease: "linear" },
        }}
      />
    </div>
  );
};

export default FloatingShapes;

