import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ADP in Information Technology"
            subTitle=" GC university Sub Campus Layyah  (2021 - 2023)"
            result="3.19/4"
            des="Completed ADP in Information Technology at GC University Sub Campus Layyah (2021-2023), gaining expertise in modern technologies and hands-on skills."
          />
          <ResumeCard
            title="ICS (Intermediate in Computer Science)"
            subTitle="Zavia college Shaher Sultan (2019 - 2021)"
            result="75%"
            des="Completed ICS in Computer Science at Zavia College Shaher Sultan (2019-2021), gaining foundational knowledge in programming, systems, and software development."
          />
          <ResumeCard
            title="Metric"
            subTitle="Govt High school Shaher sultan (2017 - 2019)"
            result="85%"
            des="Completed Metric at Govt High School Shaher Sultan (2017-2019), building a strong foundation in essential subjects and academic skills for further education."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React.js/Next.js Developer"
            subTitle="CodeSprint (2024 - Present)"
            result="Lahore "
            des="Codesprint's hiring process is an important part of our culture. Codesprintlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Securehops Developer Team - (2023 - 2024)"
            result="Lahore, Punjab"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Codesprint - (2023 - 2024)"
            result="Lahore"
            des="The Lahore economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
