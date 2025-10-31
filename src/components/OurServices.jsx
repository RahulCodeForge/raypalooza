// src/components/OurServices.jsx
import React from "react";
import { motion } from "framer-motion";
import "../Style/OurServices.css";

const services = [
  {
    title: "Luxury Weddings",
    desc: "From decor to coordination — we craft elegant and unforgettable celebrations.",
  },
  {
    title: "Corporate Events",
    desc: "Make your brand stand out with professional event management and creative production.",
  },
  {
    title: "Music & Parties",
    desc: "DJ nights, concerts, and high-energy parties — we bring rhythm to your stage.",
  },
];

const OurServices = () => {
  return (
    <section className="services-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our <span className="highlight">Services</span>
      </motion.h2>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
