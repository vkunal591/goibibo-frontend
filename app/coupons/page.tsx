"use client";
import React, { useState } from "react";
import { Gift, Tag, ChevronRight } from "lucide-react";
export default function Page() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Bank Offers", "Flights", "Hotels", "Cabs", "Bus", "Trains"];
  const offers = [
    {
      category: "Bank Offers",
      title: "10% Instant Discount with HDFC Bank Cards",
      desc: "Valid on domestic flight bookings above ₹5,000. Max discount ₹1,200.",
      img: "https://gos3.ibcdn.com/hdfc-flight-1699877658.jpg",
    },
    {
      category: "Flights",
      title: "Save up to ₹2,000 on Flights",
      desc: "Grab amazing flight deals this weekend only on Goibibo!",
      img: "https://gos3.ibcdn.com/flight-deal-1699877658.jpg",
    },
    {
      category: "Hotels",
      title: "Flat 25% Off on Stays",
      desc: "Book your next hotel stay with exclusive Goibibo discounts.",
      img: "https://gos3.ibcdn.com/hotel-deal-1699877658.jpg",
    },
    {
      category: "Cabs",
      title: "₹150 Off on Outstation Cab Bookings",
      desc: "Travel smarter and save more with Goibibo cabs.",
      img: "https://gos3.ibcdn.com/cab-offer-1699877658.jpg",
    },
  ];
  const filteredOffers =
    activeTab === "All"
      ? offers
      : offers.filter((offer) => offer.category === activeTab);
  return (
    <main className="min-h-screen bg-[#fdf7f8] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-[#5F111F] to-[#7a1a2b] text-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Gift size={28} /> Offers & Promotions
          </h1>
          <p className="mt-2 text-sm sm:text-base opacity-90">
            Get the best deals on flights, hotels, cabs, and more. Check your exclusive offers below!
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-4 flex flex-wrap gap-2 justify-center sm:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm rounded-full border transition font-medium ${
                activeTab === tab
                  ? "bg-[#5F111F] text-white border-[#5F111F]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#fdf2f3]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <section>
          <h2 className="text-xl font-semibold text-[#5F111F] mb-4 flex items-center gap-2">
            <Tag size={20} /> Featured Offers for You
          </h2>
          {filteredOffers.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffers.map((offer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="w-full h-36 object-cover"/>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-[#5F111F] text-base">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-gray-600">{offer.desc}</p>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-gray-500 font-medium uppercase">
                        {offer.category}
                      </span>
                      <ChevronRight size={16} className="text-[#5F111F]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-8">
              No offers available under this category right now.
            </p>
          )}
        </section>
        <div className="bg-white rounded-2xl shadow p-6 mt-8 text-center">
          <h3 className="text-lg font-semibold text-[#5F111F] mb-2">
            Bank Offers for Amitibibo
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Enjoy exclusive discounts and cashback offers from top banks.
          </p>
          <button className="bg-[#5F111F] text-white px-5 py-2 rounded-full font-medium hover:bg-[#781b2a] transition">
            View All Offers
          </button>
        </div>
      </div>
    </main>
  );
}
