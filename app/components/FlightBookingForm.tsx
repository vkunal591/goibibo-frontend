"use client";
import { ArrowLeftRight, Plus, X, Users } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState("return");
  const [multiCityTrips, setMultiCityTrips] = useState([{ from: "", to: "", departure: "" }]);
  const [showTraveler, setShowTraveler] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "Economy/Premium Economy",
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowTraveler(false);
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

  const updateTraveler = (type: string, value: number | string) => {
    setTravelers({ ...travelers, [type]: value });
  };

  const handleApplyTraveler = () => {
    setShowTraveler(false);
  };

  return (
    <div className="min-h-[70vh] p-6 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
          {/* Trip Type Selector */}
          <div className="flex gap-8 mb-8">
            {["return", "oneway", "multicity"].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={(e) => setTripType(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      tripType === type
                        ? "border-[#5A0F1A] bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]"
                        : "border-gray-400"
                    }`}
                  >
                    {tripType === type && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </div>
                <span
                  className={`font-medium transition-colors ${
                    tripType === type ? "text-[#5A0F1A]" : "text-gray-800"
                  }`}
                >
                  {type === "return" ? "Return" : type === "oneway" ? "One Way" : "Multi-City"}
                </span>
              </label>
            ))}
          </div>

          {/* Flight Fields */}
          {tripType !== "multicity" && (
            <div className="flex flex-wrap items-end gap-3 mb-8 bg-white backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-200">
              <div className="flex-1 min-w-[180px]">
                <label className="text-sm text-gray-600 mb-2 block">From</label>
                <input
                  placeholder="Enter City or Airport"
                  className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
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
                  className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
              </div>
              <div className="flex-1 min-w-[160px]">
                <label className="text-sm text-gray-600 mb-2 block">Departure</label>
                <input
                  type="date"
                  className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
              </div>
              {tripType === "return" && (
                <div className="flex-1 min-w-[160px]">
                  <label className="text-sm text-gray-600 mb-2 block">Return</label>
                  <input
                    type="date"
                    className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
              )}
            </div>
          )}

          {/* Multi-City Section */}
          {tripType === "multicity" && (
            <div className="space-y-6 mb-8 relative z-10">
              {multiCityTrips.map((trip, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-end gap-3 bg-white p-6 rounded-2xl shadow-md border border-gray-200 relative"
                >
                  <div className="flex-1 min-w-[180px]">
                    <label className="text-sm text-gray-600 mb-2 block">From</label>
                    <input
                      placeholder="Enter City or Airport"
                      value={trip.from}
                      onChange={(e) => handleMultiCityChange(index, "from", e.target.value)}
                      className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
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
                      className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div className="flex-1 min-w-[160px]">
                    <label className="text-sm text-gray-600 mb-2 block">Departure</label>
                    <input
                      type="date"
                      value={trip.departure}
                      onChange={(e) => handleMultiCityChange(index, "departure", e.target.value)}
                      className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  {multiCityTrips.length > 1 && (
                    <button
                      onClick={() => handleRemoveCity(index)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
              {multiCityTrips.length < 5 && (
                <button
                  onClick={handleAddCity}
                  className="flex items-center gap-2 text-[#5A0F1A] hover:text-[#7B1E3D] font-semibold"
                >
                  <Plus className="w-5 h-5" /> Add City
                </button>
              )}
            </div>
          )}

          {/* Travelers Section (Visible in all modes) */}
          <div className="relative flex-1 min-w-[180px] mb-8" ref={modalRef}>
            <label className="text-sm text-gray-600 mb-2 block">Travellers & Class</label>
            <button
              onClick={() => setShowTraveler(!showTraveler)}
              className="w-full h-14 px-4 border border-gray-300 rounded-xl flex items-center justify-between text-base bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              <span>
                {travelers.adults} Adult{travelers.adults > 1 && "s"}, {travelers.children} Child,{" "}
                {travelers.infants} Infant — {travelers.travelClass}
              </span>
              <Users className="w-5 h-5 text-gray-500" />
            </button>

            {showTraveler && (
              <div className="absolute z-[9999] mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 p-5 space-y-5 max-h-[350px] overflow-y-auto">
                {[
                  { title: "ADULTS (12y +)", key: "adults", options: [1,2,3,4,5,6,7,8,9,">9"], limit: 10 },
                  { title: "CHILDREN (2y - 12y)", key: "children", options: [0,1,2,3,4,5,6,">6"], limit: 7 },
                  { title: "INFANTS (below 2y)", key: "infants", options: [0,1,2,3,4,5,6,">6"], limit: 7 },
                ].map(({ title, key, options, limit }) => (
                  <div key={key}>
                    <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {options.map((num) => (
                        <button
                          key={num}
                          onClick={() => updateTraveler(key, num === `>${limit - 1}` ? limit : Number(num))}
                          className={`py-2 rounded-lg border text-sm ${
                            travelers[key as keyof typeof travelers] ===
                            (num === `>${limit - 1}` ? limit : Number(num))
                              ? "bg-[#5A0F1A] text-white"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">CHOOSE TRAVEL CLASS</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["Economy/Premium Economy", "Premium Economy", "Business", "First Class"].map((cls) => (
                      <button
                        key={cls}
                        onClick={() => updateTraveler("travelClass", cls)}
                        className={`py-2 px-3 rounded-lg border text-sm text-center ${
                          travelers.travelClass === cls
                            ? "bg-[#5A0F1A] text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={handleApplyTraveler}
                    className="w-full py-3 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white font-semibold rounded-lg hover:opacity-90 transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search Flights */}
          <div className="flex justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33] text-white text-base font-semibold uppercase tracking-wide shadow-lg border border-[#4A0C15] rounded-xl transition-all duration-300">
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightBookingForm;
