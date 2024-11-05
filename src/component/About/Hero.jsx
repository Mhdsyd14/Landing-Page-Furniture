import React from "react";
import Heroabout from "../../assets/Heroabout.png";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div
        className=" h-[425px] flex flex-col"
        style={{
          backgroundImage: `url(${Heroabout})`,
          backgroundSize: "cover",
          backgroundPosition: "0px -300px ",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" p-12 ml-5 text-white my-auto">
          <h1 className=" text-5xl font-playfair font-semibold">About</h1>
          <nav className="flex items-center space-x-2 mt-5">
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
            <ChevronRightIcon className="h-5 w-5" />
            <span>About</span>
            <ChevronRightIcon className="h-5 w-5" />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Hero;
