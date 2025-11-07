"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ArrowLeftRight,
  CalendarDays,
  Users,
  Search,
  ChevronDown,
} from "lucide-react";

const fareTypes: string[] = [
  "Regular",
  "Student",
  "Armed Forces",
  "Senior Citizen",
  "Doctors & Nurses",
];
const FlightSearchHeader: React.FC = () => {
  const [tripType, setTripType] = useState("One Way");
  const [isTripOpen, setIsTripOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tripOptions = ["One Way", "Round Trip", "Multi-City"];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsTripOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col relative" ref={dropdownRef}>
            <label
              htmlFor="tripType"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Trip Type
            </label>
            <div
              onClick={() => setIsTripOpen(!isTripOpen)}
              className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-40 cursor-pointer hover:bg-gray-100"
            >
              <span className="text-gray-800 font-medium text-sm">
                {tripType}
              </span>
              <ChevronDown
                className={`ml-2 h-4 w-4 text-gray-500 transition-transform ${
                  isTripOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isTripOpen && (
              <div className="absolute top-[66px] left-0 bg-white border border-gray-200 rounded-md shadow-md w-40 z-50">
                {tripOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setTripType(option);
                      setIsTripOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer transition 
                      ${
                        tripType === option
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="fromCity"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              From
            </label>
            <input
              id="fromCity"
              type="text"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 text-gray-900 font-medium w-44 focus:ring-2 focus:ring-blue-500 outline-none"
              value="New Delhi, India"
              readOnly
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              aria-label="Swap cities"
              className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition"
            >
              <ArrowLeftRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="toCity"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              To
            </label>
            <input
              id="toCity"
              type="text"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 text-gray-900 font-medium w-44 focus:ring-2 focus:ring-blue-500 outline-none"
              value="Shirdi, India"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="departure"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Depart
            </label>
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-44">
              <CalendarDays className="h-4 w-4 text-gray-500 mr-2" />
              <input
                id="departure"
                type="text"
                className="bg-transparent text-gray-900 font-medium w-full focus:outline-none"
                value="Sat, Nov 29, 2025"
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="return"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Return
            </label>
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-44">
              <CalendarDays className="h-4 w-4 text-gray-400 mr-2" />
              <input
                id="return"
                type="text"
                className="bg-transparent text-gray-400 font-medium w-full focus:outline-none"
                placeholder="Select Return"
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="travellers"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Passengers & Class
            </label>
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-56">
              <Users className="h-4 w-4 text-gray-500 mr-2" />
              <input
                id="travellers"
                type="text"
                className="bg-transparent text-gray-900 font-medium w-full focus:outline-none"
                value="1 Adult, Economy"
                readOnly
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <button
              type="button"
              className="px-10 py-4 
                bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] 
                hover:from-[#4A0C15] hover:to-[#681A33] 
                text-white text-base font-semibold uppercase tracking-wide 
                shadow-lg rounded-full 
                transition-all duration-300"
            >
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default FlightSearchHeader;
