import React from "react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className=" bg-[#642C0C] p-5 shadow-lg">
        <nav className="flex items-center space-x-2 text-white ml-12 gap-5">
          <Link to="/" className="hover:text-gray-700 opacity-25">
            Home
          </Link>
          <ChevronRightIcon className="h-5 w-5" />
          <span className=" opacity-25">Product</span>
          <div className="h-5 w-0.5 bg-white" />
          <h1>Sofa</h1>
        </nav>
      </div>
    </>
  );
};

export default Hero;
