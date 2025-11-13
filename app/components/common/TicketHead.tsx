"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, CalendarDays, Users, ChevronDown } from "lucide-react";

const fareTypes: string[] = [
  "Regular",
  "Student",
  "Armed Forces",
  "Senior Citizen",
  "Doctors & Nurses",
];

const FlightSearchHeader: React.FC = () => {
  // States for all inputs
  const [tripType, setTripType] = useState("One Way");
  const [isTripOpen, setIsTripOpen] = useState(false);
  const [fromCity, setFromCity] = useState("New Delhi, India");
  const [toCity, setToCity] = useState("Shirdi, India");
  const [departure, setDeparture] = useState("Sat, Nov 29, 2025");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1 Adult, Economy");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const tripOptions = ["One Way", "Round Trip", "Multi-City"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTripOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handler for Search Flights button
  const handleSearch = () => {
    const flightData = {
      tripType,
      fromCity,
      toCity,
      departure,
      returnDate,
      passengers,
    };
    console.log("Search Flights Data:", flightData);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          {/* Trip Type Dropdown */}
          <div className="flex flex-col relative" ref={dropdownRef}>
            <label className="text-sm font-semibold text-gray-600 mb-2">Trip Type</label>
            <div
              onClick={() => setIsTripOpen(!isTripOpen)}
              className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-40 cursor-pointer hover:bg-gray-100"
            >
              <span className="text-gray-800 font-medium text-sm">{tripType}</span>
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
                    className={`px-4 py-2 text-sm cursor-pointer transition ${
                      tripType === option ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* From City */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">From</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 text-gray-900 font-medium w-44 focus:ring-2 focus:ring-blue-500 outline-none"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            />
          </div>

          {/* Swap button */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              aria-label="Swap cities"
              className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition"
              onClick={() => {
                const temp = fromCity;
                setFromCity(toCity);
                setToCity(temp);
              }}
            >
              <ArrowLeftRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* To City */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">To</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 rounded-md px-4 py-2 text-gray-900 font-medium w-44 focus:ring-2 focus:ring-blue-500 outline-none"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            />
          </div>

          {/* Departure */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">Depart</label>
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-44">
              <CalendarDays className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                className="bg-transparent text-gray-900 font-medium w-full focus:outline-none"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>
          </div>

          {/* Return */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">Return</label>
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-44">
              <CalendarDays className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                className="bg-transparent text-gray-900 font-medium w-full focus:outline-none"
                placeholder="Select Return"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-2">Passengers & Class</label>
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-56">
              <Users className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                className="bg-transparent text-gray-900 font-medium w-full focus:outline-none"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
            </div>
          </div>

          {/* Search Flights button */}
          <div className="flex-shrink-0">
            <button
              type="button"
              className="px-10 py-4 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33] text-white text-base font-semibold uppercase tracking-wide shadow-lg rounded-full transition-all duration-300"
              onClick={handleSearch}
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
