"use client";
import React from "react";
import { Plane } from "lucide-react";
const FeaturedFlights = () => {
  return (
   <div>
     <div className="flex justify-center py-10 bg-gray-50 mt-52">
      <div className="w-full max-w-7xl px-6">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Plane className="text-[#5A0F1A] w-7 h-7" />
          <h1 className="text-3xl font-bold text-gray-800">Holidays In</h1>
        </div>
        <div className="flex gap-4">
          <div
            className="w-3/5 h-[440px] relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer transform transition-all duration-500"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/34556006/pexels-photo-34556006.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>
            <div className="absolute bottom-[-100%] left-0 w-full flex flex-col items-center justify-center text-center
                  opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ease-out">
              <h2 className="text-white text-xl font-semibold mb-3 drop-shadow-lg">
                Qatar Airways - Luxury Flight
              </h2>
              <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] transition-all duration-300 shadow-md">
                Book Now
              </button>
            </div>
          </div>
          <div
            className="w-1/5 h-[440px] relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer transform   transition-all duration-500"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>
            <div className="absolute bottom-[-100%] left-0 w-full flex flex-col items-center justify-center text-center
                  opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ease-out">
              <h2 className="text-white text-xl font-semibold mb-3 drop-shadow-lg">
                Qatar Airways - Business Class
              </h2>
              <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] transition-all duration-300 shadow-md">
                Book Now
              </button>
            </div>
          </div>
          <div
            className="w-1/5 h-[440px] relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer transform   transition-all duration-500"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/1065753/pexels-photo-1065753.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>
            <div className="absolute bottom-[-100%] left-0 w-full flex flex-col items-center justify-center text-center
                  opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ease-out">
              <h2 className="text-white text-xl font-semibold mb-3 drop-shadow-lg">
                Qatar Airways - Economy
              </h2>
              <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] transition-all duration-300 shadow-md">
                Book Now
              </button>
            </div>
          </div>

        </div>
         <div className="flex gap-4 mt-20">
          <div
            className="w-1/5 h-[440px] relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer transform   transition-all duration-500"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>
            <div className="absolute bottom-[-100%] left-0 w-full flex flex-col items-center justify-center text-center
                  opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ease-out">
              <h2 className="text-white text-xl font-semibold mb-3 drop-shadow-lg">
                Qatar Airways - Business Class
              </h2>
              <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] transition-all duration-300 shadow-md">
                Book Now
              </button>
            </div>
          </div>
          <div
            className="w-1/5 h-[440px] relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer transform   transition-all duration-500"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>
            <div className="absolute bottom-[-100%] left-0 w-full flex flex-col items-center justify-center text-center
                  opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ease-out">
              <h2 className="text-white text-xl font-semibold mb-3 drop-shadow-lg">
                Qatar Airways - Economy
              </h2>
              <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] transition-all duration-300 shadow-md">
                Book Now
              </button>
            </div>
          </div>
          <div
            className="w-3/5 h-[440px] relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer transform   transition-all duration-500"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/19872/pexels-photo.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500"></div>
            <div className="absolute bottom-[-100%] left-0 w-full flex flex-col items-center justify-center text-center
                  opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ease-out">
              <h2 className="text-white text-xl font-semibold mb-3 drop-shadow-lg">
                Qatar Airways - Luxury Flight
              </h2>
              <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] transition-all duration-300 shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div
      className="w-full mt-44 h-[500px] relative"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1687633/pexels-photo-1687633.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-left text-white max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Book your <span className="text-[#5A0F1A]">nixoairways</span> journey
        </h1>
        <p className="text-base md:text-lg mb-4">
          Explore the world with comfort, style, and unforgettable memories
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] 
          hover:from-[#4A0C15] hover:to-[#681A33] rounded-full text-white font-semibold
          shadow-lg transition-transform transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
   </div>
  );
};

export default FeaturedFlights;
