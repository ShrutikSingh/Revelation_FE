import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-screen-xl mt-5 mb-[-215px] bg-cover bg-center h-[480px] sm:h-[550px] md:h-[638px]">
      <div className="w-full h-full relative">
        <div className="absolute left-6 top-[145px] sm:top-[100px] md:top-[130px] w-11/12 max-w-[1362px]">
          <p className="font-['Abhaya_Libre',serif] text-[#acacac] text-2xl sm:text-3xl md:text-4xl leading-normal">
            Unleash the
          </p>
          <div className="relative -mt-1">
            <p className="font-['Abhaya_Libre',serif] text-[#d9d9d9] text-2xl sm:text-3xl md:text-4xl leading-normal">
              Extraordinary with
            </p>
            <h1 className="w-full text-transparent bg-clip-text bg-gradient-to-b from-[#FFADAD] to-[#FFFFFF] text-4xl md:text-6xl lg:text-9xl font-['Bodoni_Moda',serif] font-extrabold drop-shadow-lg">
              REVELATION
            </h1>
          </div>
        </div>
        <div className="absolute bottom-1 left-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-16 h-7">
                <div className="absolute top-0 left-1 w-[60px] h-6 bg-[#d01515] border border-white"></div>
                <div className="absolute top-1 left-0 w-[60px] h-6 bg-black opacity-20"></div>
                <span className="absolute top-1 left-4 font-['Kode_Mono',monospace] font-bold text-black text-[clamp(10px,1.2vw,12px)]">
                  LIVE
                </span>
              </div>
              <p className="font-['Kode_Mono',monospace] text-white text-base sm:text-lg md:text-xl">
                REVELATION has started!
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "/events")}
              className="relative w-[clamp(100px,18vw,160px)] h-[clamp(35px,7vh,50px)] border-2 border-[#d01515] text-white font-['Kode_Mono',monospace] font-bold text-[clamp(14px,1.8vw,18px)] overflow-hidden transition-colors duration-300 hover:bg-[#d01515] hover:border-white"
            >
              <span className="relative z-10">EVENTS</span>
              <AiOutlineArrowRight className="absolute top-1/2 right-2 transform -translate-y-1/2 w-[clamp(18px,1.8vw,25px)] h-[clamp(12px,1.5vw,18px)] text-white" />
            </button>
          </div>
        </div>
        <p className="absolute top-12 sm:top-16 lg:top-20 right-8 lg:right-12 max-w-[750px] font-['Playfair_Display',serif] font-bold text-[#dadada] text-sm sm:text-base md:text-lg lg:text-xl text-right leading-normal">
          The annual tech-fest of the department of Computer Science and
          Technology, IIEST Shibpur
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
