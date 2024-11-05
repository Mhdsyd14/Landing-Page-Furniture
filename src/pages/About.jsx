import React from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/About/Hero";
import Tentang from "../component/About/Tentang";
import Footer from "../component/Home/Footer";
import Timeline from "../component/About/Timeline";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />
      <Timeline />
      <Footer />
    </>
  );
};

export default About;
