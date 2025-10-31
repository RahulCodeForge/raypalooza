import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Style/OurServices.css";

const services = [
  {
    name: "Weddings",
    img: "/images/111.jpg",
    desc: "Luxury wedding planning with breathtaking themes and decor.",
  },
  {
    name: "Corporate Events",
    img: "/images/01.jpg",
    desc: "Professional event management for meetings, conferences, and launches.",
  },
  {
    name: "Concerts",
    img: "/images/concert.jpg",
    desc: "Power-packed live performances, stage setups, and artist management.",
  },
  {
    name: "Birthday Parties",
    img: "/images/birthday.jpg",
    desc: "Creative and colorful themes for memorable birthday celebrations.",
  },
  {
    name: "Destination Events",
    img: "/images/destination.jpg",
    desc: "Plan your dream event at exotic destinations with our expert team.",
  },
  {
    name: "Fashion Shows",
    img: "/images/fashion.jpg",
    desc: "Elegant production and runway experiences tailored for your brand.",
  },
];

const OurServices = () => {
  const [current, setCurrent] = useState(0);
  const total = services.length;
  const visibleCount = 3;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  // Get visible items (looping effect)
  const visibleItems = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(services[(current + i) % total]);
  }

  return (
    <section className="services-section">
      <motion.h2
        className="section-title neon-outline-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h2>

      <div className="carousel-container">
        <AnimatePresence>
          {visibleItems.map((service, i) => (
            <motion.div
              key={service.name}
              className="service-card glassmorphism-panel"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 30px #ff00c8",
              }}
            >
              <div className="service-image-wrapper">
                <img
                  src={service.img}
                  alt={service.name}
                  className="service-img"
                />
              </div>
              <h3 className="service-name neon-text">{service.name}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurServices;
