import React from "react";
import bintang from "../../assets/bintang.png";
import orang1 from "../../assets/orang1.png";
import orang2 from "../../assets/orang2.png";
import orang3 from "../../assets/orang3.png";

const Customer = () => {
  return (
    <>
      <div className="  h-max">
        <div className=" flex flex-col p-40">
          <h1 className=" text-3xl font-playfair font-bold text-[#642C0C]">
            Happy Customers
          </h1>
          <h5 className=" text-[#642C0C] opacity-30 mt-3">
            Hear what our customers have to say about us
          </h5>
          <div className=" flex flex-row">
            <div className=" flex flex-col mt-5 gap-3 text-[#642C0C]  w-[350px] ">
              <img src={bintang} alt="bintang" className=" w-32" />
              <h1 className=" font-bold ">
                Our experience with this company has <br />
                been outstanding
              </h1>
              <img src={orang1} className=" w-16 rounded-full" alt="orang1" />
              <h1>John Doe</h1>
              <h5 className=" text-xs opacity-50">CEO, XYZ Company</h5>
            </div>
            <div className=" flex flex-col mt-5 gap-3 text-[#642C0C]  w-[350px] ">
              <img src={bintang} alt="bintang" className=" w-32" />
              <h1 className=" font-bold ">
                Their products are top-notch and their <br />
                customer service is exceptional
              </h1>
              <img src={orang2} className=" w-16 rounded-full" alt="orang1" />
              <h1>John Doe</h1>
              <h5 className=" text-xs opacity-50">CEO, XYZ Company</h5>
            </div>
            <div className=" flex flex-col mt-5 gap-3 text-[#642C0C]  w-[350px] ">
              <img src={bintang} alt="bintang" className=" w-32" />
              <h1 className=" font-bold ">
                I highlhy recommend this company for all <br />
                your furniture needs
              </h1>
              <img src={orang3} className=" w-16 rounded-full" alt="orang1" />
              <h1>John Doe</h1>
              <h5 className=" text-xs opacity-50">CEO, XYZ Company</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
