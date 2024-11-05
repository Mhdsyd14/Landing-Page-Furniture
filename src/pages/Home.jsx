import React from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Home/Hero";
import Featured from "../component/Home/Featured";
import Experience from "../component/Home/Experience";
import Quality from "../component/Home/Quality";
import Ourlatest from "../component/Home/Ourlatest";
import Customer from "../component/Home/Customer";
import Accordion from "../component/Home/Accordion";
import Getintouch from "../component/Home/Getintouch";
import Footer from "../component/Home/Footer";

import data from "../data.json";

const Home = () => {
  console.log(data);
  return (
    <>
      <Navbar />
      <Hero />
      <Featured items={data} />
      <Experience />
      <Quality />
      <Ourlatest />
      <Customer />
      <Accordion />
      <Getintouch />
      <Footer />
    </>
  );
};

export default Home;
