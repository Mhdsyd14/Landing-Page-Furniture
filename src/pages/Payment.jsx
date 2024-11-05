import React from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Payment/Hero";
import Order from "../component/Payment/Order";
import Shipping from "../component/Payment/Shipping";
import Footer from "../component/Home/Footer";

const Payment = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Order />
      <Shipping />
      <Footer />
    </>
  );
};

export default Payment;
