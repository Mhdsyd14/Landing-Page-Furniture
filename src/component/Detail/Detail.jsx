import {
  ChevronRightIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import React, { useState } from "react";
import halaman1 from "../../assets/halaman1.png";
import halaman2 from "../../assets/halaman2.png";
import halaman3 from "../../assets/halaman3.png";
import halaman4 from "../../assets/halaman4.png";
import star from "../../assets/star.png";
import shipping from "../../assets/shipping.png";

const Detail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoved, setIsLoved] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };

  const sizeButtonClasses = (size) =>
    `rounded-sm w-8 text-center ${
      selectedSize === size
        ? "bg-[#642C0C] text-white"
        : "bg-[#CCC4B4] text-[#642C0C]"
    }`;

  if (!product) {
    return (
      <div className="p-7">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline"> Produk tidak ditemukan.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.36 5.652a.5.5 0 10-.707.707L9.293 10l-3.64 3.641a.5.5 0 00.707.707L10 10.707l3.641 3.64a.5.5 0 00.707-.707L10.707 10l3.641-3.641a.5.5 0 000-.707z" />
            </svg>
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row p-9">
        <div className="w-[650px] ml-5">
          <div className="grid grid-cols-3 grid-rows-5 gap-4">
            <div className="col-span-3 row-span-3">
              <img
                src={product.image}
                className="w-full h-[390px] object-fill"
                alt="halaman1"
              />
            </div>
            <div className="row-span-2 row-start-4">
              <img src={halaman2} alt="halaman2" />
            </div>
            <div className="row-span-2 row-start-4">
              <img src={halaman3} className=" h-[111px]" alt="halaman3" />
            </div>
            <div className="row-span-2 row-start-4">
              <img src={halaman4} alt="halaman4" />
            </div>
          </div>
        </div>
        <div className="w-[650px] ml-5 text-[#642C0C] flex flex-col">
          <h1 className="text-5xl font-playfair font-semibold">
            {product.name}
          </h1>
          <h1 className="text-3xl font-semibold mt-3">
            Rp. {product.price.toLocaleString()}
          </h1>
          <div className="flex flex-row items-center">
            <img src={star} alt="bintang" className="mt-3" />
            <div className="h-5 w-0.5 bg-[#642C0C] mt-3" />
            <h1 className="mt-3 ml-3 text-[#E5D097]">5 Customer Review</h1>
          </div>
          <div className="text-[#E5D097] mt-4">
            <h1>
              This compact sofa fits in small areas and is perfect for family
              parties and continuous TV viewing. It has a neat design and is
              easy to lift when you want to refurbish, clean or move.
            </h1>
          </div>
          <div className="mt-3 flex flex-col text-[#642C0C]">
            <h1>Size</h1>
            <div className="flex flex-row gap-3 mt-3">
              <button
                className={sizeButtonClasses("L")}
                onClick={() => handleSizeClick("L")}
              >
                L
              </button>
              <button
                className={sizeButtonClasses("XL")}
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </button>
              <button
                className={sizeButtonClasses("XS")}
                onClick={() => handleSizeClick("XS")}
              >
                XS
              </button>
            </div>
          </div>
          <div className="border border-[#642C0C] rounded-sm mt-3 w-[70px] h-[40px] flex items-center justify-center">
            <button
              className="ml-[3px] mt-[2px]"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="ml-2">{quantity}</span>
            <button className="ml-2" onClick={() => handleQuantityChange(1)}>
              +
            </button>
          </div>
          <div className="flex flex-row mt-5">
            <a
              href="#"
              className="rounded-md w-[145px] bg-[#C0772C] p-2 text-center text-white flex items-center justify-center gap-2"
            >
              <ShoppingCartIcon className="h-5 w-5 text-white" />
              Add to cart
            </a>
            <button
              onClick={handleLoveClick}
              className={`ml-3 p-2 rounded-md ${
                isLoved ? "bg-[#C0772C]" : "bg-gray-200"
              }`}
            >
              <HeartIcon
                className={`h-6 w-6 ${
                  isLoved ? "text-white" : "text-[#C0772C]"
                }`}
              />
            </button>
          </div>
          <div className="h-1 w-[620px] bg-[#642C0C] mt-5" />
          <div className=" flex flex-row mt-5 items-center gap-1">
            <img
              src={shipping}
              className=" w-[45px] object-scale-down"
              alt="shipping"
            />
            <div className=" flex flex-col text-[#642C0C] ml-5">
              <h1 className=" font-bold">Shipping costs start from</h1>
              <h1>Calculate now</h1>
            </div>
            <ChevronRightIcon className="h-5 w-5 ml-[190px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
