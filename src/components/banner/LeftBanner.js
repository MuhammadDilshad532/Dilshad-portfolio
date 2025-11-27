import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "React.js Developer.",
      "Next.js Developer.",
      "Front end Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      className="w-full lgl:w-1/2 flex flex-col gap-20"
      variants={fadeInUp(0.1)}
    >
      <motion.div
        className="flex flex-col gap-5"
        variants={staggerChildren(0.1, 0)}
      >
        <motion.h4 className="text-lg font-normal" variants={fadeInUp(0)}>
          WELCOME TO MY PORTFOLIO
        </motion.h4>
        <motion.h1 className="text-6xl font-bold text-white" variants={fadeInUp(0.05)}>
          Hi, I'm <span className="text-designColor capitalize">M.Dilshad</span>
        </motion.h1>
        <motion.h2 className="text-2xl font-bold text-white" variants={fadeInUp(0.1)}>
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </motion.h2>
        <motion.p
          className="text-base font-bodyFont leading-6 tracking-wide"
          variants={fadeInUp(0.15)}
        >
          I am a React.js developer skilled in HTML, CSS, Tailwind CSS,
          Bootstrap, JavaScript, React.js and Next.js , focusing on user-friendly
          interfaces and responsive web apps.
        </motion.p>
      </motion.div>
      <motion.div variants={fadeInUp(0.2)}>
        <Media />
      </motion.div>
    </motion.div>
  );
};

export default LeftBanner;
