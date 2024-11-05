import React, { useState } from "react";
import ArrowLeft from "../../assets/Arrow-left.png";
import ArrowRight from "../../assets/Arrow-right.png";
import { Link } from "react-router-dom";

const Featured = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 3);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 3);
  };

  return (
    <div className="container mx-auto px-7 py-16">
      <div className="mb-8 flex flex-row">
        <div className="flex flex-col text-[#311e0b] text-left">
          <h5>Discover</h5>
          <h2 className="text-3xl font-bold font-playfair">Featured</h2>
          <h5>Explore our selection of modern furniture for your home</h5>
        </div>

        <Link
          to="/product"
          className="rounded-lg bg-[#C0772C] w-[110px] h-[45px] text-white font-playfair p-3 text-center cursor-pointer ml-[715px] mt-[40px] font-bold"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {items.slice(currentIndex, currentIndex + 3).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#311e0b]">{item.name}</h3>
              <p className="text-[#311e0b]">{item.description}</p>
              <p className="text-lg font-bold text-[#311e0b]">
                Rp. {item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start mt-8 items-center">
        <div className="flex space-x-2 ml-3">
          {[...Array(Math.ceil(items.length / 3)).keys()].map((index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === Math.floor(currentIndex / 3)
                  ? "bg-[#642C0C]"
                  : "bg-[#E5D097]"
              }`}
            ></span>
          ))}
        </div>

        <div className="flex flex-row gap-6 ml-[950px]">
          <button
            onClick={handlePrev}
            className="text-white font-bold rounded-full"
            disabled={currentIndex === 0}
          >
            <img src={ArrowLeft} className="w-12" alt="left" />
          </button>
          <button
            onClick={handleNext}
            className="text-white font-bold rounded-full"
            disabled={currentIndex >= items.length - 3}
          >
            <img src={ArrowRight} className="w-12" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
