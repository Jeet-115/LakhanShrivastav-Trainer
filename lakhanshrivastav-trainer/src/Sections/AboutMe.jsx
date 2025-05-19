import React, { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ThemeContext from "../Components/ThemeContext";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="aboutme"
      className={`md:mt-16 mt-8 md:px-8 px-4 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-bold outfit">About Me</h2>
        <hr
          className={`border-t-4 ${
            theme === "dark" ? "border-white" : "border-black"
          } w-24 my-2`}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Left Div: Profile Picture */}
        <motion.div
          className="w-full md:w-2/5 md:mb-0 left-div"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          exit="hidden"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src="/profile/pfp.png"
            alt="Profile"
            className={`w-40 md:w-60 h-40 md:h-60 object-contain rounded-xl ${
              theme === "dark"
                ? "shadow-gray-700 bg-gray-600 shadow-xl"
                : "shadow-gray-400 bg-gray-300 shadow-xl"
            }`}
          />
        </motion.div>

        {/* Right Div: Description */}
        <motion.div
          className="w-full md:w-3/5 right-div"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          exit="hidden"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="mt-2 md:space-y-2 montserrat">
            <p>
              <strong className="inter">Name:</strong> Lakhan Anil Shrivastav
            </p>
            <p>
              <strong className="inter">Email:</strong>{" "}
              shrivastavlakhan08@gmail.com
            </p>
            <p>
              <strong className="inter">Phone No:</strong> +91 82377 20030
            </p>
            <br />
          </div>

          <p className="text-justify montserrat leading-relaxed">
            I'm a dedicated Software Engineer with hands-on experience in
            building scalable backend systems and AI-integrated applications.
            I've contributed to health tech and ed-tech products using Python,
            Django, FastAPI, and modern cloud tools. Passionate about GenAI,
            data-driven solutions, and full-stack development, I thrive in
            fast-paced, collaborative environments where innovation and impact
            matter most.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="/Lakhan-Shrivastav-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`px-6 py-2 rounded-md text-lg font-semibold ${
                  theme === "dark"
                    ? "text-white bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-700 hover:to-gray-900 border-2 border-white"
                    : "text-black bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-400 hover:to-gray-200 border-2 border-black"
                } transition duration-300`}
              >
                Resume
              </button>
            </a>
            <Link to="contact" smooth={true} duration={1000}>
              <button
                className={`px-6 py-2 rounded-md text-lg font-semibold ${
                  theme === "dark"
                    ? "text-white bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-700 hover:to-gray-900 border-2 border-white"
                    : "text-black bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-400 hover:to-gray-200 border-2 border-black"
                } transition duration-300`}
              >
                Hire Me
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
