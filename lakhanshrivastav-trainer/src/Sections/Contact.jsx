import React, { useContext } from "react";
import { motion } from "framer-motion";
import Contactinfo from "../Components/Contactinfo";
import ContactForm from "../Components/ContactForm";
import ThemeContext from "../Components/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className={`md:mt-16 mt-8 md:px-8 px-4 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold outfit">Let's Connect</h2>
          <hr
            className={`border-t-4 w-24 my-2 ${
              theme === "dark" ? "border-white" : "border-black"
            }`}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <Contactinfo theme={theme} />
          <ContactForm theme={theme} />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
