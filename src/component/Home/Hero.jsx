import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div
        className=" h-[505px] flex flex-col"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="  columns-12 flex flex-col text-5xl ml-[45px] font-playfair p-5 my-auto font-bold text-[#311e0b]">
          <h2>
            Discover the <span className="  text-[#C0772C]">Perfect</span>
          </h2>
          <h2>
            {" "}
            <span className=" text-[#C0772C]">Furniture</span> for Your
          </h2>
          <h2>Home</h2>
          <div className=" text-sm mt-4 font-playfair font-light  text-[#C0772C] ">
            <h4>
              Transform your livig space with our stylish and modern <br />
              furniture collections
            </h4>
          </div>
          <div className=" rounded-sm bg-[#C0772C] text-lg w-[110px] text-center p-2 mt-5 text-white font-playfair cursor-pointer">
            Shop Now
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
