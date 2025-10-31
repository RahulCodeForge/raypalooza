import React, { useState, useEffect } from "react";
import "../Style/BookEventPopup.css";

export default function BookEventPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  });

  // Show popup when user scrolls halfway down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setShowPopup(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Your booking request has been sent!");
    setShowPopup(false);
    setFormData({ name: "", email: "", event: "", message: "" });
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay" onClick={() => setShowPopup(false)}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          &times;
        </button>
        <h2 className="popup-title gradient-text">Book Your Event Now</h2>

        <form className="popup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="event"
            placeholder="Event Type / Name"
            value={formData.event}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="primary-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
