import React from "react";
import Group from "../../assets/Group.png";
import halaman4 from "../../assets/halaman4.png";

const Quality = () => {
  return (
    <>
      <div
        className="h-[625px] bg-no-repeat p-7"
        style={{
          backgroundImage: `url(${Group})`,
          backgroundSize: "60% auto",
          backgroundPosition: "left bottom",
        }}
      >
        <div className="flex flex-row mt-28 ml-5 text-[#642C0C]">
          <img
            src={halaman4}
            alt="Gambar"
            className=" rounded-lg w-[590px] h-[390px] object-cover"
          />
          <div className="  ml-5 w-full p-5">
            <h1 className="ml-1">Quality</h1>
            <h1 className=" text-4xl font-playfair mt-3">
              Experience the Best In <br /> Modern Furniture
            </h1>
            <h1 className=" mt-3">
              Discover our impressive growth, exceptional customer satisfaction,
              and <br /> wide range of high-quality products
            </h1>
            <div className="  flex flex-row mt-4">
              <div>
                <h1 className=" text-5xl font-playfair">50%</h1>
                <h1 className="mt-4">increase in Customer Satisfaction</h1>
              </div>
              <div className="ml-12">
                <h1 className=" text-5xl font-playfair">50%</h1>
                <h1 className="mt-4">Growth in Product Selection</h1>
              </div>
            </div>
            <div className="flex flex-row mt-5 gap-12 text-2xl font-playfair items-center">
              <h1
                className=" rounded-lg p-2 "
                style={{ border: "2px solid #642C0C" }}
              >
                Learn More
              </h1>
              <h1>Sign Up</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
