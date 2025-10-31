// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import "../Style/Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    feedback:
      "Ray Palooza made my wedding magical! Every detail was perfect — elegant and dreamy.",
  },
  {
    name: "Rahul Verma",
    feedback:
      "Our corporate event was next level! Amazing stage setup and flawless management.",
  },
  {
    name: "Aisha Khan",
    feedback:
      "Loved the energy they bring! The lighting and vibe made the party unforgettable!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Client <span className="highlight">Testimonials</span>
      </motion.h2>

      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
          >
            <p>"{t.feedback}"</p>
            <h4>- {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
