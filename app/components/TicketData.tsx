"use client";

import React, { useState } from "react";
import {
  Plane,
  IndianRupee,
  MapPin,
  Lock,
  X,
  Clock,
  CheckCircle2,
  Luggage,
  Utensils,
  ShieldCheck,
} from "lucide-react";

interface FlightData {
  id: number;
  airline: string;
  code: string;
  departTime: string;
  departCity: string;
  duration: string;
  stops: string;
  arriveTime: string;
  arriveCity: string;
  price: number;
  image: string;
}

const flights: FlightData[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  airline: "IndiGo",
  code: "6E 6019, 6E 7038",
  departTime: "10:45",
  departCity: "New Delhi",
  duration: "11h 05m",
  stops: "1 Stop via Hyderabad",
  arriveTime: "21:50",
  arriveCity: "Kozhikode",
  price: 7056 + i * 100,
  image:
    "https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/6E.png?v=19",
}));

const fareOptions = [
  {
    name: "SAVER",
    price: 7056,
    color: "border-gray-200 bg-white",
    perks: [
      { text: "7 Kgs Cabin Baggage", icon: CheckCircle2 },
      { text: "15 Kgs Check-in Baggage", icon: CheckCircle2 },
      { text: "Cancellation starts at ₹3,999", icon: ShieldCheck },
      { text: "Date Change fee ₹2,999", icon: ShieldCheck },
      { text: "Chargeable Seats", icon: Utensils },
      { text: "Chargeable Meals", icon: Utensils },
    ],
    offer:
      "Get Flat ₹261 OFF using code GIRUSH | 12% OFF on HDFC Credit Cards using GOHDFCCC",
  },
  {
    name: "FARE BY GOIBIBO",
    price: 7455,
    tag: "GO SPECIAL",
    color: "border-orange-300 bg-orange-50",
    perks: [
      { text: "7 Kgs Cabin Baggage", icon: CheckCircle2 },
      { text: "15 Kgs Check-in Baggage", icon: CheckCircle2 },
      { text: "Cancellation starts at ₹3,999", icon: ShieldCheck },
      { text: "Date Change fee ₹2,999", icon: ShieldCheck },
      { text: "Chargeable Seats", icon: Utensils },
      { text: "Chargeable Meals", icon: Utensils },
      { text: "Travel Insurance Included", icon: ShieldCheck },
    ],
    offer:
      "Get Flat ₹261 OFF using code GIRUSH | 12% OFF on HDFC Credit Cards using GOHDFCCC",
  },
  {
    name: "FLEXI PLUS",
    price: 7712,
    color: "border-green-200 bg-green-50",
    perks: [
      { text: "7 Kgs Cabin Baggage", icon: CheckCircle2 },
      { text: "15 Kgs Check-in Baggage", icon: CheckCircle2 },
      { text: "Lower Cancellation fee ₹2,499", icon: ShieldCheck },
      { text: "Lower Date Change ₹249", icon: ShieldCheck },
      { text: "Free Seats", icon: CheckCircle2 },
      { text: "Complimentary Meals", icon: Utensils },
    ],
    offer:
      "Get Flat ₹261 OFF using code GIRUSH | 12% OFF on HDFC Credit Cards using GOHDFCCC",
  },
  {
    name: "SUPER FLEXI",
    price: 8689,
    color: "border-blue-200 bg-blue-50",
    perks: [
      { text: "7 Kgs Cabin Baggage", icon: CheckCircle2 },
      { text: "20 Kgs Check-in Baggage", icon: Luggage },
      { text: "Free Seats", icon: CheckCircle2 },
      { text: "Complimentary Meals", icon: Utensils },
      { text: "Zero Cancellation Fee", icon: ShieldCheck },
    ],
    offer:
      "Get Flat ₹261 OFF using code GIRUSH | 12% OFF on HDFC Credit Cards using GOHDFCCC",
  },
];

const TicketData: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = useState<FlightData | null>(null);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Flights from <span className="font-bold">New Delhi</span> to{" "}
          <span className="font-bold">Kozhikode</span>
        </h2>

        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all p-5 mb-6 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={flight.image}
                  alt={flight.airline}
                  className="w-10 h-10"
                />
                <div>
                  <p className="font-semibold text-gray-900">{flight.airline}</p>
                  <p className="text-xs text-gray-500">{flight.code}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:gap-6 text-center sm:text-left">
                <div>
                  <p className="font-medium text-gray-900 text-lg">
                    {flight.departTime}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center justify-center sm:justify-start gap-1">
                    <MapPin size={14} /> {flight.departCity}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-gray-500">
                  <Plane size={18} className="rotate-90" />
                  <p className="text-xs">
                    {flight.duration} · {flight.stops}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-lg">
                    {flight.arriveTime}
                  </p>
                  <p className="text-gray-600 text-sm flex items-center justify-center sm:justify-start gap-1">
                    <MapPin size={14} /> {flight.arriveCity}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-semibold text-gray-900 flex items-center justify-end gap-1">
                  <IndianRupee size={16} />{" "}
                  {flight.price.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-gray-500">per adult</p>
                <button
                  onClick={() => setSelectedFlight(flight)}
                  className="mt-2 w-full sm:w-auto px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  VIEW FARES
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {selectedFlight && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl relative animate-fadeIn overflow-hidden">
      {/* Close */}
      <button
        onClick={() => setSelectedFlight(null)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
      >
        <X size={22} />
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3">
        <h3 className="font-semibold text-sm md:text-base">
          4 FARE OPTIONS available for your trip
        </h3>
      </div>

      {/* Flight Info */}
      <div className="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
        <img
          src={selectedFlight.image}
          alt={selectedFlight.airline}
          className="w-8 h-8"
        />
        <span className="font-semibold">{selectedFlight.airline}</span> •{" "}
        {selectedFlight.code} • {selectedFlight.departCity} →{" "}
        {selectedFlight.arriveCity} • Departure at{" "}
        {selectedFlight.departTime}
      </div>

      {/* Fare Cards */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-6 py-6 scrollbar-thin scrollbar-thumb-gray-300">
        {fareOptions.map((fare) => (
          <div
            key={fare.name}
            className={`flex-shrink-0 min-w-[260px] border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                {fare.name}
              </h4>
              {fare.tag && (
                <span className="text-[11px] font-semibold text-red-500 border border-red-400 rounded-md px-2 py-[1px]">
                  {fare.tag}
                </span>
              )}
            </div>

            <p className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-1">
              <IndianRupee size={15} />
              {fare.price.toLocaleString("en-IN")}
              <span className="text-xs font-normal text-gray-500 ml-1">
                per adult
              </span>
            </p>

            <ul className="space-y-1.5 mb-4 text-sm">
              {fare.perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 leading-tight"
                  >
                    <Icon size={14} className="text-green-600" />
                    {perk.text}
                  </li>
                );
              })}
            </ul>

            <p className="text-xs text-gray-700 bg-yellow-50 border border-yellow-200 p-2 rounded-lg mb-4">
              {fare.offer}
            </p>

            <div className="flex justify-between gap-2">
              <button className="w-1/2 border border-blue-600 text-blue-600 rounded-lg py-2 text-xs font-semibold hover:bg-blue-50 flex items-center justify-center gap-1 transition">
                <Lock size={12} /> LOCK NOW
              </button>
              <button className="w-1/2 bg-orange-500 text-white rounded-lg py-2 text-xs font-semibold hover:bg-orange-600 transition">
                BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default TicketData;
