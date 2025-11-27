import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const Title = ({ title, des }) => {
  return (
    <motion.div
      className="flex flex-col gap-4 font-titleFont mb-14"
      variants={staggerChildren(0.05, 0)}
    >
      <motion.h3
        className="text-sm uppercase font-light text-designColor tracking-wide"
        variants={fadeInUp(0)}
      >
        {title}
      </motion.h3>
      <motion.h1
        className="text-4xl md:text-5xl text-gray-300 font-bold capitalize"
        variants={fadeInUp(0.05)}
      >
        {des}
      </motion.h1>
    </motion.div>
  );
};

export default Title;