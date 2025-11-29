import React from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectfive,
  projectSex,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
      variants={fadeInUp(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14"
        variants={staggerChildren(0.12, 0.2)}
      >
                <ProjectsCard
          title="portfolio by w3school"
          des=" My personal portfolio showcases my skills and projects, featuring a clean design and detailed project descriptions."
          src={projectFour}
          githubLink="https://github.com/MuhammadDilshad532/personal-portfolio"
          liveLink="https://w3school-portfolio.vercel.app/"
        />
        <ProjectsCard
          title="Daraz page"
          des=" A responsive Daraz-style webpage created using HTML and CSS, focusing on layout, styling, and modern UI design"
          src={projectfive}
          githubLink="https://github.com/MuhammadDilshad532/daraz-page"
          liveLink="https://darazpage.vercel.app/"
        />
        <ProjectsCard
          title="bbaby sulemanclone"
          des=" A responsive bbaby sulemanclone project built using React, Tailwind CSS, and React Icons to deliver a polished modern UI"
          src={projectSex}
          githubLink="https://github.com/MuhammadDilshad532/BBABYSulemanclone"
          liveLink="https://bbaby-sulemanclone.vercel.app/"
        />
        <ProjectsCard
          title="tic-tac-toe"
          des=" Created an interactive Tic Tac Toe game using React and Tailwind CSS with smooth UI and responsive design"
          src={projectOne}
          githubLink="https://github.com/MuhammadDilshad532/Tic-Tac-Toe"
          liveLink="https://professional-tic-tac-toe.vercel.app/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Developed an e-commerce website with React.js, offering seamless shopping experiences, secure transactions, and responsive design."
          src={projectTwo}
          githubLink="https://github.com/MuhammadDilshad532/ecommerce-website-by-react"
          liveLink="https://dilshad-shoping.vercel.app/"
        />
        <ProjectsCard
          title="to-do-app"
          des=" I have built two modern, responsive apps showcasing clean UI, efficient code, and strong frontend development skills."
          src={projectThree}
          githubLink="https://github.com/MuhammadDilshad532/rubngub"
          liveLink="https://professional-to-do-app.vercel.app/"
        />

      </motion.div>
    </motion.section>
  );
};

export default Projects;
