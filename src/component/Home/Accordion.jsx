import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-2 border-b-2 border-[#642C0C] w-[850px] mx-auto">
      <button
        className="w-full text-left px-4 py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center text-[#642C0C] font-bold">
          <span>{title}</span>
          <span className="w-5 h-5">
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-[#642C0C] opacity-30">{content}</div>
      )}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "How do i care for my furniture?",
      content:
        "Proper care for your furniture includes regular cleaning and avoiding direct sunlight",
    },
    {
      title: "What is your delivery process?",
      content:
        "We offer fast and reliable delivery services to ensure your furniture arrives safely",
    },
    {
      title: "What is your returns policy?",
      content:
        "If you're not satisfied with your purchase, we accept returns within 30 days",
    },
    {
      title: "Can i customize my furniture?",
      content:
        "Yes, we offer customization options for select furniture pieces",
    },
    {
      title: "Do you offer warranty",
      content:
        "Yes, we provide a warranty for our furniture to ensure customer satisfaction",
    },
  ];

  return (
    <div className="mx-auto mt-4 bg-[#e9e8e8c2] p-9">
      <div className=" text-center text-[#642C0C]">
        <h1 className=" text-3xl font-playfair font-bold">
          Frequently Asked Questions
        </h1>
        <h5 className=" opacity-30 mt-4">
          Find answerss to common questions about furniture care, delivery, and
          returns policies{" "}
        </h5>
      </div>
      <div className=" mt-6">
        {items.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
      <div className=" text-center text-[#642C0C] mt-8">
        <h1 className=" text-4xl font-playfair font-semibold">
          Still have questions?
        </h1>
        <h5 className=" opacity-30 mt-3">
          Contact our support team for assistance
        </h5>
        <div className=" rounded-lg bg-[#C0772C] p-2 text-white w-[95px] mx-auto mt-3">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Accordion;
