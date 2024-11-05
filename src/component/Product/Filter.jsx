import React from "react";

const Filter = ({
  totalResults,
  sortingOptions,
  currentPage,
  itemsPerPage,
  currentResultsCount,
}) => {
  return (
    <>
      <div className="bg-white p-12 flex flex-row shadow-xl">
        <div className="text-[#642C0C] flex flex-row gap-5 items-center w-[410px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <h1 className="font-bold">Filter</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {(currentPage - 1) * itemsPerPage + currentResultsCount} of{" "}
          {totalResults} results
        </div>
        <div className="flex flex-row gap-5 ml-[490px] text-[#642C0C]  w-[490px]">
          <h1 className="font-bold">Show</h1>
          <h1>{currentResultsCount}</h1>
          <h1 className="font-bold">Sort by</h1>
          <select>
            {sortingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
