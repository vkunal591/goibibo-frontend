"use client";
import React from "react";
import { Plane } from "lucide-react";
const Holidays = () => {
  const places = [
    {
      img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1390/Tea-Plantation.jpeg?crop=460:300&downsize=460:300?downsize=460:300",
      name: "Maldives",
    },
    {
      img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4362/New%20angkor%20wat.PNG?crop=460:300&downsize=460:300?downsize=460:300",
      name: "Munnar",
    },
    {
      img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1185/Leh04.jpg?crop=460:300&downsize=460:300?downsize=460:300",
      name: "Andaman",
    },
    {
      img: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1359/Manali_3.jpg?crop=460:300&downsize=460:300?downsize=460:300",
      name: "Leh-Ladakh",
    },
  ]
  return (
    <div className="flex justify-center py-10 bg-gray-50">
      <div className="w-full max-w-7xl px-6">
        <div className="flex gap-3 mb-8">
          <Plane className="text-[#5A0F1A] w-7 h-7" />
          <h1 className="text-3xl font-bold text-gray-800">Start Planning Your Holidays!!!</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {places.map((place, i) => (
            <div
              key={i}
              className="relative h-80 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-500"
              style={{
                backgroundImage: `url(${place.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
              <div
                className="absolute bottom-[-100%] left-0 w-full flex flex-col items-center justify-center text-center 
                opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500 ease-out"              >
                <h2 className="text-white text-xl font-semibold mb-3 drop-shadow-lg">
                  {place.name}
                </h2>
                <button
                  className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] transition-all duration-300 shadow-md"                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Holidays;
