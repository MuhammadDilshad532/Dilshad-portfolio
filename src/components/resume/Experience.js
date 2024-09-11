import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont  w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React.js Developer"
            subTitle="CodeSprint- (2023 - Present)"
            result="Pakistan"
            des="Currently working as a React.js Developer at CodeSprint, building high-performance web applications with a focus on modern UI/UX (2023-Present)."
          />
          <ResumeCard
            title="Next.js Developer"
            subTitle="Securehops Developer Team - (2023 - 2024)"
            result="Pakistan"
            des="Worked as a Next.js Developer at Securehops Developer Team, building server-rendered applications focused on performance, SEO, and scalability (2023-2024)."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="CodeSprint - (2023 - 2024)"
            result="Pakistan"
            des="Worked as a Front-end Developer at CodeSprint, developing responsive and interactive user interfaces using modern technologies like React.js (2023-2024)."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2020 - 2021)"
            result="Pakistan"
            des="Worked as a Gym Instructor at Rainbow Gym Center, guiding clients through personalized fitness programs and promoting overall health (2020-2021)."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2021 - 2022)"
            result="Pakistan"
            des="Served as a Web Developer and Instructor at SuperKing College, teaching web development skills and building educational web projects (2021-2022)."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2022 - 2023)"
            result="Pakistan"
            des="Taught at Kingstar Secondary School, delivering engaging lessons, managing classroom activities, and supporting students' academic growth (2022-2023)."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
