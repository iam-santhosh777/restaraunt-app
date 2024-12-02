// import React from 'react'

// const BeerSelection = () => {
//   return (
//     <div className="beer-selection my-16">
//     <h2 className="text-3xl md:text-5xl font-bold text-center">CRAFT BEER SELECTION.</h2>
//     <div className="beer-list flex flex-wrap justify-center gap-4 mt-8">
//         {[
//             { name: "SUMMIT CRAFT", price: "$2.95" },
//             { name: "WEISSE", price: "$3.95" },
//             { name: "BARLEY GARDEN", price: "$4.15" },
//             { name: "BOMBER", price: "$5.95" },
//             { name: "BROOKLYN", price: "$4.15" },
//             { name: "HILL BROTHERS", price: "$3.95" },
//             { name: "HOBGOBLIN", price: "$4.15" },
//             { name: "PAULANER", price: "$3.95" },
//             { name: "BLUE MOON", price: "$4.30" },
//             { name: "CULTURE ON TAP", price: "$4.30" },
//             { name: "BREWDOG", price: "$4.30" },
//             { name: "KNOCKER", price: "$4.30" }
//         ].map((beer, index) => (
//             <div key={index} className="beer-item w-full md:w-1/2 flex justify-between items-center p-4 border border-white">
//                 <span>{beer.name}</span>
//                 <span>{beer.price}</span>
//             </div>
//         ))}
//     </div>
//     <div className="text-center mt-4">
//         <button className="bg-orange-500 text-white py-2 px-4">VIEW MENU</button>
//     </div>
// </div>
//   )
// }

// export default BeerSelection

import React from "react";

// const beers = [
//   { name: "SUMMIT CRAFT", description: "Saga IPA, Oatmeal Stout, High Sticke", price: "	₹ 2.95", img: "https://placehold.co/50x50?text=Summit+Craft" },
//   { name: "BARLEY GARDEN", description: "Finest IPA", price: "	₹ 3.65", img: "https://placehold.co/50x50?text=Barley+Garden" },
//   { name: "BROOKLYN", description: "Defender IPA, Scorcher Ipa, Sorachi", price: "	₹ 4.15", img: "https://placehold.co/50x50?text=Brooklyn" },
//   { name: "HOBGOBLIN", description: "Hobgoblin Gold, Hobgoblin Ipa", price: "	₹ 3.45", img: "https://placehold.co/50x50?text=Hobgoblin" },
//   { name: "BLUEMOON", description: "Belgian White, Mango Wheat", price: "	₹ 4.65", img: "https://placehold.co/50x50?text=Bluemoon" },
//   { name: "BREWDOG", description: "Punk IPA, 5AM Saint, Elvis Juice", price: "	₹ 4.80", img: "https://placehold.co/50x50?text=Brewdog" },
//   { name: "WEISSE", description: "Saga IPA, Oatmeal Stout, High Sticke", price: "	₹ 2.95", img: "https://placehold.co/50x50?text=Weisse" },
//   { name: "BOMBER", description: "Finest IPA", price: "	₹ 3.65", img: "https://placehold.co/50x50?text=Bomber" },
//   { name: "HILL BROTHERS", description: "Defender IPA, Scorcher Ipa, Sorachi", price: "	₹ 4.15", img: "https://placehold.co/50x50?text=Hill+Brothers" },
//   { name: "PAULANER", description: "Hobgoblin Gold, Hobgoblin Ipa", price: "	₹ 3.45", img: "https://placehold.co/50x50?text=Paulaner" },
//   { name: "CULTURE ON TAP", description: "Belgian White, Mango Wheat", price: "	₹ 4.65", img: "https://placehold.co/50x50?text=Culture+on+Tap" },
//   { name: "KNOCKER", description: "Punk IPA, 5AM Saint, Elvis Juice", price: "	₹ 4.80", img: "https://placehold.co/50x50?text=Knocker" },
// ];

const beers = [
  {
    name: "KINGFISHER PREMIUM",
    description: "Crisp and refreshing lager, India's most loved beer.",
    price: "₹ 250",
    img: "https://placehold.co/50x50?text=Kingfisher",
  },
  {
    name: "BIRA BLONDE",
    description: "Smooth and malty wheat beer, perfect for any occasion.",
    price: "₹ 300",
    img: "https://placehold.co/50x50?text=Bira+Blonde",
  },
  {
    name: "SIMBA STRONG",
    description: "Bold and full-bodied strong lager with a hint of caramel.",
    price: "₹ 280",
    img: "https://placehold.co/50x50?text=Simba+Strong",
  },
  {
    name: "GODFATHER LEGEND",
    description: "Strong and smooth beer with a legacy of excellence.",
    price: "₹ 270",
    img: "https://placehold.co/50x50?text=Godfather",
  },
  {
    name: "WHITE OWL SPARK",
    description: "Light and citrusy wheat beer, easy on the palate.",
    price: "₹ 310",
    img: "https://placehold.co/50x50?text=White+Owl",
  },
  {
    name: "KATI PATANG",
    description: "Zesty and vibrant craft beer inspired by Indian flavors.",
    price: "₹ 330",
    img: "https://placehold.co/50x50?text=Kati+Patang",
  },
  {
    name: "CORONA",
    description: "Light and crisp beer with a slice of lime for refreshment.",
    price: "₹ 340",
    img: "https://placehold.co/50x50?text=Corona",
  },
  {
    name: "BIRA WHITE",
    description: "A refreshing wheat beer with a hint of citrus.",
    price: "₹ 300",
    img: "https://placehold.co/50x50?text=Bira+White",
  },
  {
    name: "SIMBA WIT",
    description: "A smooth wheat beer with refreshing orange and coriander notes.",
    price: "₹ 290",
    img: "https://placehold.co/50x50?text=Simba+Wit",
  },
  {
    name: "KINGFISHER ULTRA",
    description: "A premium lager with a clean and crisp taste.",
    price: "₹ 350",
    img: "https://placehold.co/50x50?text=Kingfisher+Ultra",
  },
  {
    name: "BARLEY BREW",
    description: "Traditional craft beer brewed with Indian malts.",
    price: "₹ 320",
    img: "https://placehold.co/50x50?text=Barley+Brew",
  },
  {
    name: "JAI HO IPA",
    description: "Bold Indian Pale Ale with a mix of tropical and piney flavors.",
    price: "₹ 360",
    img: "https://placehold.co/50x50?text=Jai+Ho+IPA",
  },
];


const BeerSelection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-orange-500 italic text-xl md:text-2xl">Our finest</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            CRAFT BEER SELECTION
          </h1>
        </div>

        {/* Beer List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {beers.map((beer, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition duration-300 shadow-md"
            >
              <div className="flex items-center">
                <img
                  src={beer.img}
                  alt={beer.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-left">
                  <h2 className="text-lg font-bold">{beer.name}</h2>
                  <p className="text-sm text-gray-400">{beer.description}</p>
                </div>
              </div>
              <div className="text-orange-400 font-bold text-lg">{beer.price}</div>
            </div>
          ))}
        </div>

        {/* View Menu Button */}
        <div className="mt-10">
          <button className="bg-orange-500 text-white font-bold uppercase py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerSelection;
