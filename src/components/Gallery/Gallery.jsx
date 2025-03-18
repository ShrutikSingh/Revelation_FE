import React from "react";
import Marquee from "react-fast-marquee";

// Import images
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img26.jpg";
import img27 from "../../assets/img27.jpg";
import img28 from "../../assets/img28.jpg";
import img29 from "../../assets/img29.jpg";
import img30 from "../../assets/img30.jpg";
import img31 from "../../assets/img31.jpg";
import img32 from "../../assets/img32.jpg";
import img33 from "../../assets/img33.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img11,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <h1 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-6  bg-gradient-to-br from-gray-600 via-white to-black text-transparent bg-clip-text mb-14">
        GALLERY
      </h1>

      <section className="relative w-full h-fit cursor-grab   overflow-hidden ">
        {/* Top overlay */}
        <div className="absolute z-[4] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[1223dvw]  md:-translate-y-[1212dvw] lg:-translate-y-[1208dvw] xl:-translate-y-[1205dvw] w-[1200vw] h-[1200vw] bg-black rounded-full" />

        <Marquee speed={250} pauseOnHover={true} gradient={false}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="block object-cover rounded-[0.5rem] border-2 border-black h-[30dvh] mx-[0.375rem]"
            />
          ))}
        </Marquee>

        {/* Bottom overlay */}
        <div className="absolute z-[4] left-1/2 top-1/2 -translate-x-1/2 translate-y-[23dvw] md:translate-y-[12dvw] lg:translate-y-[08dvw] xl:translate-y-[5dvw] w-[1200vw] h-[1200vw] bg-black rounded-full" />
      </section>
    </div>
  );
};

export default Gallery;
