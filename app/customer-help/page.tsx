"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Link as LinkIcon, Briefcase, X } from "lucide-react";
import Layout from "../components/layout/Layout";

export default function Page() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const quickLinks = [
    { title: "Account Details", desc: "Update your personal & account details here", href: "/profile" },
    { title: "Wallet Balance", desc: "Check your goCash balance & recent transactions here", href: "/wallet-balance" },
    { title: "goTribe", desc: "Reward cash & refund amounts", href: "/loyalty" },
    { title: "My Coupons", desc: "Your goPasses, coupons & vouchers here", href: "/coupons" }
  ];

  const modalContent: Record<string, string> = {
    Cancellation:
      "You can cancel your booking easily by visiting the 'My Trips' section. Cancellations may be subject to airline or hotel policies.",
    Modification:
      "Need to make changes? Modify your booking details including dates and passenger info directly from the 'My Trips' page.",
    "Refund Breakup":
      "Refunds are processed within 5–7 working days. You can track your refund status under 'My Trips' → 'Refund Status'."
  };

  return (
    <Layout protected={true}> 
    <main className="min-h-screen bg-[#faf7f8] py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#5F111F] text-white rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Customer Support</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-100 leading-relaxed max-w-3xl">
            Goibibo is here to support you! We have some quick links below which can provide you the fastest resolution to your query.
          </p>
        </div>

        <div className="bg-white mt-6 rounded-3xl shadow-md overflow-hidden border border-gray-100">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100 bg-[#fff9fa]">
            <Briefcase className="text-[#5F111F]" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">My Trips</h2>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-3 mb-3">
              {["Cancellation", "Modification", "Refund Breakup"].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setOpenModal(item)}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-[#5F111F]/20 text-[#5F111F] bg-white hover:bg-[#5F111F]/10 transition"
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600">Looks like you have not made any booking with us yet.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl mt-8 shadow-md border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100 bg-[#fff9fa]">
            <LinkIcon size={18} className="text-[#5F111F]" />
            <h3 className="text-base font-semibold text-gray-900">Quick Links</h3>
          </div>
          <ul className="divide-y divide-gray-100">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-6 py-5 hover:bg-[#fdf1f3] transition group"
                >
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-[#5F111F] transition">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-[#5F111F] opacity-80 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-[#5F111F] text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-md hover:shadow-lg hover:bg-[#74152a] transition">
            Contact Support
          </button>
        </div>
      </div>

      {openModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg max-w-md w-[90%] p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold text-[#5F111F] mb-3">{openModal}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{modalContent[openModal]}</p>
          </div>
        </div>
      )}
    </main>
    </Layout>
  );
}
