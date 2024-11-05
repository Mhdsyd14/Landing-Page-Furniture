import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import halaman1 from "../../assets/halaman1.png";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
  };

  return (
    <div className="flex flex-row p-8">
      <div className="w-[750px]">
        <div className="relative overflow-hidden shadow-md rounded-lg">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-white text-[#642C0C]">
              <tr className="border-b border-[#642C0C]">
                <th className="py-2 text-center font-bold p-4"></th>
                <th className="py-2 text-center font-bold p-4">Product</th>
                <th className="py-2 text-center font-bold p-4">Price</th>
                <th className="py-2 text-center font-bold p-4">Quantity</th>
                <th className="py-2 text-center font-bold p-4">Subtotal</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#642C0C]">
              <tr className="py-5">
                <td className="py-5 text-center p-4  w-[150px]">
                  <img src={halaman1} alt="gambar" />
                </td>
                <td className="py-5 text-center p-4">YY-853581</td>
                <td className="py-5 text-center p-4">Notebook Basic</td>
                <td className="py-5 text-center p-4">
                  <div className="border border-[#642C0C] rounded-sm mt-3 w-[100px] h-[40px] flex items-center justify-center">
                    <button
                      className="ml-[3px] mt-[2px] p-1"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      className="mr-[3px] mt-[2px] p-1"
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-5 text-center p-4">$ {299 * quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white w-[490px] ml-8 shadow-lg flex flex-col p-5 text-[#642C0C]">
        <h1 className="text-3xl font-playfair text-center font-bold">
          Cart Totals
        </h1>
        <div className="flex flex-row mt-6 items-center">
          <h1 className="font-bold">Subtotal</h1>
          <h1 className="opacity-30 ml-auto">Rp.1.250.000</h1>
        </div>
        <div className="flex flex-row items-center">
          <h1 className="font-bold">Total</h1>
          <h1 className="font-bold ml-auto text-2xl">Rp.1.250.000</h1>
        </div>
        <NavLink
          to="/payment"
          className="rounded-lg bg-[#C0772C] p-3 mt-5 text-white font-playfair font-bold text-center"
        >
          Continue To Payment
        </NavLink>
      </div>
    </div>
  );
};

export default Checkout;
