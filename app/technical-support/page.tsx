"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SupportPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<string>("");
  const [message, setMessage] = useState("");

  const issues = [
    "Payment Failed",
    "Refund Not Received",
    "Booking Not Showing",
    "Wrong Passenger Details",
    "Need Invoice / GST",
    "App / Website Issue",
    "Price Incorrect",
    "Other Issue",
  ];

  const handleSubmit = () => {
    console.log("Selected Issue:", selectedIssue);
    console.log("Message:", message);
  };

  return (
    <main className="min-h-screen bg-[#fdf7f8] py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-2xl space-y-8">
        <div className="bg-gradient-to-r from-[#5F111F] to-[#7a1a2b] text-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold">Technical Support</h1>
          <p className="mt-2 text-sm opacity-90">Let us know what issue you're facing.</p>
        </div>

        {/* Input Dropdown */}
        <div className="bg-white rounded-2xl shadow p-6">
          <label className="text-[#5F111F] font-semibold text-sm">Select Issue</label>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full mt-2 px-4 py-3 border border-[#5F111F]/30 rounded-xl flex justify-between items-center text-sm hover:bg-[#fdf2f3] transition"
          >
            {selectedIssue || "Choose an issue"}
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {isOpen && (
            <div className="mt-2 border border-[#5F111F]/20 rounded-xl overflow-hidden bg-white shadow animate-fadeIn">
              {issues.map((issue, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#fdf2f3] cursor-pointer border-b last:border-b-0"
                >
                  <input
                    type="radio"
                    name="supportIssue"
                    value={issue}
                    onChange={() => {
                      setSelectedIssue(issue);
                      setIsOpen(false);
                    }}
                  />
                  {issue}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Textarea */}
        {selectedIssue && (
          <div className="bg-white rounded-2xl shadow p-6 space-y-3 animate-fadeIn">
            <label className="text-[#5F111F] font-semibold text-sm">Describe Your Issue</label>
            <textarea
              className="w-full h-40 border border-[#5F111F]/30 rounded-xl p-4 text-sm focus:outline-[#5F111F]"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#5F111F] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#781b2a] transition"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
