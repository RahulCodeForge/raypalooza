import React from "react";
import { motion } from "framer-motion";
import "../Style/Header.css";

const Header = () => {
  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="header glassmorphism-panel"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-container">
        {/* ---- Logo Placeholder ---- */}
        <div className="logo neon-text">
          <img src="/1.png" alt="logo" />
          {/* RAY <span className="logo-accent">PALOOZA</span> */}
        </div>

        {/* ---- Navigation Links ---- */}
        <nav className="nav-links">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="nav-link"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="nav-link"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
