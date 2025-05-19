import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import facilitateImages from "../data/facilitate";

const Hero = () => {
  const lgtypedRef = useRef(null);
  const smmdtypedRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lgtyped = new Typed(lgtypedRef.current, {
      strings: [
        "Tech Trainer | Trained 8000+ Students",
        "AI/ML & Data Science Enthusiast",
        "Full Stack Developer | Python, Django, Angular",
        "GenAI Health App Creator using OpenAI & LLaMA",
        "Hackathon Winner | 150+ Problems Solved",
        "DSA, FastAPI, Docker, Kubernetes Enthusiast",
        "Lifelong Learner | Innovation Driven",
        "Freelancer | LMS & Enterprise Solutions Builder",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });

    return () => lgtyped.destroy();
  }, []);

  useEffect(() => {
    const smmdtyped = new Typed(smmdtypedRef.current, {
      strings: [
        "Tech Trainer | Trained 8000+ Students",
        "AI/ML & Data Science Enthusiast",
        "Full Stack Developer | Python, Django, Angular",
        "GenAI Health App Creator using OpenAI & LLaMA",
        "Hackathon Winner | 150+ Problems Solved",
        "DSA, FastAPI, Docker, Kubernetes Enthusiast",
        "Lifelong Learner | Innovation Driven",
        "Freelancer | LMS & Enterprise Solutions Builder",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });

    return () => smmdtyped.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facilitateImages.length);
    }, 2000);
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
        className="hidden max-w-7xl mx-auto lg:flex lg:flex-row items-start justify-between gap-8 bg-gray-400/50 dark:bg-black backdrop-blur-md rounded-xl shadow-xl dark:shadow-gray-400/50 p-6"
      >
        {/* Left: Profile Image */}
        <motion.div
          className="lg:w-[40%] flex justify-start"
          variants={popupVariants}
        >
          <img
            src="/profile/profilebg.png"
            alt="Lakhan Shrivastav"
            className="w-full h-full max-h-[600px] object-contain object-center rounded-xl drop-shadow-md dark:drop-shadow-emerald-300"
          />
        </motion.div>

        {/* Right: Text and Rotating Images */}
        <motion.div
          className="lg:w-[60%] flex flex-col justify-start items-start"
          variants={popupVariants}
        >
          <h1 className="text-2xl md:text-4xl font-bold outfit text-gray-900 dark:text-white mb-2">
            Lakhan Shrivastav
          </h1>
          <p className="lg:text-xl inter text-gray-700 dark:text-gray-300 lg:mb-20">
            <span className="typed" ref={lgtypedRef} />
          </p>

          {/* Rotating Image Animation */}
          <div className="relative w-full lg:h-80 overflow-hidden rounded-lg">
            <AnimatePresence>
              <motion.img
                key={facilitateImages[currentIndex]}
                src={facilitateImages[currentIndex]}
                alt="Facilitate Visual"
                className="absolute w-full h-full object-contain object-left rounded-2xl"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
      {/* Mobile / Tablet Layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={popupVariants}
        className="flex lg:hidden flex-col max-w-4xl mx-auto gap-6"
      >
        {/* Top: Image Left + Text Right */}
        <div className="flex flex-row gap-4 bg-gray-400/50 dark:bg-black backdrop-blur-md rounded-xl shadow-xl dark:shadow-gray-400/50 p-6">
          {/* Left 30% Image */}
          <div className="w-[30%]">
            <img
              src="/profile/profilebg.png"
              alt="Lakhan Shrivastav"
              className="w-full h-full object-contain rounded-xl drop-shadow-md dark:drop-shadow-emerald-300"
            />
          </div>

          {/* Right 70% Text */}
          <div className="w-[70%] flex flex-col justify-center md:items-center">
            <h1 className="text-xl sm:text-2xl font-bold outfit text-gray-900 dark:text-white mb-1">
              Lakhan Shrivastav
            </h1>
            <p className="text-sm sm:text-md inter text-gray-700 dark:text-gray-300">
              <span className="typed" ref={smmdtypedRef} />
            </p>
          </div>
        </div>

        {/* Bottom: Full Width Sliding Image */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-lg">
          <AnimatePresence>
            <motion.img
              key={facilitateImages[currentIndex]}
              src={facilitateImages[currentIndex]}
              alt="Facilitate Visual"
              className="absolute w-full h-full object-contain object-center rounded-2xl"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
