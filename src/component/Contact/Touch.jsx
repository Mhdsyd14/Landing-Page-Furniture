import React from "react";

const Touch = () => {
  return (
    <>
      <div className=" bg-white flex flex-col p-14">
        <div className="  flex flex-col font-playfair gap-4 text-[#642C0C]">
          <h1 className=" text-4xl font-bold">Get in Touch</h1>
          <h1 className=" opacity-30">
            Have a question or need assistance? Feel free to reach out to us!
          </h1>
        </div>
        <div className=" flex flex-row mt-5">
          <div className="  w-[350px] text-[#642C0C]">
            <h1 className=" font-bold">Email</h1>
            <h1>Contact@furniture.com</h1>
            <h1 className=" font-bold mt-5">Phone</h1>
            <h1>+62 00225 555</h1>
            <h1 className=" font-bold mt-5">Office</h1>
            <h1>Jl. Gatot Subroto, Bandung</h1>
          </div>
          <div className=" flex flex-col  w-[750px] ml-40 ">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#642C0C] font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-[#C0772C] rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#642C0C] font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full p-2 border border-[#C0772C] rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#642C0C] font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-2 border border-[#C0772C] rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#642C0C] font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-2 border border-[#C0772C] rounded"
                />
              </div>
              <button
                type="submit"
                className="w-[125px] py-2 bg-[#C0772C] text-white font-bold rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;
