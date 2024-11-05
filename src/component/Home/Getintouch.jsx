import React from "react";
import map from "../../assets/map.png";
const Getintouch = () => {
  return (
    <>
      <div className=" bg-white flex flex-row p-12">
        <div className=" flex flex-col  w-[590px] ml-32 text-[#642C0C] gap-2">
          <h5>Solutions</h5>
          <h1 className=" text-4xl font-playfair font-semibold">
            Get in Touch
          </h1>
          <h5>
            Have a question or need assitance? Feel free to reach out to us!
          </h5>
        </div>
        <div className="  flex flex-col w-[490px] text-[#642C0C] gap-2 ml-36">
          <h3 className=" font-bold">Email</h3>
          <h5>contact@furniture.com</h5>
          <h3 className=" font-bold">Phone</h3>
          <h5>+62 00225 555</h5>
          <h3 className=" font-bold">Office</h3>
          <h5>Jl. Gatot Subroto, Bandung</h5>
        </div>
      </div>
      <div className="w-full mx-auto mb-7 p-4">
        <div className="w-[990px] mx-auto">
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kota%20bandung+(Furniture)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Getintouch;
