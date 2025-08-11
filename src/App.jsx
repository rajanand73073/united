import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import unitedLogo from "./assets/logo_small.png";
import "./App.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderImages = [
    "/assets/slide1.jpg",
    "/assets/slide2.jpg",
    "/assets/slide3.jpg",
  ];

  const navLinks = [
    "Home",
    "About MPCON",
    "Registration",
    "Abstract",
    "Workshop",
    "Program",
    "Sponsors",
    "Accommodation",
    "Manipal",
    "Contact",
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 flex justify-between items-center py-3 w-full md:w-3/4">
          <div className="flex items-center gap-3">
            <img src={unitedLogo} alt="United Logo" className="h-10 md:h-12" />
          </div>
          <a
            href="mailto:uufop.uufop@united.edu"
            className="text-xs md:text-sm text-red-600 hover:underline hidden sm:block"
          >
            uufop.uufop@united.edu
          </a>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 text-[#0066A1] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navbar */}
        <nav className="bg-[#0066A1] text-white uppercase text-sm font-medium">
          <div className="container mx-auto px-4 md:w-3/4">
            {/* Desktop Menu */}
            <ul className="hidden sm:flex flex-wrap">
              {navLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="px-4 py-3 hover:bg-blue-800 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <ul className="sm:hidden flex flex-col bg-[#004d73]">
                {navLinks.map((link, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 border-b border-[#0066A1] hover:bg-blue-800 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Banner & Content */}
      <div className="bg-white w-full md:w-3/4 mx-auto space-y-6 mt-4">
        {/* Orange Hero */}
        <div className="bg-[#F47C26] text-white text-center py-6 mx-auto w-full rounded-lg shadow-lg">
          <h1 className="text-xl md:text-3xl font-bold mb-1">
            UNITED UNIVERSITY (FACULTY OF PHARMACY)
          </h1>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-1">
            CONFERENCE 2025
          </h2>
          <p className="text-base md:text-xl">7-8 November 2025</p>
        </div>

        {/* Accepted Abstracts Marquee */}
        <div className="text-center text-sm bg-[#E6F8FC] p-1 overflow-hidden relative">
          <div className="whitespace-nowrap animate-marquee">
            <a href="#" className="hover:underline py-2 rounded">
              <span className="text-[#0069a8] text-[14px] font-[700]">
                Click here for list of accepted abstracts
              </span>
            </a>
          </div>
          <style>
            {`
              @keyframes marquee {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
              .animate-marquee {
                display: inline-block;
                animation: marquee 10s linear infinite;
              }
            `}
          </style>
        </div>

        {/* Slider */}
        <div className="w-full md:max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg mb-4 mt-4">
          <Slider {...sliderSettings}>
            {sliderImages.map((src, i) => (
              <div key={i}>
                <img
                  src={`https://conference.manipal.edu/MPCON/SliderDefault/img/${
                    i + 1
                  }.jpg`}
                  alt={`Slide ${i + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Brochure Link */}
        <div className="text-center py-4">
          <a
            href="#"
            className="text-[#4f1075] text-lg md:text-[20px] font-[700] hover:underline"
          >
            Click here to download the Brochure
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-8 text-center">
        <div className="mb-6">
          <span className="bg-[#b3e6f2] text-black px-2 py-1 rounded text-sm md:text-[18px] font-bold">
            Organized by
          </span>
          <p className="mt-3 text-gray-800 font-medium text-sm md:text-base">
            UNITED UNIVERSITY (FACULTY OF PHARMACY) <br />
            Prayagraj, Uttar Pradesh, India
          </p>
        </div>

        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-bold">
          <div>
            <p className="text-[#d24c00]">
              Conference Venue:
              <span className="text-gray-800">
                {" "}
                UNITED UNIVERSITY (FACULTY OF PHARMACY)
              </span>
            </p>
          </div>
          <div>
            <p className="text-[#cc0000] font-semibold">IMPORTANT DATES:</p>
            <p>Call for Abstract: 7 November 2025</p>
            <p>Abstract Submission Deadline: 8 November 2025</p>
          </div>
        </div>

        <div className="mt-8 bg-[#003366] text-white py-4 text-xs">
          © Department of Digital and Information Technology, United University,
          Prayagraj, Uttar Pradesh, India. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
