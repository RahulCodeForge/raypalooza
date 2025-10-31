// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="footer-logo">
          RAY <span className="highlight">PALOOZA</span>
        </h2>
        <p>Events and Marketing | Crafted with Passion</p>
        <p className="copyright">
          © {new Date().getFullYear()} RAY PALOOZA. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
