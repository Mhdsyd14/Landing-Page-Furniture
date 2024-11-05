import React, { useState } from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Product/Hero";
import Filter from "../component/Product/Filter";
import Card from "../component/Product/Card";
import Footer from "../component/Home/Footer";

import data from "../data.json";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalResults = data.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const sortingOptions = [{ value: "default", label: "Default" }];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar />
      <Hero />
      <Filter
        totalResults={totalResults}
        sortingOptions={sortingOptions}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        currentResultsCount={currentItems.length}
      />
      <Card items={currentItems} />
      <div className="flex flex-row p-5">
        <div className="flex flex-row gap-4 mx-auto">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`rounded-md p-2 text-center w-[50px] text-white ${
                currentPage === index + 1 ? "bg-[#C0772C]" : "bg-[#E5D097]"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="rounded-md bg-[#E5D097] p-2 text-center w-[85px] text-white"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
