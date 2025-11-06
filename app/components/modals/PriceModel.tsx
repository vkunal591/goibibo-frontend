import React from "react";
import {
  X,
  Luggage,
  CalendarClock,
  Utensils,
  TicketPercent,
  Info,
} from "lucide-react";

interface FareOption {
  title: string;
  price: string;
  perAdult: string;
  category: string;
  baggage: string[];
  flexibility: string[];
  extras: string[];
  offers?: string[];
  highlight?: string;
  gradient?: string;
}

interface PriceModelProps {
  isOpen: boolean;
  onClose: () => void;
  flight?: {
    airline: string;
    departCity: string;
    arriveCity: string;
    image: string;
    departTime: string;
    arriveTime: string;
  };
}

const fareOptions: FareOption[] = [
  {
    title: "Saver",
    price: "₹7,056",
    perAdult: "per adult",
    category: "SAVER",
    baggage: ["7 Kgs Cabin Baggage", "15 Kgs Check-in Baggage"],
    flexibility: [
      "Cancellation fee starts at ₹3,999 (up to 24 hrs before departure)",
      "Date Change fee starts at ₹2,999 up to 3 hrs before departure",
    ],
    extras: ["Chargeable Seats", "Chargeable Meals"],
    offers: [
      "Flat ₹261 OFF using code GIRUSH",
      "12% OFF on HDFC Credit Cards (GOHDFCCC)",
    ],
  },
  {
    title: "Go Special",
    price: "₹7,455",
    perAdult: "per adult",
    category: "FARE BY Goibibo",
    baggage: ["7 Kgs Cabin Baggage", "15 Kgs Check-in Baggage"],
    flexibility: [
      "Cancellation fee starts at ₹3,999 (up to 24 hrs before departure)",
      "Date Change fee starts at ₹2,999 up to 3 hrs before departure",
    ],
    extras: ["Chargeable Seats", "Chargeable Meals"],
    highlight: "Benefits worth ₹5,000 included (Travel Insurance, etc.)",
    offers: [
      "Flat ₹261 OFF using code GIRUSH",
      "12% OFF on HDFC Credit Cards (GOHDFCCC)",
    ],
    gradient: "from-orange-50 to-white",
  },
  {
    title: "Flexi Plus",
    price: "₹7,712",
    perAdult: "per adult",
    category: "FLEXI PLUS",
    baggage: ["7 Kgs Cabin Baggage", "15 Kgs Check-in Baggage"],
    flexibility: [
      "Lower Cancellation fee ₹2,499 (up to 24 hrs before departure)",
      "Lower Date Change fee ₹249 up to 24 hrs before departure",
    ],
    extras: ["Free Seats", "Complimentary Meals"],
    gradient: "from-teal-50 to-white",
  },
  {
    title: "Super 6E",
    price: "₹8,631",
    perAdult: "per adult",
    category: "SUPER 6E",
    baggage: ["7 Kgs Cabin Baggage", "20 Kgs Check-in Baggage"],
    flexibility: [
      "Lower Cancellation fee ₹999 (up to 24 hrs before departure)",
      "Free Date Change up to 24 hrs before departure",
    ],
    extras: ["Free Seats", "Complimentary Meals"],
    offers: [
      "FLAT ₹930 OFF with code GOIBIBONEW",
      "Up to 10% off on HSBC & SBI Credit Cards",
    ],
    gradient: "from-blue-50 to-white",
  },
];

const PriceModel: React.FC<PriceModelProps> = ({ isOpen, onClose, flight }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            <span className="text-teal-600">4 Fare Options</span> for{" "}
            {flight ? flight.airline : "Flight"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Flight Info */}
        {flight && (
          <div className="px-5 py-3 border-b flex flex-wrap items-center gap-2 text-gray-700 text-sm">
            <span className="font-semibold text-base md:text-lg">
              {flight.departCity} → {flight.arriveCity}
            </span>
            <img
              src={flight.image}
              alt={flight.airline}
              className="w-6 h-6 rounded"
            />
            <span>
              {flight.airline} · {flight.departTime} - {flight.arriveTime}
            </span>
          </div>
        )}

        {/* Fare Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6 overflow-y-auto max-h-[80vh]">
          {fareOptions.map((fare, i) => (
            <div
              key={i}
              className={`border rounded-2xl bg-gradient-to-b ${
                fare.gradient || "from-white to-gray-50"
              } hover:shadow-lg transition flex flex-col`}
            >
              {/* Card Header */}
              <div className="p-5 border-b">
                <div className="text-xl font-bold">{fare.price}</div>
                <div className="text-xs text-gray-600">{fare.perAdult}</div>
                <div className="uppercase text-xs mt-1 font-semibold text-gray-700">
                  {fare.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-5 space-y-4 text-sm text-gray-700">
                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <Luggage size={16} className="text-teal-600" />
                    <span>Baggage</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {fare.baggage.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <CalendarClock size={16} className="text-teal-600" />
                    <span>Flexibility</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {fare.flexibility.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <Utensils size={16} className="text-teal-600" />
                    <span>Seats, Meals & More</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {fare.extras.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {fare.highlight && (
                  <div className="p-3 bg-yellow-100 border border-yellow-200 rounded-lg flex items-start gap-2">
                    <Info size={16} className="text-yellow-700 mt-0.5" />
                    <span className="text-sm font-medium">{fare.highlight}</span>
                  </div>
                )}

                {fare.offers && (
                  <div className="p-3 bg-teal-50 border border-teal-100 rounded-lg space-y-1">
                    {fare.offers.map((offer, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <TicketPercent
                          size={16}
                          className="text-teal-600 mt-0.5"
                        />
                        <span>{offer}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-5 border-t flex justify-between items-center gap-2">
                <button className="px-4 py-2 w-1/2 text-sm font-semibold text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition">
                  LOCK NOW
                </button>
                <button className="px-4 py-2 w-1/2 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceModel;

