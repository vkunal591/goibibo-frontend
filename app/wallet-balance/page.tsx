"use client";
import React, { useState } from "react";
import { Gift, HelpCircle, Coins, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "../components/layout/Layout";

export default function Page() {
  const [openFAQ, setOpenFAQ] = useState<any>(null);

  const faqs = [
    {
      q: "What is goCash?",
      a: "goCash is Goibibo’s virtual currency that you can use to get discounts on your future bookings.",
    },
    {
      q: "How do I earn goCash?",
      a: "You can earn goCash through bookings, referrals, promotions, and refunds processed as goCash.",
    },
    {
      q: "How can I use my goCash?",
      a: "You can use your goCash to pay for flights, hotels, and bus bookings on Goibibo, as per eligibility.",
    },
    {
      q: "How can I take my refund back to my original source?",
      a: "If your booking is canceled, refunds can either go to your original payment source or as goCash, based on your selection during cancellation.",
    },
    {
      q: "When does the goCash expire?",
      a: "Each goCash credit has its own validity, which is mentioned in your transaction details.",
    },
    {
      q: "Can my goCash be gifted?",
      a: "Currently, goCash cannot be transferred or gifted to other accounts.",
    },
    {
      q: "Is there a limit on how much goCash I can earn?",
      a: "There is no fixed limit, but promotional and referral offers may have caps as per the terms.",
    },
  ];

  return (
    <Layout protected={true}>
      <main className="min-h-screen bg-[#faf7f8] py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#5F111F] text-white rounded-3xl shadow-lg p-8">
            <h1 className="text-3xl font-bold tracking-tight">GoCash Coins</h1>
            <p className="mt-2 text-sm sm:text-base text-gray-100 opacity-90">
              Track your balance, transactions and learn how to earn more
              goCash!
            </p>
          </div>
          <div className="bg-white mt-6 rounded-3xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Coins className="text-[#5F111F]" size={22} /> goCash Balance
                </h2>
                <p className="text-3xl font-bold text-[#5F111F] mt-2">₹100</p>
              </div>
            </div>
          </div>
          <div className="bg-white mt-6 rounded-3xl shadow-md border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-[#fff9fa]">
              <h3 className="text-base font-semibold text-gray-900">
                Recent Transactions
              </h3>
              <div className="flex gap-2">
                {["All", "Received", "Spent"].map((tab, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-1.5 text-sm rounded-full font-medium border transition ${
                      tab === "All"
                        ? "bg-[#5F111F] text-white border-transparent"
                        : "border-gray-200 text-gray-700 hover:bg-[#5F111F]/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#fdf1f3] transition">
              <div className="flex items-start gap-3">
                <div className="bg-[#5F111F]/10 p-2 rounded-full">
                  <Coins className="text-[#5F111F]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    goCash earned{" "}
                    <span className="text-[#5F111F] font-bold ml-1">+₹100</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Welcome bonus for signing up on Goibibo
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Expires: 03 Dec'25
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 whitespace-nowrap">
                03 Nov'25
              </p>
            </div>
          </div>
          <div className="bg-white mt-8 rounded-3xl shadow-md border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#5F111F]/10 p-2 rounded-full">
                <Gift className="text-[#5F111F]" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">
                  How to earn goCash?
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-lg">
                  Earn goCash each time you book, invite friends and help others
                  in Goibibo
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#5F111F] to-[#7d162d] mt-6 rounded-3xl shadow-lg text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Gift size={22} /> Invite Friends
              </h3>
              <p className="text-sm text-gray-100 mt-1 max-w-md">
                Share your referral link and invite your friends to join
                Goibibo. Earn <span className="font-bold">₹250 goCash</span> on
                every referral.
              </p>
            </div>
            <button className="mt-4 sm:mt-0 bg-white text-[#5F111F] px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition">
              Invite Now
            </button>
          </div>
          <div className="bg-white mt-8 rounded-3xl shadow-md border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
              <HelpCircle className="text-[#5F111F]" size={20} /> FAQs
            </h3>
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-[#fdf1f3] transition"
                  >
                    <span className="font-medium text-gray-800 text-sm sm:text-base">
                      {item.q}
                    </span>
                    {openFAQ === i ? (
                      <ChevronUp className="text-[#5F111F]" size={18} />
                    ) : (
                      <ChevronDown className="text-[#5F111F]" size={18} />
                    )}
                  </button>
                  {openFAQ === i && (
                    <div className="px-4 pb-4 text-sm text-gray-600 animate-fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
