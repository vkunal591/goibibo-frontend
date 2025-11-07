"use client";
import React, { useState } from "react";
import {
    Plane,
    IndianRupee,
    MapPin,
    Lock,
    X,
    CheckCircle2,
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

const onwardFlights: FlightData[] = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    airline: "IndiGo",
    code: "6E 6019, 6E 7038",
    departTime: "10:45",
    departCity: "New Delhi",
    duration: "11h 05m",
    stops: "1 Stop via Hyderabad",
    arriveTime: "21:50",
    arriveCity: "Kozhikode",
    price: 7056 + i * 150,
    image: "https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/6E.png?v=19",
}));

const returnFlights: FlightData[] = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    airline: "IndiGo",
    code: "6E 7020, 6E 7037",
    departTime: "07:30",
    departCity: "Kozhikode",
    duration: "10h 35m",
    stops: "1 Stop via Hyderabad",
    arriveTime: "18:05",
    arriveCity: "New Delhi",
    price: 7350 + i * 150,
    image: "https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/6E.png?v=19",
}));

const fareOptions = [
    {
        name: "SAVER",
        price: 7056,
        perks: [
            { text: "7 Kgs Cabin Baggage", icon: CheckCircle2 },
            { text: "15 Kgs Check-in Baggage", icon: CheckCircle2 },
            { text: "Cancellation starts at ₹3,999", icon: ShieldCheck },
            { text: "Date Change fee ₹2,999", icon: ShieldCheck },
        ],
    },
    {
        name: "FLEXI PLUS",
        price: 7712,
        perks: [
            { text: "Free Seats", icon: CheckCircle2 },
            { text: "Complimentary Meals", icon: Utensils },
            { text: "Lower Cancellation fee ₹2,499", icon: ShieldCheck },
        ],
    },
];

const Multiway = () => {
    const [selectedFlight, setSelectedFlight] = useState<FlightData | null>(null);

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                    Round Trip:{" "}
                    <span className="text-[#7B1E3D]">
                        New Delhi → Kozhikode → New Delhi
                    </span>
                </h2>
                <div className="grid lg:grid-cols-2 gap-10">
                   <div>
  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
    Onward Flights
  </h3>

  <div className="space-y-5">
    {onwardFlights.map((flight) => (
      <div
        key={flight.id}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
      >
        {/* Top Section: Airline + Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={flight.image}
              alt={flight.airline}
              className="h-10 w-10 rounded-full border border-gray-100 shadow-sm"
            />
            <div>
              <p className="font-semibold text-gray-900">{flight.airline}</p>
              <p className="text-xs text-gray-500">{flight.code}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="font-semibold text-[#7B1E3D] text-lg">
              ₹{flight.price.toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-gray-500">per person</p>
          </div>
        </div>

        {/* Middle Section: Route Info */}
        <div className="flex items-center justify-between gap-6 mb-4">
          {/* Departure */}
          <div className="text-center">
            <p className="font-semibold text-gray-900 text-lg">
              {flight.departTime}
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <MapPin size={12} /> {flight.departCity}
            </p>
          </div>

          {/* Plane Route */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-[1px] bg-gray-300 mb-1"></div>
            <Plane size={18} className="text-gray-400 rotate-90" />
            <p className="text-[11px] text-gray-500 mt-1">{flight.stops}</p>
          </div>

          {/* Arrival */}
          <div className="text-center">
            <p className="font-semibold text-gray-900 text-lg">
              {flight.arriveTime}
            </p>
            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
              <MapPin size={12} /> {flight.arriveCity}
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setSelectedFlight(flight)}
          className="w-full py-2.5 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white rounded-xl font-medium hover:from-[#721728] hover:to-[#8C2A46] transition-all"
        >
          View Fares
        </button>
      </div>
    ))}
  </div>
</div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                            Return Flights
                        </h3>
                        <div className="space-y-5">
                            {returnFlights.map((flight) => (
                                <div
                                    key={flight.id}
                                    className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={flight.image}
                                                alt={flight.airline}
                                                className="h-10 w-10 rounded-full border border-gray-100 shadow-sm"
                                            />
                                            <div>
                                                <p className="font-semibold text-gray-900">{flight.airline}</p>
                                                <p className="text-xs text-gray-500">{flight.code}</p>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-semibold text-[#7B1E3D] text-lg">
                                                ₹{flight.price.toLocaleString("en-IN")}
                                            </p>
                                            <p className="text-xs text-gray-500">per person</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-6 mb-4">
                                        <div className="text-center">
                                            <p className="font-semibold text-gray-900 text-lg">
                                                {flight.departTime}
                                            </p>
                                            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                                                <MapPin size={12} /> {flight.departCity}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="w-16 h-[1px] bg-gray-300 mb-1"></div>
                                            <Plane size={18} className="text-gray-400 rotate-90" />
                                            <p className="text-[11px] text-gray-500 mt-1">{flight.stops}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="font-semibold text-gray-900 text-lg">
                                                {flight.arriveTime}
                                            </p>
                                            <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                                                <MapPin size={12} /> {flight.arriveCity}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedFlight(flight)}
                                        className="w-full py-2.5 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white rounded-xl font-medium hover:from-[#7B1E3D] hover:to-[#5A0F1A] transition-all"
                                    >
                                        Check Fares
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {selectedFlight && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl relative overflow-hidden">
                        <button
                            onClick={() => setSelectedFlight(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition">
                            <X size={22} />
                        </button>
                        <div className="bg-indigo-600 text-white px-6 py-3">
                            <h3 className="font-semibold text-base">
                                Fare Options for {selectedFlight.departCity} →{" "}
                                {selectedFlight.arriveCity}
                            </h3>
                        </div>
                        <div className="px-6 py-5 border-b border-gray-200 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                            <img
                                src={selectedFlight.image}
                                alt={selectedFlight.airline}
                                className="w-8 h-8" />
                            <span className="font-semibold">{selectedFlight.airline}</span> •{" "}
                            {selectedFlight.code} • {selectedFlight.departCity} →{" "}
                            {selectedFlight.arriveCity} • Departure at{" "}
                            {selectedFlight.departTime}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 py-6">
                            {fareOptions.map((fare) => (
                                <div
                                    key={fare.name}
                                    className="border border-gray-200 rounded-xl p-5 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                    <h4 className="font-semibold text-gray-800 text-sm uppercase mb-2">
                                        {fare.name}
                                    </h4>
                                    <p className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-1">
                                        <IndianRupee size={15} />
                                        {fare.price.toLocaleString("en-IN")}
                                        <span className="text-xs text-gray-500 ml-1">per adult</span>
                                    </p>
                                    <ul className="space-y-2 text-sm mb-4">
                                        {fare.perks.map((perk, i) => {
                                            const Icon = perk.icon;
                                            return (
                                                <li key={i} className="flex items-center gap-2">
                                                    <Icon size={14} className="text-green-600" />
                                                    {perk.text}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="flex justify-between gap-2">
                                        <button className="w-1/2 border border-indigo-600 text-indigo-600 rounded-lg py-2 text-xs font-semibold hover:bg-indigo-50 flex items-center justify-center gap-1 transition">
                                            <Lock size={12} /> LOCK
                                        </button>
                                        <button className="w-1/2 bg-orange-500 text-white rounded-lg py-2 text-xs font-semibold hover:bg-orange-600 transition">
                                            BOOK
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

export default Multiway;
