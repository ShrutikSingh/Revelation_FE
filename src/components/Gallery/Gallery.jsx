import React from "react";
import "./Gallery.css"; // Import the CSS file

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

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GALLERY</h1>
      <div className="gallery-wrapper">
        <div className="gallery-scroll">
          {/* Duplicate images for infinite looping */}
          {images.concat(images).map((imageUrl, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
