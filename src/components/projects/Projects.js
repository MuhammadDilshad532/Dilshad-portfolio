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
          title="Codesprint-web"
          des=" Codesprint-web is an interactive platform for coding challenges, built with React.js and Tailwind CSS for dynamic performance."
          src={projectOne}
          githubLink="https://github.com/MuhammadDilshad532/codesprint-web"
          liveLink="https://codesprint.site/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Developed an e-commerce website with React.js, offering seamless shopping experiences, secure transactions, and responsive design."
          src={projectTwo}
          githubLink="https://github.com/MuhammadDilshad532/ecommerce-website-by-react"
          liveLink="https://dilshad-shoping.vercel.app/"
        />
        <ProjectsCard
          title="Rubngub.com"
          des=" Rubngub.com is an all-in-one platform offering organic products, featuring a user-friendly interface and secure transactions."
          src={projectThree}
          githubLink="https://github.com/MuhammadDilshad532/rubngub"
          liveLink="https://rubngub.com"
        />
        <ProjectsCard
          title="Personal-portfolio"
          des=" My personal portfolio showcases my skills and projects, featuring a clean design and detailed project descriptions."
          src={projectFour}
          githubLink="https://github.com/MuhammadDilshad532/personal-portfolio"
          liveLink="https://dilshad-portfolio.vercel.app/"
        />
        <ProjectsCard
          title="Access.pk"
          des=" Access.pk is a comprehensive platform offering easy access to services, products, and user-friendly navigation."
          src={projectfive}
          githubLink="https://github.com/MuhammadDilshad532/access-pk"
          liveLink="https://access.pk"
        />
        <ProjectsCard
          title="Chatting App"
          des=" A feature-rich chatting app enabling real-time messaging, media sharing, and secure conversations with a user-friendly interface."
          src={projectSex}
          githubLink="https://github.com/MuhammadDilshad532/chatting-app"
          liveLink="https://chatting-app.example.com"
        />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
