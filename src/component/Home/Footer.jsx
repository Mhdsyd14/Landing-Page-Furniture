import React from "react";
import white from "../../assets/white.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#642C0C] p-12 flex flex-row">
        <div className=" w-[350px] ml-32 text-white">
          <img src={white} alt="logo" />
          <h1 className=" font-bold mt-5">Office</h1>
          <h5>Jl.Gatot Subroto, Bandung</h5>
        </div>
        <div className=" flex flex-row ml-[390px]">
          <div className="w-[90px]  text-white">
            <h5 className=" opacity-30">Link</h5>
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Product</h5>
            <h5>Contact</h5>
          </div>
          <div className="w-[100px]  text-white">
            <h5 className=" opacity-30">Help</h5>
            <h5>Payment Option</h5>
            <h5>Return</h5>
            <h5>Privacy Policy</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
