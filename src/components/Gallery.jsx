import React from "react";
import { motion } from "framer-motion";
import "../Style/Gallery.css";

const galleryImages = [
  "/images/01.jpg",
  "/images/event2.jpg",
  "/images/event3.jpg",
  "/images/event4.jpg",
  "/images/event5.jpg",
  "/images/event6.jpg",
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <motion.h2
        className="section-title neon-outline-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Gallery / Highlights
      </motion.h2>

      <div className="snake-gallery-container">
        {/* Infinite scrolling motion */}
        <motion.div
          className="snake-gallery-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <motion.div
              className="snake-image-wrapper"
              key={i}
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ duration: 0.4 }}
            >
              <img src={img} alt={`Event ${i + 1}`} className="snake-image" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
