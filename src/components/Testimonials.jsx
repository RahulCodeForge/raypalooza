import React from "react";
import { motion } from "framer-motion";
import "../Style/Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "RAY PALOOZA made our wedding unforgettable! Absolutely stunning experience.",
  },
  {
    name: "Sarah Lee",
    feedback:
      "Professional and futuristic event management for our corporate launch.",
  },
  {
    name: "Mike Johnson",
    feedback: "The music show was electrifying, thanks to the amazing team.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2
        className="section-title neon-outline-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Testimonials
      </motion.h2>

      <div className="testimonial-cards">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="testimonial-card neon-pink-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 * i, duration: 0.5 }}
            whileHover={{ boxShadow: "0 0 25px #ff00c8" }}
          >
            <p className="feedback">"{t.feedback}"</p>
            <p className="client-name">- {t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
