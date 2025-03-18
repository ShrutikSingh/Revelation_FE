import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 mt-3 text-[20px] font-bold px-5 py-2  transition-all duration-300 ">
      {/* Question Section */}
      <div
        className="flex items-center lg:p-1 p-0 justify-between cursor-pointer w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[14px] lg:text-[16px] ">{question}</p>
        <button className="p-0 m-0 bg-transparent border-none outline-none flex-shrink-0">
          <IoIosArrowDown
            className={`text-white text-sm transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Answer Section (Smooth Height Transition) */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-normal mt-3 text-sm text-white">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
