import React from "react";
import { motion } from "framer-motion";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { staggerChildren } from "../../utils/motionPresets";

const Banner = () => {
  return (
    <motion.section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
      variants={staggerChildren(0.2, 0.1)}
      initial="hidden"
      animate="visible"
    >
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
};

export default Banner;