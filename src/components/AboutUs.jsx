import React from "react";
import { motion } from "framer-motion";
import "../Style/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <motion.div
        className="aboutus-container glassmorphism-outline"
        initial={{ rotateY: 90, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        animate={{ rotate: [0, 360] }}
      >
        <motion.h2
          className="section-title neon-outline-text"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          About <span className="highlight">Us</span>
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          At <span className="brand-name">RAY PALOOZA</span>, we craft
          experiences that merge art, design, and innovation. From luxury
          weddings to futuristic events, our vision is to make every celebration
          glow brighter than ever before.
        </motion.p>

        <motion.button
          className="about-btn neon-glow"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px #ff0099",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Know More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
