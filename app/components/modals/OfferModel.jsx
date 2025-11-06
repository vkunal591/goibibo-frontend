import React from "react";

const OfferModel = () => {
  return (
    <div className="bg-white min-h-screen px-8 py-12">
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-gray-900">Offers For You</h2>
         
        </div>
        <ul className="flex gap-4 border-b border-gray-200 pb-2 text-gray-600 font-medium text-sm mb-10 overflow-x-auto">
          <li className="hover:text-indigo-600 cursor-pointer">Holidays</li>
          <li className="hover:text-indigo-600 cursor-pointer">Flights</li>
        </ul>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden">
            <img
              src="https://gos3.ibcdn.com/hotels-1761136023.jpg"
              alt="Hotels Offer"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium">Hotels</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                Up to 52% OFF* on Hotels & Homestays!
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src="https://go-assets.ibcdn.com/u/GI/images/1736242015211-Calendar.png"
                  alt="timer"
                  className="w-4 h-4"
                />
                <span className="text-gray-600 text-sm">Valid till 30th Nov’25</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden">
            <img
              src="https://gos3.ibcdn.com/flight-1761136012.jpg"
              alt="Flights Offer"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium">Flights</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                Up to 25% OFF* on Flights
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src="https://go-assets.ibcdn.com/u/GI/images/1736242015211-Calendar.png"
                  alt="timer"
                  className="w-4 h-4"
                />
                <span className="text-gray-600 text-sm">Valid till 30th Nov’25</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden">
            <img
              src="https://gos3.ibcdn.com/bus-1761135992.jpg"
              alt="Bus Offer"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium">Bus</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                Up to 15% OFF* on Buses
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src="https://go-assets.ibcdn.com/u/GI/images/1736242015211-Calendar.png"
                  alt="timer"
                  className="w-4 h-4"
                />
                <span className="text-gray-600 text-sm">Valid till 30th Nov’25</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden">
            <img
              src="https://gos3.ibcdn.com/cab-1761136001.jpg"
              alt="Cab Offer"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium">Cabs</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                Up to 10% OFF* on Cabs!
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src="https://go-assets.ibcdn.com/u/GI/images/1736242015211-Calendar.png"
                  alt="timer"
                  className="w-4 h-4"
                />
                <span className="text-gray-600 text-sm">Valid till 30th Nov’25</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden">
            <img
              src="https://gos3.ibcdn.com/trains-1761136039.jpg"
              alt="Train Offer"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium">Trains</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                Up To ₹300 OFF* on Trains
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src="https://go-assets.ibcdn.com/u/GI/images/1736242015211-Calendar.png"
                  alt="timer"
                  className="w-4 h-4"
                />
                <span className="text-gray-600 text-sm">Valid till 30th Nov’25</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-sm border hover:shadow-lg transition-all duration-200 overflow-hidden">
            <img
              src="https://gos3.ibcdn.com/img-1761136846.jpg"
              alt="Mixed Offer"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium">
                Bus, Hotels, Cabs, Flights, Trains
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                Tap to Play & Win!
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src="https://go-assets.ibcdn.com/u/GI/images/1736242037524-clock.png"
                  alt="timer"
                  className="w-4 h-4"
                />
                <span className="text-red-600 text-sm">Limited period offer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OfferModel;
