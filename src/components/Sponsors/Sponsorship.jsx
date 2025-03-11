import React ,{useState} from "react";
import Unstop from "../../assets/unstop.jpeg";

import Duet from "../../assets/duet_logo.jpg";
import Career from "../../assets/career.png";
import Lawfarm from "../../assets/lawfarm_logo.jpeg";
import GFG from "../../assets/gfg.png";

const Sponsorship = () => {
    
  
  return (
    <div
      className="min-h-screen bg-black text-center text-white"
      //      style={{
      //     backgroundImage: `url('/src/assets/background.png')`,
      //     backgroundSize: 'cover',
      //     backgroundPosition: 'center',
      //     backgroundRepeat: 'no-repeat'
      //   }}
    >
      <div>
        <p className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold py-10">
          Have a Look at our Past
        </p>
      </div>
      <div>
        <h1 className="mt-9 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ">
          SPONSORS
        </h1>
      </div>

      {/* sponsors */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 mt-24 ">
        <div className="flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-24 items-center">
          {/* Large & Medium: 3 divs in first row, Small: 1 div per row */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20 w-full place-items-center">




            <div
              className="size-56 rounded-xl border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,1)] 
        hover:shadow-[0_0_60px_rgba(255,0,0,1)] transition-shadow duration-300 flex items-center justify-center text-white bg-black"
            >
              <img
                src={Unstop}
                alt="logo"
                className="rounded-lg size-40 hover:size-48 duration-300"
              ></img>
            </div>

            <div
              className="size-56 rounded-xl border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,1)] 
        hover:shadow-[0_0_60px_rgba(255,0,0,1)] transition-shadow duration-300 flex items-center justify-center text-white"
            >
              <img
                src={Duet}
                alt="logo"
                className="rounded-lg size-40 hover:size-48 duration-300"
              ></img>
            </div>

            <div
              className="size-56 rounded-xl border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,1)] 
        hover:shadow-[0_0_60px_rgba(255,0,0,1)] transition-shadow duration-300 flex items-center justify-center text-white"
            >
              <img
                src={Lawfarm}
                alt="logo"
                className="rounded-lg size-40 hover:size-48 duration-300"
              ></img>
            </div>
          </div>

          {/*  Small: 1 div per row */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full place-items-center">
            <div
              className="size-56 rounded-xl border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,1)] 
        hover:shadow-[0_0_60px_rgba(255,0,0,1)] transition-shadow duration-300 flex items-center justify-center text-white lg:mb-24 md:mb-24"
            >
              <img
                src={Career}
                alt="logo"
                className="rounded-lg size-40 hover:size-48 duration-300"
              ></img>
            </div>

            <div
              className=" size-56 rounded-xl border-4 border-red-600 shadow-[0_0_40px_rgba(255,0,0,1)] 
        hover:shadow-[0_0_60px_rgba(255,0,0,1)] transition-shadow duration-300 flex items-center justify-center text-white lg:mb-24 sm:mb-24 mb-24"
            >
              <img
                src={GFG}
                alt="logo"
                className="rounded-lg size-40 hover:size-48 duration-300"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// Function to position each face correctly
const getFaceTransform = (face) => {
    switch (face) {
      case "front":
        return "translateZ(40px)";
      case "back":
        return "rotateY(180deg) translateZ(40px)";
      case "left":
        return "rotateY(-90deg) translateZ(40px)";
      case "right":
        return "rotateY(90deg) translateZ(40px)";
      case "top":
        return "rotateX(90deg) translateZ(40px)";
      case "bottom":
        return "rotateX(-90deg) translateZ(40px)";
      default:
        return "";
    }
  };
export default Sponsorship;
