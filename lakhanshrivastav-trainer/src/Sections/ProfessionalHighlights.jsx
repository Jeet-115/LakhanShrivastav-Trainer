import React, { useContext } from "react";
import { motion } from "framer-motion";
import professionalhighlights from "../data/professionalhighlights";
import ThemeContext from "../Components/ThemeContext";

const ProfessionalHighlights = () => {
  const { theme } = useContext(ThemeContext);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="highlights"
      className={`mt-12 px-4 md:px-8 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      {/* Title & HR */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold outfit">Professional Highlights</h2>
        <hr
          className={`border-t-4 ${theme === "dark" ? "border-white" : "border-black"} w-24 my-2`}
        />
      </motion.div>

      {/* Highlight Cards */}
      <div className="space-y-6 mt-6">
        {Object.entries(professionalhighlights).map(([title, points], index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            className={`rounded-xl p-4 shadow-sm ${
              theme === "dark"
                ? "border border-gray-700 shadow-white"
                : "border border-gray-300 shadow-gray-300"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2 inter">{title}</h3>
            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed montserrat">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalHighlights;