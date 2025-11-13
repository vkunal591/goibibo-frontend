"use client";
import { ArrowLeftRight, ChevronDown, Plus, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import PassengerSelector from "./modals/PassengerSelector";
import { apiService } from "@/api/apiService";
const FlightBookingForm = () => {
  const [tripType, setTripType] = useState("return");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [departureDate, setDepartureDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [fromAirport, setFromAirport] = useState<string>("");
  const [toAirport, setToAirport] = useState<string>("");
  const [multiCities, setMultiCities] = useState([
    { from: "", to: "", date: "" },
  ]);
  const [passengerInfo, setPassengerInfo] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Economy",
  });
  const [searchData, setSearchData] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
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
const handleSearchFlights = async () => {
  const data = {
    tripType,        // One-way, Round-trip, or Multi-city
    fromAirport,     // Departure airport code or object
    toAirport,       // Destination airport code or object
    departureDate,   // Selected departure date
    returnDate,      // Selected return date (if applicable)
    multiCities,     // Array of multiple city routes (if any)
    passengerInfo,   // Object with adults, children, infants, and cabin class
  };
  setSearchData(data);
  console.log("Flight Search Data:", data);
  try {
    const response = await apiService.post("/api/flight/search", {
      ...data,
      timeout: 5000, 
    });
  } catch (error: any) {
    console.error("Error searching flights:", error.response?.data || error.message || error);
  }
}; 
  const addMultiCity = () => {
    if (multiCities.length < 5) {
      setMultiCities([...multiCities, { from: "", to: "", date: "" }]);
    }
  };
  const removeMultiCity = (index: number) => {
    setMultiCities(multiCities.filter((_, i) => i !== index));
  };
  const handleMultiCityChange = (
    index: number,
    field: "from" | "to" | "date",
    value: string
  ) => {
    const updated = [...multiCities];
    updated[index][field] = value;
    setMultiCities(updated);
  };
  const AirportDropdown = ({
    onSelect,
  }: {
    onSelect: (airport: string) => void;
  }) => (
    <div className="absolute top-[90px] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-30 max-h-[300px] overflow-y-auto">
      <div className="p-3 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-700">
          Popular Airports
        </h3>
      </div>
      <ul>
        {dummyAirports.map((airport) => (
          <li
            key={airport.code}
            className="px-4 py-3 hover:bg-indigo-50 cursor-pointer transition flex justify-between items-center"
            onClick={() => onSelect(`${airport.city} (${airport.code})`)}
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
  );
  return (
    <div className="min-h-[70vh] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-visible">
          <div className="p-8 bg-gray-50 rounded-t-2xl">
            <div className="flex gap-8 mb-6">
              {["return", "oneway", "multicity"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                >
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
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 
                        ${
                          tripType === type
                            ? "border-[#5A0F1A] bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]"
                            : "border-gray-400"
                        }`}
                    >
                      {tripType === type && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                  <span
                    className={`font-medium transition-colors ${
                      tripType === type ? "text-[#5A0F1A]" : "text-gray-800"
                    }`}
                  >
                    {type === "return"
                      ? "Return"
                      : type === "oneway"
                      ? "One Way"
                      : "Multi-City"}
                  </span>
                </label>
              ))}
            </div>
            {tripType !== "multicity" ? (
              <div
                className="flex flex-wrap items-end gap-3 mb-8 bg-white p-6 rounded-2xl shadow-md border border-gray-200"
                ref={modalRef}
              >
                <div className="flex-1 min-w-[180px] relative">
                  <label className="text-sm text-gray-600 mb-2 block">
                    From
                  </label>
                  <input
                    value={fromAirport}
                    onChange={(e) => setFromAirport(e.target.value)}
                    placeholder="New Delhi (DEL)"
                    onFocus={() => setActiveField("from")}
                    className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  {activeField === "from" && (
                    <AirportDropdown
                      onSelect={(airport) => {
                        setFromAirport(airport);
                        setActiveField(null);
                      }}
                    />
                  )}
                </div>
                <div className="flex items-center justify-center pb-2">
                  <button className="p-3 rounded-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white shadow-md">
                    <ArrowLeftRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 min-w-[180px] relative">
                  <label className="text-sm text-gray-600 mb-2 block">To</label>
                  <input
                    value={toAirport}
                    onChange={(e) => setToAirport(e.target.value)}
                    placeholder="Udaipur (UDR)"
                    onFocus={() => setActiveField("to")}
                    className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  {activeField === "to" && (
                    <AirportDropdown
                      onSelect={(airport) => {
                        setToAirport(airport);
                        setActiveField(null);
                      }}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-[160px]">
                  <label className="text-sm text-gray-600 mb-2 block">
                    Departure
                  </label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full h-14 px-4 text-base border rounded-xl bg-white focus:ring-2 focus:ring-indigo-500 outline-none border-gray-300"
                  />
                </div>
                <div className="flex-1 min-w-[160px]">
                  <label className="text-sm text-gray-600 mb-2 block">
                    Return
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (departureDate && value < departureDate) return;
                      setReturnDate(value);
                    }}
                    disabled={tripType === "oneway"}
                    min={departureDate}
                    className={`w-full h-14 px-4 text-base border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none ${
                      tripType === "oneway"
                        ? "border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col gap-4 mb-8 bg-white p-6 rounded-2xl shadow-md border border-gray-200"
                ref={modalRef}
              >
                {multiCities.map((segment, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap items-end gap-3 relative border-b border-gray-100 pb-4"
                  >
                    <div className="flex-1 min-w-[180px] relative">
                      <label className="text-sm text-gray-600 mb-2 block">
                        From
                      </label>
                      <input
                        value={segment.from}
                        onChange={(e) =>
                          handleMultiCityChange(index, "from", e.target.value)
                        }
                        placeholder="City or Airport"
                        onFocus={() => setActiveField(`from-${index}`)}
                        className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                      {activeField === `from-${index}` && (
                        <AirportDropdown
                          onSelect={(airport) => {
                            handleMultiCityChange(index, "from", airport);
                            setActiveField(null);
                          }}
                        />
                      )}
                    </div>
                    <div className="flex items-center justify-center pb-2">
                      <ArrowLeftRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-[180px] relative">
                      <label className="text-sm text-gray-600 mb-2 block">
                        To
                      </label>
                      <input
                        value={segment.to}
                        onChange={(e) =>
                          handleMultiCityChange(index, "to", e.target.value)
                        }
                        placeholder="Destination"
                        onFocus={() => setActiveField(`to-${index}`)}
                        className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                      {activeField === `to-${index}` && (
                        <AirportDropdown
                          onSelect={(airport) => {
                            handleMultiCityChange(index, "to", airport);
                            setActiveField(null);
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-[160px]">
                      <label className="text-sm text-gray-600 mb-2 block">
                        Departure
                      </label>
                      <input
                        type="date"
                        value={segment.date}
                        onChange={(e) =>
                          handleMultiCityChange(index, "date", e.target.value)
                        }
                        className="w-full h-14 px-4 text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>
                    {index > 0 && (
                      <button
                        onClick={() => removeMultiCity(index)}
                        className="absolute -top-2 -right-2 p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-500 transition"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                {multiCities.length < 5 && (
                  <button
                    onClick={addMultiCity}
                    className="flex items-center gap-2 text-[#5A0F1A] font-medium hover:text-[#7B1E3D] transition mt-2"
                  >
                    <Plus className="h-5 w-5" /> Add City
                  </button>
                )}
              </div>
            )}
            <div
              className="flex-1 min-w-[300px] mb-8"
              onClick={() => setShowModal(!showModal)}
            >
              <label className="text-sm text-gray-600 mb-2 block">
                Passengers / Class
              </label>
              <button className="w-full h-14 flex items-center justify-between px-4 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 transition-all">
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-800">
                    {passengerInfo.adults +
                      passengerInfo.children +
                      passengerInfo.infants}{" "}
                    Passenger
                    {passengerInfo.adults +
                      passengerInfo.children +
                      passengerInfo.infants >
                    1
                      ? "s"
                      : ""}
                  </div>
                  <div className="text-xs text-gray-500">
                    {passengerInfo?.cabin}
                  </div>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              <PassengerSelector
                showModal={showModal}
                setShowModal={setShowModal}
                passengerInfo={passengerInfo}
                setPassengerInfo={setPassengerInfo}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSearchFlights}
                className="px-10 py-4 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33] text-white text-base font-semibold uppercase tracking-wide shadow-lg border border-[#4A0F1A] rounded-xl transition-all duration-300"
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
