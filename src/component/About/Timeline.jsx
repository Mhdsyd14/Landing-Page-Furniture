// src/components/Timeline.js

import React from "react";

const Timeline = () => {
  return (
    <>
      <div className=" flex flex-row">
        <div className=" flex flex-col w-[350px] ml-20 text-[#642C0C]">
          <h1>Discover</h1>
          <h1 className=" font-playfair text-3xl font-semibold ">
            Our Journey and <br /> Achievements
          </h1>
          <div className=" flex flex-row items-center gap-3 mt-4">
            <a href="#" className=" rounded-md border border-[#642C0C] p-2">
              {" "}
              Learn More
            </a>
            <a href="#"> Sign Up</a>
          </div>
        </div>
        <div className="relative flex flex-col items-start p-6  w-[450px] ml-[360px]">
          <div className="absolute left-[22px] top-6 w-1 h-[335px] bg-[#642C0C]"></div>
          <div className="relative pl-8 mb-10">
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#642C0C] rounded-full -ml-2"></div>
            <h3 className="text-lg font-bold">Millestiones Overview</h3>
            <p className="text-sm">
              Experience our jurney through the years, from humble <br />{" "}
              beginnings to industry leaders
            </p>
          </div>

          <div className="relative pl-8 mb-10">
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#642C0C] rounded-full -ml-2"></div>
            <h3 className="text-lg font-bold">Key Achievements</h3>
            <p className="text-sm">
              Explore our notable accomplishments and milestones that <br />{" "}
              have shaped our succes
            </p>
          </div>

          <div className="relative pl-8 mb-10">
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#642C0C] rounded-full -ml-2"></div>
            <h3 className="text-lg font-bold">Company Growth</h3>
            <p className="text-sm">
              Discover how we have grown and evolved over the years to <br />{" "}
              meet customer needs
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute top-0 left-0 w-4 h-4 bg-[#642C0C] rounded-full -ml-2"></div>
            <h3 className="text-lg font-bold">Innovation</h3>
            <p className="text-sm">
              Learn about our innovative solusitons that have <br />{" "}
              revolutionized the furniture industry
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
