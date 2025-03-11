import React from "react";

const DashboardButton = ({ link, content, onClick }) => {
  return onClick ? (
    <button
      onClick={onClick}
      className="relative inline-flex items-center px-6 py-2 text-white text-sm font-bold border-2 border-red-600 uppercase tracking-widest transition-all duration-300 group ml-2"
    >
      {/* Outer border effect */}
      <span className="absolute inset-0 border-2 border-red-600 -translate-x-1 translate-y-1 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300"></span>

   
      <span className="absolute inset-[0px] bg-black"></span>

      {/* Main Button Content */}
      <span className="relative flex items-center gap-3 z-10">
        {content}
        <span className="text-xl">→</span>
      </span>
    </button>
  ) : (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative ml-2 inline-flex items-center px-6 py-2 text-white text-sm font-bold border-2 border-red-600 uppercase tracking-widest transition-all duration-300 group"
    >
      {/* Outer border effect */}
      <span className="absolute inset-0 border-2 border-red-600 -translate-x-1 translate-y-1 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300"></span>

      <span className="absolute inset-[0px] bg-black"></span>

      {/* Main Button Content */}
      <span className="relative flex items-center gap-3 z-10">
        {content}
        <span className="text-xl">→</span>
      </span>
    </a>
  );
};

export default DashboardButton;
