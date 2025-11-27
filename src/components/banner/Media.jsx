import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const Media = () => {
  return (
    <motion.div
      className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between"
      variants={staggerChildren(0.08, 0)}
    >
      <motion.div variants={fadeInUp(0.05)}>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100080294441134"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ scale: 1.15, rotate: 3 }}
              className="bannerIcon"
            >
              <FaFacebookF />
            </motion.span>
          </a>
          <a
            href="https://www.instagram.com/muhammaddilshad7672/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ scale: 1.15, rotate: -3 }}
              className="bannerIcon"
            >
              <FaInstagram />
            </motion.span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammaddilshad542/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              whileHover={{ scale: 1.15, rotate: 3 }}
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </motion.span>
          </a>
        </div>
      </motion.div>
      <motion.div variants={fadeInUp(0.1)}>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <motion.span whileHover={{ scale: 1.15 }} className="bannerIcon">
            <FaReact />
          </motion.span>
          <motion.span whileHover={{ scale: 1.15 }} className="bannerIcon">
            <SiNextdotjs />
          </motion.span>
          <motion.span whileHover={{ scale: 1.15 }} className="bannerIcon">
            <SiTailwindcss />
          </motion.span>
          <motion.span whileHover={{ scale: 1.15 }} className="bannerIcon">
            <FaJsSquare />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Media;
