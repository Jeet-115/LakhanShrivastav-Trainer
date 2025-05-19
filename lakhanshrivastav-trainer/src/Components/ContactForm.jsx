import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../Components/ThemeContext";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const { theme } = useContext(ThemeContext);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "aa31bb56-d2ab-445a-8a55-70902b32b62d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className={`md:w-1/2 p-6 rounded-lg shadow-md montserrat ${
        theme === "dark"
          ? "shadow-2xl shadow-white text-white"
          : "shadow-2xl shadow-black text-black"
      }`}
    >
      <motion.form
        onSubmit={onSubmit}
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "dark"
                ? "bg-transparent text-white border-gray-600"
                : "bg-transparent border-gray-300"
            }`}
          />
        </div>

        <motion.div
          variants={variants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label className="block text-sm font-medium mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="helloWorld@email.com"
            required
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "dark"
                ? "bg-transparent text-white border-gray-600"
                : "bg-transparent border-gray-300"
            }`}
          />
        </motion.div>

        <motion.div
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Just saying hi"
            required
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "dark"
                ? "bg-transparent text-white border-gray-600"
                : "bg-transparent border-gray-300"
            }`}
          />
        </motion.div>

        <motion.div
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Let's talk about..."
            required
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === "dark"
                ? "bg-transparent text-white border-gray-600"
                : "bg-transparent border-gray-300"
            }`}
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-all"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Send Message
        </motion.button>

        <motion.span
          className={`block text-center mt-2 text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {result}
        </motion.span>
      </motion.form>
    </div>
  );
};

export default ContactForm;
