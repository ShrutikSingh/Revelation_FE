import React from "react";

const DashboardButton = ({ link, content, onClick }) => {
  return onClick ? (
    <button
      onClick={onClick}
      className="relative inline-flex items-center px-4 py-1 text-white text-xs max-sm:text-[10px] max-sm:py-0 md:text-sm font-bold border-2 border-red-600 uppercase tracking-widest transition-all duration-300 group ml-2"
    >
      {/* Outer border effect */}
      <span className="absolute inset-0 border-2 border-red-600 -translate-x-1 translate-y-1 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300"></span>

      <span className="absolute inset-[0px] bg-black"></span>

      {/* Main Button Content */}
      <span className="relative flex items-center gap-2 z-10">
        {content}
        <span className="text-lg sm:text-xl">→</span>
      </span>
    </button>
  ) : (
    <div 
      className="relative ml-2 inline-flex items-center px-4 py-1 text-white text-xs max-sm:text-[10px] max-sm:py-0 md:text-base font-bold border-2 border-red-600 uppercase tracking-widest transition-all duration-300 group"
    >
      {/* Outer border effect */}
      <span className="absolute inset-0 border-2 border-red-600 -translate-x-1 translate-y-1 group-hover:-translate-x-2 group-hover:translate-y-2 transition-all duration-300"></span>

      <span className="absolute inset-[0px] bg-black"></span>

      {/* Main Button Content */}
      <span className="relative flex items-center gap-2 z-10">
        {content}
        <span className="text-lg sm:text-xl">→</span>
      </span>
    </div>
  );
};

export default DashboardButton;