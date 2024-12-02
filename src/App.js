// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import BookingForm from "./components/BookingForm";
// import Gallery from "./components/Gallery";
// import WorkSection from "./components/WorkSection";
// import BeerSelection from "./components/BeerSelection";
// import Footer from "./components/Footer";
// import UpcomingEvent from "./components/UpcomingEvent";


// const App = () => {
//   return (
//     <div className="bg-white text-black">
//       <Navbar/>
//       <section id="hero">
//         <Hero />
//       </section>
//       <section id="booking-form">
//         <BookingForm />
//       </section>
//       <section id="gallery">
//         <Gallery />
//       </section>
//       <section id="work-section">
//         <WorkSection />
//       </section>
//       <section id="beer-selection">
//         <BeerSelection />
//       </section>
//       <section id="beer-selection">
//         <UpcomingEvent />
//       </section>
//       <Footer/>
//     </div>
//   );
// };

// export default App;


import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Gallery from "./components/Gallery";
import WorkSection from "./components/WorkSection";
import BeerSelection from "./components/BeerSelection";
import Footer from "./components/Footer";
import UpcomingEvent from "./components/UpcomingEvent";

const floatUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedSection = styled.section`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${floatUp} 0.6s ease-out;
  }
`;

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animated-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-black">
      <Navbar />
      <AnimatedSection id="hero" className="animated-section">
        <Hero />
      </AnimatedSection>
      <AnimatedSection id="booking-form" className="animated-section">
        <BookingForm />
      </AnimatedSection>
      <AnimatedSection id="gallery" className="animated-section">
        <Gallery />
      </AnimatedSection>
      {/* <AnimatedSection id="work-section" className="animated-section">
        <WorkSection />
      </AnimatedSection> */}
      <AnimatedSection id="beer-selection" className="animated-section">
        <BeerSelection />
      </AnimatedSection>
      <AnimatedSection id="upcoming-event" className="animated-section">
        <UpcomingEvent />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default App;
