import React from "react";

const Order = () => {
  return (
    <>
      <div className="flex flex-col p-8">
        <div className="ml-10">
          <h1 className="text-3xl font-playfair font-bold">Payment</h1>
          <h1 className="mt-4">2 From 2 Step</h1>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="h-1 w-[290px] bg-[#C0772C] mt-4" />
              <div className="flex flex-row items-center gap-3 mt-3">
                <h1 className="text-white bg-[#642C0C] w-8 h-8 flex items-center justify-center rounded-full">
                  1
                </h1>
                <h1>Set Up Order</h1>
              </div>
            </div>
            <div className="flex flex-col ml-3 ">
              <div className="h-1 w-[290px] bg-[#C0772C] mt-4" />
              <div className="flex flex-row items-center gap-3 mt-3">
                <h1 className="text-white bg-[#642C0C] w-8 h-8 flex items-center justify-center rounded-full">
                  2
                </h1>
                <h1>Pay Order</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
