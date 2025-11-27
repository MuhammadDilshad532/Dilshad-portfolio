import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motionPresets";

const FooterBottom = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full py-10"
      variants={fadeInUp(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.p
        className="text-center text-white text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        © {year}. All rights reserved by Muhammad Dilshad
      </motion.p>
    </motion.footer>
  );
};

export default FooterBottom;
