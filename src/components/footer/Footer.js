import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const Footer = () => {
  return (
    <motion.div
      className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8"
      variants={staggerChildren(0.1, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="w-full h-full flex flex-col gap-8"
        variants={fadeInUp(0)}
      >
        <img className="w-32 rounded-full" src={logo} alt="logo" />
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
        </div>
      </motion.div>
      <motion.div className="w-full h-full" variants={fadeInUp(0.05)}>
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {["About", "Portfolio", "Services", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                {item}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="w-full h-full" variants={fadeInUp(0.1)}>
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {[
            "Authentication",
            "System Status",
            "Terms of Service",
            "Pricing",
            "Over Right",
          ].map((item) => (
            <li key={item}>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                {item}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="w-full h-full" variants={fadeInUp(0.15)}>
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          {[
            "Documentation",
            "Authentication",
            "API Reference",
            "Support",
            "Open Source",
          ].map((item) => (
            <li key={item}>
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                {item}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
