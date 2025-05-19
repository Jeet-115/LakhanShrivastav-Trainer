import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import facilitateImages from "../data/facilitate";

const Hero = () => {
  const typedRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer | Python, Django, Angular",
        "GenAI Health App Developer | OpenAI & LLaMA",
        "LMS Architect | Django, Zoom Integration, Automation",
        "Data Science & Visualization Enthusiast",
        "FastAPI, Docker, Kubernetes | Backend Pro",
        "BBPS Developer | Django, Angular, REST APIs",
        "Cloud Experience | Azure, AWS-S3, GCP, MinIO",
        "DSA & System Design Learner | Problem Solver",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilitateImages.length);
    }, 2000); // switch every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const popupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    enter: {
      x: "100%",
      opacity: 0,
      zIndex: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      zIndex: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hero" className="w-full mt-14 py-10 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={popupVariants}
        className="max-w-6xl pt-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-md rounded-xl dark:shadow-gray-400/50 shadow-xl shadow-black/60  bg-gray-400/50 dark:bg-black"
      >
        {/* Left: Profile Image */}
        <motion.div
          className="w-full md:w-1/2 h-72 md:h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={popupVariants}
        >
          <img
            src="/profile/profilebg.png"
            alt="Lakhan Shrivastav"
            className="w-full lg:h-[600px] md:h-[500px] h-[300px] object-contain object-center rounded-xl drop-shadow-md dark:drop-shadow-emerald-300"
          />
        </motion.div>

        {/* Right: Hero Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={popupVariants}
        >
          <h1 className="md:text-4xl text-xl font-bold outfit text-gray-900 dark:text-white mb-4">
            Lakhan Shrivastav
          </h1>
          <p className="md:text-xl text-md pb-4 inter text-gray-700 dark:text-gray-300">
            <span className="typed" ref={typedRef} />
          </p>

          {/* Rotating Image Animation */}
          <div className="relative w-full h-40 mt-4 overflow-hidden rounded-lg mb-4">
            <AnimatePresence>
              <motion.img
                key={facilitateImages[currentIndex]}
                src={facilitateImages[currentIndex]}
                alt="Facilitate Visual"
                className="absolute w-full h-full object-contain object-left rounded-2xl px-4 md:px-0"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
