import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Method/Hero";
import Order from "../component/Method/Order";
import Wallet from "../component/Method/Wallet";
import Footer from "../component/Home/Footer";

const Method = () => {
  const location = useLocation();
  const { subtotal, shippingCost, total } = location.state || {
    subtotal: 0,
    shippingCost: 0,
    total: 0,
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Order />
      <Wallet subtotal={subtotal} shippingCost={shippingCost} total={total} />
      <Footer />
    </>
  );
};

export default Method;
