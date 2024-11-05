import React, { useState } from "react";
import bca from "../../assets/icons/bca.png";
import bni from "../../assets/icons/bni.png";
import bri from "../../assets/icons/bri.png";
import dana from "../../assets/icons/dana.png";
import gopay from "../../assets/icons/gopay.png";
import link from "../../assets/icons/link.png";
import mandiri from "../../assets/icons/mandiri.png";
import ovo from "../../assets/icons/ovo.png";
import permata from "../../assets/icons/permata.png";
import shopee from "../../assets/icons/shopee.png";

const Wallet = ({ subtotal, shippingCost, total }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const formatRupiah = (number) => {
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <>
      <div className="flex flex-row p-3">
        <div className="bg-white w-[650px] flex flex-col shadow-lg ml-14 p-3 border border-[#C0772C] rounded-md">
          <h2 className="text-xl font-semibold mb-4">E-Wallet</h2>
          <div className="mb-4 space-y-4">
            <label
              htmlFor="dana"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="dana"
                name="payment"
                checked={selectedOption === "dana"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "dana" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img src={dana} alt="Dana" className="w-4 h-4 object-contain" />
              </div>
              <span>Dana</span>
            </label>

            <label
              htmlFor="ovo"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="ovo"
                name="payment"
                checked={selectedOption === "ovo"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "ovo" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img src={ovo} alt="OVO" className="w-4 h-4 object-contain" />
              </div>
              <span>OVO</span>
            </label>

            <label
              htmlFor="gopay"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="gopay"
                name="payment"
                checked={selectedOption === "gopay"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "gopay" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img
                  src={gopay}
                  alt="Gopay"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span>Gopay</span>
            </label>

            <label
              htmlFor="shopeepay"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="shopeepay"
                name="payment"
                checked={selectedOption === "shopeepay"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "shopeepay" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img
                  src={shopee}
                  alt="ShopeePay"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span>ShopeePay</span>
            </label>

            <label
              htmlFor="linkaja"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="linkaja"
                name="payment"
                checked={selectedOption === "linkaja"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "linkaja" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img
                  src={link}
                  alt="Link Aja"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span>Link Aja</span>
            </label>
          </div>

          <h2 className="text-xl font-semibold mb-4">ATM/Bank Transfer</h2>
          <div className="space-y-4">
            <label
              htmlFor="bca"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="bca"
                name="payment"
                checked={selectedOption === "bca"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "bca" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img
                  src={bca}
                  alt="Bank BCA"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span>Bank BCA</span>
            </label>

            <label
              htmlFor="mandiri"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="mandiri"
                name="payment"
                checked={selectedOption === "mandiri"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "mandiri" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img
                  src={mandiri}
                  alt="Bank Mandiri"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span>Bank Mandiri</span>
            </label>

            <label
              htmlFor="bri"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="bri"
                name="payment"
                checked={selectedOption === "bri"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "bri" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img
                  src={bri}
                  alt="Bank BRI"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span>Bank BRI</span>
            </label>

            <label
              htmlFor="permata"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="permata"
                name="payment"
                checked={selectedOption === "permata"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "permata" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img
                  src={permata}
                  alt="Bank Permata"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span>Bank Permata</span>
            </label>

            <label
              htmlFor="bni"
              className="flex items-center cursor-pointer space-x-2"
            >
              <input
                type="radio"
                id="bni"
                name="payment"
                checked={selectedOption === "bni"}
                onChange={handleOptionChange}
                className="hidden"
              />
              <div
                className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 ease-in-out ${
                  selectedOption === "bni" ? "bg-blue-500" : "bg-white"
                }`}
              >
                <img src={bni} alt="BNI" className="w-4 h-4 object-contain" />
              </div>
              <span>BNI</span>
            </label>
          </div>
        </div>
        <div className=" w-[423px] h-[350px] ml-12 rounded-md border border-[#C0772C] p-4 flex flex-col">
          <div className=" flex flex-row items-center gap-4">
            <input
              type="text"
              className="block w-[290px] p-2 border border-gray-300 rounded-lg mt-4"
              placeholder="Insert voucher"
            />
            <button className=" border border-[#642C0C] p-2 mt-4 rounded-sm w-[90px] font-bold">
              Use
            </button>
          </div>
          <h1 className=" mt-3 opacity-30">View available vouchers</h1>
          <div className=" h-[2px] w-[390px] mt-3 bg-[#642C0C] opacity-10"></div>
          <div className=" flex flex-row mt-6 gap-[210px]">
            <h1 className="text-[#642C0C] font-medium">Subtotal</h1>
            <h1>{formatRupiah(subtotal)}</h1>
          </div>
          <div className=" flex flex-row mt-2 gap-[170px]">
            <h1 className="text-[#642C0C] font-medium">Shipping Cost</h1>
            <h1>{formatRupiah(shippingCost)}</h1>
          </div>
          <div className=" h-[2px] w-[390px] mt-5 bg-[#642C0C] opacity-10"></div>
          <div className=" flex flex-row mt-2 gap-[230px]">
            <h1 className="text-[#642C0C] font-medium">Total</h1>
            <h1 className=" font-bold text-[#642C0C] ">
              {formatRupiah(total)}
            </h1>
          </div>
          <a
            href="#"
            className=" rounded-md w-full bg-[#C0772C] mt-5 p-2 text-center text-white font-playfair font-bold"
          >
            Pay Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Wallet;
