import React from "react";
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
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Search Widget */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          {/* Trip Type */}
          <div className="flex flex-col">
            <label
              htmlFor="tripType"
              className="text-sm font-semibold text-gray-600 mb-2"
            >
              Trip Type
            </label>
            <div className="relative flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100">
              <span className="text-gray-800 font-medium text-sm">One Way</span>
              <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          {/* From */}
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

          {/* Swap Icon */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              aria-label="Swap cities"
              className="p-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition"
            >
              <ArrowLeftRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* To */}
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

          {/* Depart */}
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

          {/* Return */}
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

          {/* Passengers */}
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

          {/* Search Button */}
          <div className="flex-shrink-0">
            <button
              type="button"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
            >
              <Search className="h-4 w-4 mr-2" />
              Search Flights
            </button>
          </div>
        </div>

        {/* Fare Type Selection */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-gray-600">
              Fare Type:
            </span>
            <ul className="flex items-center gap-5 text-sm text-gray-700">
              {fareTypes.map((type, index) => (
                <li
                  key={type}
                  className={`cursor-pointer px-3 py-1 border rounded-md transition ${
                    index === 0
                      ? "bg-blue-50 border-blue-400 text-blue-700 font-medium"
                      : "hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FlightSearchHeader;
