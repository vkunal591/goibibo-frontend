"use client";
import { ArrowLeftRight, Calendar, ChevronDown, Gift, Plane, Radio } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import PassengerSelector from "./modals/PassengerSelector";
const FlightBookingForm = () => {
  const [tripType, setTripType] = useState("return");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [departureDate, setDepartureDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveField(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dummyAirports = [
    { city: "New Delhi", code: "DEL", country: "India" },
    { city: "Mumbai", code: "BOM", country: "India" },
    { city: "Bangalore", code: "BLR", country: "India" },
    { city: "Hyderabad", code: "HYD", country: "India" },
    { city: "Udaipur", code: "UDR", country: "India" },
  ];
  return (
    <div className="min-h-[70vh] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-t-2xl shadow-lg border border-border">
          <div className="flex w-full h-full border-b border-gray-200 
  bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] 
  text-white rounded-t-2xl overflow-hidden shadow-md">

            <button className="w-1/4 flex items-center justify-center gap-2 py-5 
    bg-white/10 text-white font-semibold border-b-4 border-white 
    transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
              <Plane className="h-5 w-5 text-white" />
              <span>Book a Flight</span>
            </button>

            <button className="w-1/4 flex items-center justify-center gap-2 py-5 
    text-white/80 hover:text-white font-medium border-b-4 border-transparent 
    hover:border-white transition-all duration-300 hover:bg-white/10">
              <Gift className="h-5 w-5" />
              <span>Stopover / Packages</span>
            </button>

            <button className="w-1/4 flex items-center justify-center gap-2 py-5 
    text-white/80 hover:text-white font-medium border-b-4 border-transparent 
    hover:border-white transition-all duration-300 hover:bg-white/10">
              <Calendar className="h-5 w-5" />
              <span>Manage / Check-in</span>
            </button>

            <button className="w-1/4 flex items-center justify-center gap-2 py-5 
    text-white/80 hover:text-white font-medium border-b-4 border-transparent 
    hover:border-white transition-all duration-300 hover:bg-white/10">
              <Radio className="h-5 w-5" />
              <span>Flight Status</span>
            </button>
          </div>

          <div className="p-8 bg-gray-50">
            <div className="flex gap-8 mb-6">
              {/* Return */}
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="tripType"
                    value="return"
                    checked={tripType === "return"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 
        ${tripType === "return"
                        ? "border-[#5A0F1A] bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]"
                        : "border-gray-400"
                      }`}
                  >
                    {tripType === "return" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <span
                  className={`font-medium transition-colors ${tripType === "return" ? "text-[#5A0F1A]" : "text-gray-800"
                    }`}
                >
                  Return
                </span>
              </label>

              {/* One Way */}
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={tripType === "oneway"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 
        ${tripType === "oneway"
                        ? "border-[#5A0F1A] bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]"
                        : "border-gray-400"
                      }`}
                  >
                    {tripType === "oneway" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <span
                  className={`font-medium transition-colors ${tripType === "oneway" ? "text-[#5A0F1A]" : "text-gray-800"
                    }`}
                >
                  One Way
                </span>
              </label>

              {/* Multi-City */}
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="tripType"
                    value="multicity"
                    checked={tripType === "multicity"}
                    onChange={(e) => setTripType(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 
        ${tripType === "multicity"
                        ? "border-[#5A0F1A] bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]"
                        : "border-gray-400"
                      }`}
                  >
                    {tripType === "multicity" && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <span
                  className={`font-medium transition-colors ${tripType === "multicity" ? "text-[#5A0F1A]" : "text-gray-800"
                    }`}
                >
                  Multi-City
                </span>
              </label>
            </div>

            <div className="flex flex-wrap items-end gap-3 mb-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex-1 min-w-[180px] relative" ref={modalRef}>
                <label className="text-sm text-gray-600 mb-2 block">From</label>
                <input
                  placeholder="New Delhi (DEL)"
                  onFocus={() => setActiveField("from")}
                  className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />

                {/* Modal under input */}
                {activeField === "from" && (
                  <div className="absolute top-[90px] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-20 min-h-[400px] overflow-y-auto animate-fadeIn">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-700">
                        Popular Airports
                      </h3>
                    </div>
                    <ul>
                      {dummyAirports.map((airport) => (
                        <li
                          key={airport.code}
                          className="px-4 py-3 hover:bg-indigo-50 cursor-pointer transition flex justify-between items-center"
                          onClick={() => setActiveField(null)}
                        >
                          <div>
                            <p className="text-gray-800 font-medium">
                              {airport.city} ({airport.code})
                            </p>
                            <p className="text-sm text-gray-500">{airport.country}</p>
                          </div>
                          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
                            {airport.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center pb-2">
               <button
  className="p-3 rounded-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33] text-white shadow-md hover:scale-105 transition-transform"
>
  <ArrowLeftRight className="h-5 w-5" />
</button>

              </div>
              <div className="flex-1 min-w-[180px] relative" ref={modalRef}>
                <label className="text-sm text-gray-600 mb-2 block">To</label>
                <input
                  placeholder="Udaipur (UDR)"
                  onFocus={() => setActiveField("to")}
                  className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />

                {/* Modal under input */}
                {activeField === "to" && (
                  <div className="absolute top-[90px] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-20 min-h-[400px] overflow-y-auto animate-fadeIn">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-700">
                        Suggested Destinations
                      </h3>
                    </div>
                    <ul>
                      {dummyAirports.map((airport) => (
                        <li
                          key={airport.code}
                          className="px-4 py-3 hover:bg-indigo-50 cursor-pointer transition flex justify-between items-center"
                          onClick={() => setActiveField(null)}
                        >
                          <div>
                            <p className="text-gray-800 font-medium">
                              {airport.city} ({airport.code})
                            </p>
                            <p className="text-sm text-gray-500">{airport.country}</p>
                          </div>
                          <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
                            {airport.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-[160px]">
                <label className="text-sm text-gray-600 mb-2 block">Departure</label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
              </div>
              <div className="flex-1 min-w-[160px]">
                <label className="text-sm text-gray-600 mb-2 block">Return</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (departureDate && value < departureDate) return;
                    setReturnDate(value);
                  }}
                  className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  min={departureDate} />
              </div>
              <div className="flex-1 min-w-[1100px]" onClick={() => setShowModal(!showModal)}>
                <label className="text-sm text-gray-600 mb-2 block">Passengers / Class</label>
                <button className="w-full h-14 flex items-center justify-between px-4 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 transition-all">
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-800">1 Passenger</div>
                    <div className="text-xs text-gray-500">Economy</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                <PassengerSelector showModal={showModal} setShowModal={setShowModal} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="px-10 py-4 
  bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] 
  hover:from-[#4A0C15] hover:to-[#681A33] 
  text-white text-base font-semibold uppercase tracking-wide 
  shadow-lg border border-[#4A0C15] rounded-xl 
  transition-all duration-300"
              >
                Search Flights
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightBookingForm;

