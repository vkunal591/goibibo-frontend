"use client";

import React, { useState } from "react";
import {
  Star,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  User,
  Gift,
  Lock,
} from "lucide-react";

export default function Page() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqs = [
    { q: "How do I become a goTribe member?", a: "You can become a goTribe1 member by completing your first stay worth ₹1,500 or more." },
    { q: "When will my membership end?", a: "Your membership remains active for 12 months from the date you complete the eligible stay or trip." },
    { q: "How will my total eligible bookings be calculated?", a: "Only completed bookings with a transaction value of ₹1,500 or above within the past year will be counted." },
    { q: "What is goCash?", a: "goCash is Goibibo’s wallet currency that you can earn and use on future bookings." },
    { q: "When does the goCash expire?", a: "goCash typically expires within 12 months of being credited." },
    { q: "Are there any limitations on the goCash earned?", a: "Certain transactions or offers may limit goCash earning. Check offer terms for details." },
    { q: "When will I get Welcome goCash?", a: "Welcome goCash is credited automatically upon successful activation of your goTribe membership." },
    { q: "My query is not listed here.", a: "Please contact Goibibo customer support for more help regarding your membership." },
  ];

  const benefits = [
    ["Booking Eligibility*", "1 Stay", "3 Trips", "5 Trips"],
    ["Welcome goCash", "₹100", "₹100", "₹100"],
    ["Flat Discount (Stays)", "10%", "10%", "15%"],
    ["Room & Meal Upgrade", "cross", "tick", "tick"],
    ["Early Check-in & Late Checkout", "cross", "tick", "tick"],
    ["F&B and Spa Discount", "cross", "20%", "20%"],
    ["Earn goCash (Domestic Stays)", "cross", "-", "2.5%"],
    ["Free Seats (Flights)", "cross", "1", "3"],
    ["Earn goCash (Buses)", "cross", "₹50", "₹50"],
    ["Earn goCash (Outstation Cabs)", "cross", "2%", "2%"],
    ["Earn goCash (Airport/Hourly Cabs)", "cross", "₹50", "₹50"],
    ["Priority Customer Support", "cross", "cross", "cross"],
  ];

  return (
    <main className="min-h-screen bg-[#fdf7f8] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#5F111F] to-[#7a1a2b] text-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold">goTribe Membership</h1>
          <p className="mt-2 text-sm sm:text-base opacity-90">
            Enjoy discounts, perks, and rewards on every booking as a valued member.
          </p>
        </div>

        {/* Tier Progress */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-[#5F111F] mb-4 flex items-center gap-2">
            <Gift size={20} /> Membership Progress
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {[1, 2, 3].map((tier) => (
              <div
                key={tier}
                className="flex-1 text-center border border-gray-200 rounded-xl py-6 px-3 hover:shadow-md transition"
              >
                <h3 className="font-bold text-[#5F111F] text-xl">goTribe{tier}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {tier === 1
                    ? "Complete your 1st Stay* to become a member"
                    : `Unlock ${tier} by completing more trips`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <User className="text-[#5F111F]" size={36} />
            <div>
              <h3 className="text-lg font-semibold text-[#5F111F]">Hi, Traveller</h3>
              <p className="text-sm text-gray-600">Get ready to travel and earn rewards!</p>
            </div>
          </div>
          <button className="bg-[#5F111F] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#781b2a] transition">
            Book a Stay & Get Started
          </button>
        </div>

        {/* Booking Eligibility */}
        <div className="bg-[#fff9fa] border border-[#f0d0d5] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-[#5F111F] mb-2">
            Booking Eligibility
          </h2>
          <p className="text-sm text-gray-700">
            Complete your 1st Stay* of ₹1,500 and above to become a goTribe1 Member.
          </p>
          <p className="mt-2 text-xs text-gray-600 italic">
            *Only bookings completed with transaction value ₹1,500 & above in the last 1 year will be considered.
          </p>
        </div>

        {/* Membership Benefits */}
        <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold text-[#5F111F] mb-4">
            Membership Benefits
          </h2>
          <table className="w-full border-collapse text-sm min-w-[800px]">
            <thead>
              <tr className="bg-[#f9e8ea] text-[#5F111F]">
                <th className="p-3 text-left font-semibold">Benefits</th>
                <th className="p-3 text-center font-semibold">goTribe1</th>
                <th className="p-3 text-center font-semibold">goTribe2</th>
                <th className="p-3 text-center font-semibold">goTribe3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {benefits.map((row, i) => (
                <tr key={i} className="hover:bg-[#fdf2f3] transition">
                  <td className="p-3 font-medium text-gray-800">{row[0]}</td>
                  {[1, 2, 3].map((col) => (
                    <td key={col} className="p-3 text-center align-middle">
                      {row[col] === "cross" ? (
                        <div className="flex justify-center items-center">
                          <XCircle size={18} className="text-gray-400" />
                        </div>
                      ) : row[col] === "tick" ? (
                        <div className="flex justify-center items-center">
                          <CheckCircle size={18} className="text-green-600" />
                        </div>
                      ) : (
                        <span className="inline-block align-middle">{row[col]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-[#5F111F] mb-4 flex items-center gap-2">
            <Lock size={18} /> FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-[#fdf7f8] hover:bg-[#fbeef0] transition"
                >
                  <span className="font-medium text-[#5F111F] text-sm sm:text-base">
                    {faq.q}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp size={18} className="text-[#5F111F]" />
                  ) : (
                    <ChevronDown size={18} className="text-[#5F111F]" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-4 py-3 text-sm text-gray-700 bg-white border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
