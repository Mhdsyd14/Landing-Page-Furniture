import React from "react";
import Heropayment from "../../assets/Heropayment.png";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div
        className=" h-[425px] flex flex-col"
        style={{
          backgroundImage: `url(${Heropayment})`,
          backgroundSize: "cover",
          backgroundPosition: "0px -400px ",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" p-12 ml-5 text-white my-auto">
          <h1 className=" text-5xl font-playfair font-semibold">Payment</h1>
          <nav className="flex items-center space-x-2 mt-5">
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
            <ChevronRightIcon className="h-5 w-5" />
            <span>Cart</span>
            <ChevronRightIcon className="h-5 w-5" />
            <span>Payment</span>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Hero;
