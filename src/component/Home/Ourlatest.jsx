import React from "react";
import halaman4 from "../../assets/halaman4.png";

const Ourlatest = () => {
  return (
    <>
      <div
        className=" h-[355px]"
        style={{
          backgroundImage: `url(${halaman4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className=" bg-[#642C0C] w-[715px] h-full"
          style={{ backgroundColor: "rgba(100, 44, 12, 0.8)" }}
        >
          <div className=" p-[55px] text-white">
            <h1 className=" font-playfair text-3xl mt-5 ">
              Discover Our Latest <br />
              Furniture Collections
            </h1>
            <h1 className=" mt-6">
              Explore our new arrivals and seasonal collections to find the
              perfect <br /> furniture for your home.
            </h1>
            <div className=" flex flex-row mt-7">
              <div className=" rounded-lg bg-[#C0772C] p-3">Shop Now</div>
              <div className=" rounded-lg border border-[#C0772C] ml-2 p-3">
                Browse
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourlatest;
