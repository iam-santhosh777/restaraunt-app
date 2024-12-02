// import React from 'react'

// const WorkSection = () => {
//   return (
//     <div className="work-section flex flex-col md:flex-row items-center gap-8 my-16">
//         <img src="https://placehold.co/600x400" alt="Work Image" className="w-full md:w-1/2"/>
//         <div className="content w-full md:w-1/2">
//             <h2 className="text-3xl md:text-5xl font-bold">CHECK OUR WORK</h2>
//             <p className="my-4">We are a place that brings together the best of music, drinks, and vibes. Come experience the magic of Offbeat.</p>
//             <button className="px-6 py-2 bg-orange-500 text-white">READ MORE</button>
//         </div>
//     </div>
//   )
// }

// export default WorkSection

import React from "react";
import "../App.css"; // Import custom CSS for neon effect if necessary

const WorkSection = () => {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 md:px-20">
        {/* Neon "OPEN" Text */}
        <div className="neon-text text-6xl md:text-9xl text-center mb-8 md:mb-0">
          OPEN
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left max-w-lg">
          <p className="text-orange-500 script-font text-2xl md:text-4xl mb-2">
            Be at the right place,
          </p>
          <h1 className="text-xl md:text-2xl font-bold mb-4">CHECK OUR WORK</h1>
          <p className="text-sm md:text-lg mb-4 leading-relaxed">
            When searching for the right place to get lost and enjoy new,
            alternative music, Offbeat lounge bar is the perfect choice. With
            cozy, yet progressive interior, and kind staff, we are the best
            place to get lost during workdays or on weekends. Enjoy live music
            shows.
          </p>
          <button className="border border-white py-2 px-4 text-sm md:text-lg hover:bg-orange-500 hover:text-black transition">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
