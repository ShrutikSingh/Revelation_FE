import "./HeroFinal.css"; // Import the CSS
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Img from "../../assets/hero-revelation.png";

const HeroFinal = () => {
  return (
    <div className="relative w-full bg-black min-h-screen custom-mobile-height sm:custom-tablet-height md:h-[900px] lg:h-[1000px] xl:h-[1112px] heroPage">
      {/* Background Grid and Image */}
      <div className="grid grid-cols-4 h-full w-full relative">
        {/* Left Gradient Section (Hidden below 640px) */}
        <div className="hidden md:block col-span-1 h-screen bg-gradient-to-b from-red-800 to-black"></div>

        {/* Right Image Section (Full Width below 640px) */}
        <div
          className="col-span-4 md:col-span-3 h-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Img})` }}
        >
          {/* Dark Grid Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>

      {/* Components placed on top */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-white gap-64">
        <HeroSection />
        <AboutUs />
      </div>
    </div>
  );
};

export default HeroFinal;
