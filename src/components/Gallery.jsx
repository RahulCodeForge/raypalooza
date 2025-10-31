// src/components/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";
import "../Style/Gallery.css";

const Gallery = () => {
  const images = [
    "/assets/event1.jpg",
    "/assets/event2.jpg",
    "/assets/event3.jpg",
    "/assets/event4.jpg",
    "/assets/event5.jpg",
    "/assets/event6.jpg",
  ];

  return (
    <section className="gallery-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our <span className="highlight">Gallery</span>
      </motion.h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <motion.div
            className="gallery-item"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <img src={src} alt={`Event ${i}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
