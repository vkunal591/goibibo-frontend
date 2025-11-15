"use client";
import React from "react";
export default function TripsPage() {
  const tabs = [
    "Upcoming Bookings",
    "Cancelled Bookings",
    "Completed Bookings",
    "Failed Bookings",
  ];
  return (
    <div className="w-full min-h-screen bg-[#5F111F]/5 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-[#5F111F]">Your Trips</h1>
      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="bg-white shadow-md p-4 text-sm rounded-2xl hover:shadow-xl transition border border-[#5F111F]/20 text-[#5F111F] font-medium hover:bg-[#5F111F] hover:text-white">
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full max-w-md bg-white shadow-lg rounded-3xl p-10 border border-[#5F111F]/20 text-center">
        <h2 className="text-xl font-semibold mb-4 text-[#5F111F]">
          Looks like you have never booked with Goibibo
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          When you book your trips will be shown here.
        </p>
        <button className="rounded-2xl px-8 py-3 text-sm text-white bg-[#5F111F] hover:bg-[#4a0d18] transition">
          Start Booking Now
        </button>
      </div>
    </div>
  );
}