import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./index.css";
import "./Style/Common.css";
// import BookEventPopup from "./components/BookEventPopup";
import BookEvent from "./components/Bookevent";
// import ContactSection from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <OurServices />
        <Gallery />
        <Testimonials />
        {/* <ContactSection /> */}
        <BookEvent />
      </main>
      <Footer />
      {/* <BookEventPopup /> */}
    </>
  );
}
