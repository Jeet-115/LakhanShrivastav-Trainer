import React, { useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import AboutMe from "../Sections/AboutMe";
import Hero from "../Sections/Hero";
// import Certifications from "../Sections/Certifications";
// import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";
import ThemeContext from "../Components/ThemeContext";
import Experience from "../Sections/Experience";
import ProfessionalHighlights from "../Sections/ProfessionalHighlights";

const Home = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`bg-black min-h-screen bg-${theme === "dark" ? "black" : "white"}`}>
      {/* Navbar Component */}
      <Navbar />
      <div className="p-5">
        {/* Hero Section */}
        <Hero />
        {/* Professional Highlights Section */}
        <ProfessionalHighlights />
        {/* AboutMe Section */}
        <AboutMe />
        {/* Experience Section */}
        <Experience />
        {/* Certifications Section */}
        {/* <Certifications /> */}
        {/* Projects Section */}
        {/* <Projects /> */}
        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
