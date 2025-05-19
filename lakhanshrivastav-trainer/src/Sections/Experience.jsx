import React, { useContext } from "react";
import { motion } from "framer-motion";
import experiences from "../data/experienceData";
import ThemeContext from "../Components/ThemeContext";

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="experience"
      className={`mt-16 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold mb-2 outfit">
          Professional Experience
        </h3>
        <div
          className={`h-1 w-24 mb-10 ${
            theme === "dark" ? "bg-white" : "bg-black"
          }`}
        />
      </motion.div>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="hidden"
            variants={variants}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.2,
            }}
            className="w-full md:w-[30%] bg-opacity-5 rounded-lg p-4 border border-gray-300 dark:border-gray-700"
          >
            <h4 className="text-xl font-semibold mb-1 inter">
              {experience.title}
            </h4>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 inter">
              {experience.company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
              {experience.location} | {experience.date}
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 montserrat">
              {experience.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
