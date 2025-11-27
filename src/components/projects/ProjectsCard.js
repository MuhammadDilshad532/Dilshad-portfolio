import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { fadeInUp } from "../../utils/motionPresets";

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  return (
    <motion.div
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-500"
      variants={fadeInUp(0.1)}
      whileHover={{ y: -10 }}
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <motion.img
          className="w-full h-60 object-cover cursor-pointer"
          src={src}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <motion.span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 cursor-pointer"
                whileHover={{ scale: 1.15, color: "#ff014f" }}
              >
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
              </motion.span>
              <motion.span
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 cursor-pointer"
                whileHover={{ scale: 1.15, color: "#ff014f" }}
              >
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
                </a>
              </motion.span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
