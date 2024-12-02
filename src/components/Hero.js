
// import React, { useState, useEffect } from "react";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Replace these URLs with your images
//   const slides = [
//     "https://placehold.co/1920x1080",
//     "https://placehold.co/1920x1080?text=Slide+2",
//     "https://placehold.co/1920x1080?text=Slide+3",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="hero relative h-96 md:h-[600px] overflow-hidden">
//       {/* Slide Background */}
//       <div
//         className="absolute inset-0 transition-opacity duration-1000"
//         style={{
//           backgroundImage: `url(${slides[currentSlide]})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       Overlay
//       <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center z-10">
//         <h1 className="text-4xl md:text-6xl font-bold text-white">OFFBEAT</h1>
//         <p className="text-xl md:text-2xl mt-4 text-white">
//           Feel the beat of the night
//         </p>
//         <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
//           BUY TICKET
//         </button>
//       </div>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`h-3 w-3 rounded-full ${
//               index === currentSlide ? "bg-white" : "bg-gray-400"
//             } cursor-pointer`}
//             onClick={() => setCurrentSlide(index)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Replace these URLs with your images
  const slides = [
    require("../assets/landscape/1.png"),
    require("../assets/landscape/2.png"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero relative h-96 md:h-[600px] overflow-hidden">
      {/* Slide Background */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay */}
      <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0 flex flex-col justify-center items-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-orange-500 neon-text tracking-wide text-center uppercase drop-shadow-lg">
          Svm's vave Pub
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-white tracking-wider italic text-center">
          Feel the pulse, own the night
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-400"
            } cursor-pointer`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
