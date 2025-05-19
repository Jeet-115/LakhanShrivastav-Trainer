import React, { useContext } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext";

const ContactInfo = () => {
  const { theme } = useContext(ThemeContext);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const links = [
    { href: "https://linkedin.com/in/jeet-mistry-67a613233", icon: <FaLinkedin />, color: theme === "dark" ? "text-blue-400" : "text-blue-500" },
    { href: "https://github.com/Jeet-115", icon: <FaGithub />, color: theme === "dark" ? "text-gray-400" : "text-gray-800" },
    { href: "https://x.com/@Jeet43959691", icon: <img src="/contact/twitter.png" alt="Twitter X" className="h-[1em] w-[1em]" />, color: "" },
    { href: "mailto:jeetmistry115@gmail.com", icon: <FaEnvelope />, color: theme === "dark" ? "text-red-400" : "text-red-500" },
    { href: "https://www.instagram.com/jeet_.115/", icon: <FaInstagram />, color: "text-pink-500" },
    { href: "https://facebook.com/jeet.mistry.7543/", icon: <FaFacebook />, color: "text-blue-600" },
  ];

  return (
    <div className={`md:w-1/2 space-y-6 inter ${theme === "dark" ? "text-white" : "text-black"}`}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        exit="hidden"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="text-lg"
      >
        Feel free to connect with me through my social media profiles or drop me
        an email. I am always open to new opportunities, collaborations, or just
        a friendly chat!
      </motion.p>

      <div className="flex space-x-6 text-2xl">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:transition-all ${link.color} ${link.color ? `hover:${link.color.replace("text-", "text-")}` : ""}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
