import React from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import { fadeInUp, staggerChildren } from "../../utils/motionPresets";

const Features = () => {
  return (
    <motion.section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
      variants={fadeInUp(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Title title="Features" des="What I Do" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20"
        variants={staggerChildren(0.15, 0.2)}
      >
        {featuresData.map((item, index) => (
          <Card item={item} key={item.id} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;
