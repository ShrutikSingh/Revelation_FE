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
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
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

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img12, img13, img14, img15, img16, img17, img18, img19,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,img31,img32
];

const Gallery = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-6 
        text-white text-transparent bg-clip-text mb-14">
        GALLERY
      </h1>

<section
  style={{
    position: "relative",
    width: "100%",
    height: "25vw",
    perspective: "100px",
    overflow: "hidden",
    cursor: "grab",
    borderRadius: "15px",
    borderTop: "1px solid #ff0000",
    borderBottom: "1px solid #ff0000",
    boxShadow: "0 5px 15px -5px #ff0000, 0 -5px 15px -5px #ff0000",
  }}
>
  <Marquee speed={80} pauseOnHover={true} gradient={false}>
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Gallery ${index}`}
        style={{
          height: "380px",  // Ensures images take up the full section height
          maxHeight: "25vw", // Prevents exceeding the section height
          width: "480px", // Maintains aspect ratio
          objectFit: "cover", // Ensures the image covers the area
          margin: "0 6px",
          borderRadius: "8px",
          border: "2px solid black",
          display: "block",
        }}
      />
    ))}
  </Marquee>

{/* Background overlay effect */}
<div
  style={{
    content: '""',
    position: "absolute",
    zIndex: 4,
    left: "50%",
    transform: "translateX(-50%)",
    width: "500%",
    height: "500%",
    borderRadius: "50%",
    background: "black",
    top: "-485%", // Adjusted for margin effect
    paddingTop: "10%", // Acts as a margin effect
  }}
></div>
<div
  style={{
    content: '""',
    position: "absolute",
    zIndex: 4,
    left: "50%",
    transform: "translateX(-50%)",
    width: "500%",
    height: "500%",
    borderRadius: "50%",
    background: "black",
    bottom: "-482%", // Adjusted for margin effect
    paddingBottom: "5%", // Acts as a margin effect
  }}
></div>
      </section>

      {/* Media Queries for Responsiveness */}
      <style>
        {`
          @media (max-width: 1024px) {
            section {
              height: 35vw !important;
            }
            img {
              height: 280px !important;
            }
          }

          @media (max-width: 768px) {
            section {
              height: 40vw !important;
            }
            img {
              height: 200px !important;
            }
          }

          @media (max-width: 480px) {
            section {
              height: 55vw !important;
            }
            img {
              height: 150px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
