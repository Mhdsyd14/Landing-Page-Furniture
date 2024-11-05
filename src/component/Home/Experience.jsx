import React from "react";
import halaman3 from "../../assets/halaman3.png";
const Experience = () => {
  return (
    <>
      <div
        className=" h-[625px]"
        style={{
          backgroundImage: `url(${halaman3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className=" w-[715px] h-full bg-[#642C0C] p-14 "
          style={{ opacity: 0.8 }}
        >
          <div className=" mt-7 text-white">
            <h5 className="  mx-1">Discover</h5>
            <h1 className=" text-5xl  font-playfair font-medium mt-6">
              Experience Modern <br /> Furniture Like Never
              <br /> Before
            </h1>
            <h5 className=" mt-5 text-justify">
              At our online store, we offer a wide range of modern furniture
              that combines quality craftsmanship, innovative design, and
              sustainable materials. Whether you're looking for a statement
              piece or a complete home makeover, our collection has something
              for every style and budget
            </h5>
            <div className=" mt-8 w-[680px] flex flex-row ">
              <div className="w-[350px]">
                <h4 className=" font-playfair">Quality</h4>
                <h5 className="mt-3">
                  Experience the finest craftmanship and attention to detail in
                  every piece
                </h5>
              </div>
              <div className="w-[350px]">
                <h4 className=" font-playfair">Design</h4>
                <h5 className="mt-3">
                  Discover modern furniture designs that are both functional and
                  aesthetically pleasing
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
