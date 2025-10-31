import React from "react";
import { motion } from "framer-motion";
import "../Style/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <motion.h2
        className="section-title neon-outline-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        className="contact-form glassmorphism-panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted! We will get back to you shortly.");
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="contact-textarea"
          rows="5"
        ></textarea>

        <motion.button
          type="submit"
          className="submit-button neon-glow"
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px #ff00c8" }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
