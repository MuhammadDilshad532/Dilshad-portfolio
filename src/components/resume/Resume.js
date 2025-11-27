import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const tabs = [
    {
      label: "Education",
      isActive: educationData,
      onClick: () => {
        setEducationData(true);
        setSkillData(false);
        setExperienceData(false);
        setAchievementData(false);
      },
    },
    {
      label: "Professional Skills",
      isActive: skillData,
      onClick: () => {
        setEducationData(false);
        setSkillData(true);
        setExperienceData(false);
        setAchievementData(false);
      },
    },
    {
      label: "Experience",
      isActive: experienceData,
      onClick: () => {
        setEducationData(false);
        setSkillData(false);
        setExperienceData(true);
        setAchievementData(false);
      },
    },
    {
      label: "Achievements",
      isActive: achievementData,
      onClick: () => {
        setEducationData(false);
        setSkillData(false);
        setExperienceData(false);
        setAchievementData(true);
      },
    },
  ];

  return (
    <motion.section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black"
      variants={fadeInUp(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <motion.div variants={staggerChildren(0.1, 0.1)}>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {tabs.map((tab) => (
            <motion.li
              key={tab.label}
              onClick={tab.onClick}
              className={`${
                tab.isActive ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {tab.label}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </motion.section>
  );
};

export default Resume;
