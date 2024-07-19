"use client";

/**
 * IMPORTANT:
 * 1) the first section (div): width: 100%
 * 2) VerticalTimelineElement: visible={true}
 * 3) VerticalTimeline: lineColor="" and css style of html (:root): { --line-color: #fff; }
 * 4) there are set colors in tailwind.config.ts:
 *    secondary: "#aaa6c3", "white-100": "#f3f3f3",
 */

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/constants";
import { textVariants } from "./motion";

const Experience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl w-full mx-auto relative z-0"
    >
      <motion.div variants={textVariants}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
