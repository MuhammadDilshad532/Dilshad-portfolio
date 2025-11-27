import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const ContactLeft = () => {
  return (
    <motion.div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
      variants={fadeInUp(0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.div className="flex flex-col gap-4" variants={staggerChildren(0.08, 0)}>
        <motion.h3 className="text-3xl font-bold text-white" variants={fadeInUp(0)}>
          Muhammad Dilshad
        </motion.h3>
        <motion.p className="text-lg font-normal text-gray-400" variants={fadeInUp(0.05)}>
          React.js/Next.js Developer
        </motion.p>
        <motion.p className="text-base text-gray-400 tracking-wide" variants={fadeInUp(0.1)}>
          I am a React.js developer skilled in HTML, CSS, Tailwind CSS,
          Bootstrap, JavaScript, and React.js, focusing on user-friendly
          interfaces and responsive web apps.
        </motion.p>
        <motion.p
          className="text-base text-gray-400 flex items-center gap-2"
          variants={fadeInUp(0.15)}
        >
          Phone: <span className="text-lightText">+92 3266125280</span>
        </motion.p>
        <motion.p
          className="text-base text-gray-400 flex items-center gap-2"
          variants={fadeInUp(0.2)}
        >
          Email: <span className="text-lightText">mdtechnical47@gmail.com</span>
        </motion.p>
      </motion.div>
      <motion.div className="flex flex-col gap-4" variants={fadeInUp(0.25)}>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <motion.a
            href="https://www.facebook.com/profile.php?id=100080294441134"
            whileHover={{ scale: 1.1 }}
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </motion.a>
          <motion.a
            href="https://github.com/MuhammadDilshad532"
            whileHover={{ scale: 1.1 }}
          >
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammaddilshad542/"
            whileHover={{ scale: 1.1 }}
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/muhammaddilshad7672/"
            whileHover={{ scale: 1.1 }}
          >
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactLeft;
