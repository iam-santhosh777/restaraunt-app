// import React from "react";
// import Slider from "react-slick"; // Ensure react-slick and slick-carousel are installed
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const UpcomingEvent = () => {
//   const guestImages = [
//     "https://via.placeholder.com/800x600?text=Guest+Image+1",
//     "https://via.placeholder.com/800x600?text=Guest+Image+2",
//     "https://via.placeholder.com/800x600?text=Guest+Image+3",
//     "https://via.placeholder.com/800x600?text=Guest+Image+4",
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <div className="bg-black text-white py-16">
//       <div className="container mx-auto">
//         {/* Event Details Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">UPCOMING EVENT</h2>
//           <p className="text-lg">
//             Join us for an electrifying night with a special guest artist!
//           </p>
//           <div className="mt-6">
//             <p>
//               <strong>Date:</strong> December 15, 2024
//             </p>
//             <p>
//               <strong>Time:</strong> 8:00 PM - Midnight
//             </p>
//             <p>
//               <strong>Location:</strong> SVM's VAVE PUB, Hyderabad
//             </p>
//           </div>
//         </div>

//         {/* Guest Images Slideshow */}
//         <div className="max-w-4xl mx-auto">
//           <Slider {...sliderSettings}>
//             {guestImages.map((image, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={image}
//                   alt={`Guest ${index + 1}`}
//                   className="rounded-lg shadow-lg w-full h-64 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-bold">
//                   <p>Guest Artist</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvent;


import React from "react";
import Slider from "react-slick"; // Ensure react-slick and slick-carousel are installed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpcomingEvent = () => {
  const guestImages = [
    "https://via.placeholder.com/800x600?text=Guest+Image+1",
    "https://via.placeholder.com/800x600?text=Guest+Image+2",
    "https://via.placeholder.com/800x600?text=Guest+Image+3",
    "https://via.placeholder.com/800x600?text=Guest+Image+4",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-16 font-sans">
      <div className="container mx-auto">
        {/* Event Details Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-gold">
            UPCOMING EVENT
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Join us for an electrifying night with a special guest artist!
          </p>
          <div className="mt-6 text-md text-orange-400">
            <p>
              <strong>Date:</strong> December 15, 2024
            </p>
            <p>
              <strong>Time:</strong> 8:00 PM - Midnight
            </p>
            <p>
              <strong>Location:</strong> SVM's VAVE PUB, Hyderabad
            </p>
          </div>
        </div>

        {/* Guest Images Slideshow */}
        <div className="max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {guestImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Guest ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-64 object-cover border-4 border-orange-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-gold text-xl font-bold">
                  <p>Guest Artist</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;


// import React from "react";
// import Slider from "react-slick";
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const UpcomingEventContainer = styled.div`
//   background: linear-gradient(to bottom, #000000, #1c1c1c);
//   color: white;
//   padding: 4rem 0;
//   font-family: "Poppins", sans-serif;

//   h2 {
//     font-size: 2.5rem;
//     font-weight: 700;
//     margin-bottom: 1rem;
//     color: #ffd700; /* Gold for pub theme */
//   }

//   p {
//     color: #cccccc;
//     line-height: 1.5;
//   }

//   .event-details {
//     margin-top: 1.5rem;
//     color: #ef5226; /* Orange for accents */
//   }
// `;

// const SliderContainer = styled.div`
//   .slick-dots {
//     bottom: -30px;

//     li {
//       margin: 0 5px;

//       button:before {
//         font-size: 12px;
//         color: white; /* Default indicator color */
//         transition: color 0.3s ease;
//       }

//       &.slick-active button:before {
//         color: #ffd700; /* Gold for active indicator */
//       }
//     }
//   }

//   .slick-slide img {
//     border-radius: 0.5rem;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//     border: 4px solid #ffa500; /* Orange border */
//     object-fit: cover;
//   }
// `;

// const GuestOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #ffd700; /* Gold for text overlay */
//   font-size: 1.25rem;
//   font-weight: bold;
// `;

// const UpcomingEvent = () => {
//   const guestImages = [
//     "https://via.placeholder.com/800x600?text=Guest+Image+1",
//     "https://via.placeholder.com/800x600?text=Guest+Image+2",
//     "https://via.placeholder.com/800x600?text=Guest+Image+3",
//     "https://via.placeholder.com/800x600?text=Guest+Image+4",
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <UpcomingEventContainer>
//       <div className="container mx-auto">
//         {/* Event Details Section */}
//         <div className="text-center mb-12">
//           <h2>UPCOMING EVENT</h2>
//           <p>Join us for an electrifying night with a special guest artist!</p>
//           <div className="event-details text-orange-400">
//             <p>
//               <strong>Date:</strong> December 15, 2024
//             </p>
//             <p>
//               <strong>Time:</strong> 8:00 PM - Midnight
//             </p>
//             <p>
//               <strong>Location:</strong> SVM's VAVE PUB, Hyderabad
//             </p>
//           </div>
//         </div>

//         {/* Guest Images Slideshow */}
//         <SliderContainer>
//           <Slider {...sliderSettings}>
//             {guestImages.map((image, index) => (
//               <div key={index} className="relative">
//                 <img src={image} alt={`Guest ${index + 1}`} className="w-full h-64" />
//                 <GuestOverlay>Guest Artist</GuestOverlay>
//               </div>
//             ))}
//           </Slider>
//         </SliderContainer>
//       </div>
//     </UpcomingEventContainer>
//   );
// };

// export default UpcomingEvent;
