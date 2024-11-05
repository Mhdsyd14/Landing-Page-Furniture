import React from "react";
import ruangan from "../../assets/ruangan.png";

const Tentang = () => {
  return (
    <>
      <div className=" bg-white flex flex-row p-3">
        <div className="  w-[690px] p-8 ml-9 font-playfair flex flex-col">
          <h1 className=" text-4xl font-semibold">
            Transforming spaces with <br /> modern furniture that <br />{" "}
            combines style and <br /> functionally
          </h1>
          <h1 className=" text-justify mt-8">
            Our brand was born out of a passion for creating modern furniture
            that elevates living spaces. With a focus on innovative design and
            quality craftsmanship, we strive to provide furniture that not only
            looks great but also enhances the way you live
          </h1>
        </div>
        <div className=" w-[410px] ml-20">
          <img src={ruangan} alt="ruangan" />
        </div>
      </div>
    </>
  );
};

export default Tentang;
