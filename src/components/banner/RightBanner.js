import React from "react";
import { motion } from "framer-motion";
import { bannerImg } from "../../assets/index";
import { fadeInUp } from "../../utils/motionPresets";

const RightBanner = () => {
  return (
    <motion.div
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      variants={fadeInUp(0.2)}
    >
      <motion.img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      />
      <motion.div
        className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default RightBanner;