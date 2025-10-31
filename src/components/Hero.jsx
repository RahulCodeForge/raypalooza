import React from "react";
import { motion } from "framer-motion";
import "../Style/Hero.css"; // ✅ Make sure the folder name is 'styles' (not 'Style')

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Animation Layer */}
      <div className="animated-bg"></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          Welcome to <span className="highlight">RAY PALOOZA</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Your gateway to premium events, parties, and unforgettable
          experiences.
        </motion.p>

        <motion.button
          className="hero-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={() => alert("Booking feature coming soon!")}
        >
          Explore Events
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
