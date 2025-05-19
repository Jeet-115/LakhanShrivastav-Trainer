import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import skills from "../data/skillsData";
import ThemeContext from "../Components/ThemeContext";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");
  const { theme } = useContext(ThemeContext);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className={`w-full mt-14 py-10 px-4 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div
        className={`mt-12 ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        {/* Title & HR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-left mb-4 outfit">Skills</h3>
          <hr
            className={`border-t-4 w-24 my-2 ${
              theme === "dark" ? "border-white" : "border-black"
            }`}
          />
        </motion.div>

        {/* Category Navbar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-center items-center mt-6 inter">
            <div
              className={`flex w-full max-w-6xl mx-auto rounded-2xl p-4 gap-2 overflow-x-auto justify-evenly scrollbar-thin-custom
        ${
          theme === "dark"
            ? "shadow-md shadow-white"
            : "shadow-md shadow-gray-300"
        }
      `}
            >
              {Object.keys(skills).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300
            ${
              activeCategory === category
                ? theme === "dark"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-blue-700 text-white shadow"
                : theme === "dark"
                ? " text-gray-300 hover:bg-gray-700"
                : " text-gray-700 hover:bg-gray-200"
            }
          `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Logos Grid */}
        <motion.div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          key={activeCategory}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center text-center space-y-2 p-3 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
