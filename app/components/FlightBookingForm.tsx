"use client";
import {
  ArrowLeftRight,
  Plus,
  X,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
const FlightBookingForm = () => {
  const [tripType, setTripType] = useState("return");
  const [multiCityTrips, setMultiCityTrips] = useState([{ from: "", to: "", departure: "" }]);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        (null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleAddCity = () => {
    if (multiCityTrips.length < 5) {
      setMultiCityTrips([...multiCityTrips, { from: "", to: "", departure: "" }]);
    }
  };
  const handleRemoveCity = (index: number) => {
    const updatedTrips = multiCityTrips.filter((_, i) => i !== index);
    setMultiCityTrips(updatedTrips);
  };
  const handleMultiCityChange = (index: number, field: "from" | "to" | "departure", value: string) => {
    const updatedTrips = [...multiCityTrips];
    updatedTrips[index][field] = value;
    setMultiCityTrips(updatedTrips);
  };
  return (
    <div className="min-h-[70vh] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-t-2xl shadow-lg border border-border">
          <div className="p-8 rounded-2xl bg-gray-50">
            <div className="flex gap-8 mb-6">
              {["return", "oneway", "multicity"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="tripType"
                      value={type}
                      checked={tripType === type}
                      onChange={(e) => setTripType(e.target.value)}
                      className="sr-only"/>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        tripType === type
                          ? "border-[#5A0F1A] bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]"
                          : "border-gray-400"
                      }`}>
                      {tripType === type && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>
                  <span
                    className={`font-medium transition-colors ${
                      tripType === type ? "text-[#5A0F1A]" : "text-gray-800"
                    }`}>
                    {type === "return" ? "Return" : type === "oneway" ? "One Way" : "Multi-City"}
                  </span>
                </label>
              ))}
            </div>
            {tripType !== "multicity" && (
              <div className="flex flex-wrap items-end gap-3 mb-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex-1 min-w-[180px]">
                  <label className="text-sm text-gray-600 mb-2 block">From</label>
                  <input
                    placeholder="Enter City or Airport"
                    className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"/>
                </div>
                <div className="flex items-center justify-center pb-2">
                  <button className="p-3 rounded-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white shadow-md hover:scale-105 transition-transform">
                    <ArrowLeftRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 min-w-[180px]">
                  <label className="text-sm text-gray-600 mb-2 block">To</label>
                  <input
                    placeholder="Enter Destination"
                    className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"/>
                </div>
                <div className="flex-1 min-w-[160px]">
                  <label className="text-sm text-gray-600 mb-2 block">Departure</label>
                  <input
                    type="date"
                    className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"/>
                </div>
                {tripType === "return" && (
                  <div className="flex-1 min-w-[160px]">
                    <label className="text-sm text-gray-600 mb-2 block">Return</label>
                    <input
                      type="date"
                      className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"/>
                  </div>
                )}
              </div>
            )}
            {tripType === "multicity" && (
              <div className="space-y-6 mb-8">
                {multiCityTrips.map((trip, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap items-end gap-3 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 relative">
                    <div className="flex-1 min-w-[180px]">
                      <label className="text-sm text-gray-600 mb-2 block">From</label>
                      <input
                        placeholder="Enter City or Airport"
                        value={trip.from}
                        onChange={(e) => handleMultiCityChange(index, "from", e.target.value)}
                        className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"/>
                    </div>
                    <div className="flex items-center justify-center pb-2">
                      <button className="p-3 rounded-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white shadow-md hover:scale-105 transition-transform">
                        <ArrowLeftRight className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex-1 min-w-[180px]">
                      <label className="text-sm text-gray-600 mb-2 block">To</label>
                      <input
                        placeholder="Enter Destination"
                        value={trip.to}
                        onChange={(e) => handleMultiCityChange(index, "to", e.target.value)}
                        className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"/>
                    </div>
                    <div className="flex-1 min-w-[160px]">
                      <label className="text-sm text-gray-600 mb-2 block">Departure</label>
                      <input
                        type="date"
                        value={trip.departure}
                        onChange={(e) => handleMultiCityChange(index, "departure", e.target.value)}
                        className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                    </div>
                    {multiCityTrips.length > 1 && (
                      <button
                        onClick={() => handleRemoveCity(index)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                {multiCityTrips.length < 5 && (
                  <button
                    onClick={handleAddCity}
                    className="flex items-center gap-2 text-[#5A0F1A] hover:text-[#7B1E3D] font-semibold">
                    <Plus className="w-5 h-5" /> Add City
                  </button>
                )}
              </div>
            )}
            <div className="flex items-center justify-between">
              <button
                className="px-10 py-4 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33] text-white text-base font-semibold uppercase tracking-wide shadow-lg border border-[#4A0C15] rounded-xl transition-all duration-300">
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
