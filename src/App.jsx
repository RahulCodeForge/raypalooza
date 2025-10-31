import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
