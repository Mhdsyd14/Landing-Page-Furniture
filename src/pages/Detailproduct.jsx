import React from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Detail/Hero";
import Detail from "../component/Detail/Detail";
import Footer from "../component/Home/Footer";
import { useParams } from "react-router-dom";

import data from "../data.json";

const Detailproduct = () => {
  const { id } = useParams();

  const product = data.find((item) => item.id.toString() === id);
  console.log(product);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Detail product={product} />
        <Footer />
      </div>
    </>
  );
};

export default Detailproduct;
