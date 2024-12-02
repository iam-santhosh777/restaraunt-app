import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        <a href="#" className="text-white text-2xl font-bold">
            <img src={require("../assets/SVM Vave Pub logo.png")} alt="Logo" className="w-20" />
        </a>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex space-x-8 mx-auto text-lg">
        <a href="#hero" className="text-white hover:text-orange-700">Home</a>
        <a href="#booking-form" className="text-white hover:text-orange-500">Booking</a>
        <a href="#gallery" className="text-white hover:text-orange-500">Gallery</a>
        <a href="#work-section" className="text-white hover:text-orange-500">Events</a>
        <a href="#beer-selection" className="text-white hover:text-orange-500">Drinks</a>
        <a href="#contact-form" className="text-white hover:text-orange-500">Contact Us</a>
      </div>
            {/* Social Media Icons for Large Screens */}
        <div className="hidden md:block text-xl">
        <a href="https://www.facebook.com/people/SVM-Vave-Pub/61553503107503/" className="text-white mx-4 hover:text-orange-600 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/svm.vavepub/" className="text-white mx-4 hover:text-orange-600 transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.instagram.com/svm.vavepub/" className="text-white mx-4 hover:text-orange-600 transition">
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50">
        <i
          className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-white text-2xl cursor-pointer`}
          onClick={toggleMenu}
        ></i>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-50 backdrop-blur-lg text-white p-10 space-y-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <a href="#hero" className="block text-xl" onClick={closeMenu}>
          Home
        </a>
        <a href="#booking-form" className="block text-xl" onClick={closeMenu}>
          Booking
        </a>
        <a href="#gallery" className="block text-xl" onClick={closeMenu}>
          Gallery
        </a>
        <a href="#work-section" className="block text-xl" onClick={closeMenu}>
          Events
        </a>
        <a href="#beer-selection" className="block text-xl" onClick={closeMenu}>
          Drinks
        </a>
        <a href="#contact-form" className="block text-xl" onClick={closeMenu}>
          Contact
        </a>

                {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
          <a href="https://www.facebook.com/people/SVM-Vave-Pub/61553503107503/" className="text-white text-xl hover:text-orange-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/svm.vavepub/" className="text-white text-xl hover:text-orange-700">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/svm.vavepub/" className="text-white text-xl hover:text-orange-700">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
