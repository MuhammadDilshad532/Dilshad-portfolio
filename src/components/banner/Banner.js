import React from "react";
import { motion } from "framer-motion";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import FloatingShapes from "./FloatingShapes";
import { staggerChildren } from "../../utils/motionPresets";

const Banner = () => {
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      variants={staggerChildren(0.2, 0.1)}
      initial="hidden"
      animate="visible"
    >
      <FloatingShapes />
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
};

export default Banner;