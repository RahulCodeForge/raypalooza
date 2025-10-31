import React, { useState } from "react";
import { motion } from "framer-motion";
import "../Style/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* ✅ Logo (clickable, no animation) */}
        <div className="logo">
          <a href="#hero">
            <img src="/1.png" alt="RAY PALOOZA" />
          </a>
        </div>

        {/* 🍔 Burger Icon for Mobile */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* ✨ Animated Navigation */}
        <motion.nav
          className={`nav ${menuOpen ? "active" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            "Home",
            "About",
            "Services",
            "Gallery",
            "Testimonials",
            "Contact",
          ].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              whileHover={{
                scale: 1.1,
                color: "#ff00ff",
                textShadow: "0 0 8px #ff00ff",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
