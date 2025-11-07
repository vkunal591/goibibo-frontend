"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Menu, X } from "lucide-react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className={`relative w-full h-[70vh] bg-cover bg-center flex flex-col ${poppins.className}`}
      style={{
        backgroundImage: `url(https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/campaigns/global/cug/hn-best-airline-app-economy.jpg)`,
      }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <nav className="relative z-20 flex justify-between items-center px-6 md:px-10 py-5 text-white">
        <img  className="h-24 mix-blend-multiply  " src="https://thumbs.dreamstime.com/b/print-238191896.jpg" />
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="hover:text-indigo-400 transition">Home</li>
          <li className="hover:text-indigo-400 transition">Flights</li>
          <li className="hover:text-indigo-400 transition">Deals</li>
          <li className="hover:text-indigo-400 transition">About</li>
          <li className="hover:text-indigo-400 transition">Contact</li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="px-5 py-2 border border-indigo-400 rounded-full hover:bg-indigo-500 transition">
            Holidays
          </button>
          <button
  className="px-5 py-2 
  bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] 
  hover:from-[#4A0C15] hover:to-[#681A33] 
  text-white rounded-full font-semibold 
  shadow-md
  transition-all duration-300"
>
  Sign Up
</button>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
 {menuOpen && (
  <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col space-y-6 py-9 px-6 z-20 md:hidden">
    <ul className="space-y-4 text-lg font-medium text-center">
      <li className="hover:text-indigo-400 transition">Home</li>
      <li className="hover:text-indigo-400 transition">Flights</li>
      <li className="hover:text-indigo-400 transition">Deals</li>
      <li className="hover:text-indigo-400 transition">About</li>
      <li className="hover:text-indigo-400 transition">Contact</li>
    </ul>
    <div className="flex flex-col space-y-3 mt-1 w-full">
      <button className="px-6 py-2 w-full border border-indigo-400 rounded-full hover:bg-indigo-500 transition">
        Holidays
      </button>
      <button className="px-6 py-2 w-full bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition">
        Sign Up
      </button>
    </div>
  </div>
)}

      <div className="relative z-10 text-center text-white flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fly with Comfort & Style
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing destinations and unbeatable offers.
        </p>
       <button
  className="px-10 py-4 
  bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] 
  hover:from-[#4A0C15] hover:to-[#681A33] 
  text-white text-base font-semibold uppercase tracking-wide 
  shadow-lg rounded-full 
  transition-all duration-300"
>
  Book Now
</button>
      </div>
    </header>
  );
};
export default Header;
