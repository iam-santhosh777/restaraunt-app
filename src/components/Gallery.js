import React from "react";
import img1 from "../assets/gallery pics/DSC02568.jpg";
import img2 from "../assets/gallery pics/DSC02640.jpg";
import img3 from "../assets/gallery pics/DSC02660.jpg";
import img4 from "../assets/gallery pics/DSC02700.jpg";
import img5 from "../assets/gallery pics/DSC02753.jpg";
import img6 from "../assets/gallery pics/DSC02771.jpg";
import img7 from "../assets/gallery pics/DSC02816.jpg";
import img8 from "../assets/gallery pics/DSC02900.jpg";
import img9 from "../assets/gallery pics/DSC02938.jpg";
import img10 from "../assets/gallery pics/DSC03020.jpg";
import img11 from "../assets/gallery pics/DSC03076.jpg";
import img12 from "../assets/gallery pics/DSC03086.jpg";
import img13 from "../assets/gallery pics/DSC09536-Enhanced-NR.jpg";
import img14 from "../assets/gallery pics/DSC09538-Enhanced-NR.jpg";
import img15 from "../assets/gallery pics/DSC09570-Enhanced-NR.jpg";
import img16 from "../assets/gallery pics//DSC09600-Enhanced-NR.jpg";
import img18 from "../assets/gallery pics/DSC09606-Enhanced-NR.jpg";
import img19 from "../assets/gallery pics/DSC09621-Enhanced-NR.jpg";
import img20 from "../assets/gallery pics/DSC09645-Enhanced-NR.jpg";
import img21 from "../assets/gallery pics/DSC09673.jpg";
import img22 from "../assets/gallery pics/DSC09813.jpg";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
  { src: img6, alt: "Image 6" },
  { src: img7, alt: "Image 7" },
  { src: img8, alt: "Image 8" },
  { src: img9, alt: "Image 9" },
  { src: img10, alt: "Image 10" },
  { src: img11, alt: "Image 11" },
  { src: img12, alt: "Image 12" },
  { src: img13, alt: "Image 13" },
  { src: img14, alt: "Image 14" },
  { src: img15, alt: "Image 15" },
  { src: img16, alt: "Image 16" },
  { src: img18, alt: "Image 18" },
  { src: img19, alt: "Image 19" },
  { src: img20, alt: "Image 20" },
  { src: img21, alt: "Image 21" },
  { src: img22, alt: "Image 22" },

];

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="py-4 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      {/* Header Section */}
      <div className="my-8 text-center">
        <h1 className="text-3xl md:text-[3rem] font-bold uppercase bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent tracking-wide">
          Gallery
        </h1>
        <p className="text-yellow-500 text-sm md:text-base mt-2">
          A glimpse of the fun and vibrant moments at our pub!
        </p>
        <div className="flex justify-center mt-4">
          <hr className="w-16 border-yellow-500 border-t-4 rounded-full" />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 px-4">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          {images.map((image, index) => (
            <a href={image.src} key={index} className="p-14">
              <img
                alt={image.alt}
                src={image.src}
                loading="lazy"
                className="w-full h-auto rounded-3xl shadow-md group-hover:shadow-xl transition-shadow duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
