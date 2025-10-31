import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* === About Section === */}
        <div className="footer-col about">
          <h3 className="footer-title">RAY PALOOZA</h3>
          <p>
            Your one-stop destination for luxurious weddings, corporate events,
            concerts, and unforgettable celebrations. We blend creativity,
            technology, and passion to make every event spectacular.
          </p>
        </div>

        {/* === Services === */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Luxury Weddings</li>
            <li>Corporate Events</li>
            <li>Music Shows</li>
            <li>Birthday Parties</li>
          </ul>
        </div>

        {/* === Quick Links === */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* === Contact Section === */}
        <div className="footer-col contact">
          <h4>Contact Us</h4>
          <p>Email: info@raypalooza.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, India</p>

          {/* === Social Icons === */}
          <div className="social-icons">
            <a href="#!" aria-label="Facebook" className="neon-social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" aria-label="Twitter" className="neon-social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" aria-label="Instagram" className="neon-social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" aria-label="LinkedIn" className="neon-social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <span>RAY PALOOZA</span> — All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
