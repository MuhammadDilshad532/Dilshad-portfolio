import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree , projectFour , projectfive , projectSex } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Codesprint-web"
          des=" Codesprint-web is an interactive platform for coding challenges, built with React.js and Tailwind CSS for dynamic performance."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Developed an e-commerce website with React.js, offering seamless shopping experiences, secure transactions, and responsive design."
          src={projectTwo}
        />
        <ProjectsCard
          title="Rubngub.com"
          des=" Rubngub.com is an all-in-one platform offering organic products, featuring a user-friendly interface and secure transactions."
          src={projectThree}
        />
        <ProjectsCard
          title="Personal-portfolio"
          des=" My personal portfolio showcases my skills and projects, featuring a clean design and detailed project descriptions"
          src={projectFour}
        />
        <ProjectsCard
          title="Access.pk"
          des=" Access.pk is a comprehensive platform offering easy access to services, products, and user-friendly navigation."
          src={projectfive}
        />
        <ProjectsCard
          title="Chatting App"
          des=" A feature-rich chatting app enabling real-time messaging, media sharing, and secure conversations with a user-friendly interface."
          src={projectSex}
        />
      </div>
    </section>
  );
};

export default Projects;
