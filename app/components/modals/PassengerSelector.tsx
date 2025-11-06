"use client";
import React, { useState, useRef, useEffect } from "react";


interface PassengerSelectorProps {
  showModal: boolean;
  setShowModal: (v: boolean) => void
}

const PassengerSelector = ({ showModal, setShowModal }: PassengerSelectorProps) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState("Economy");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) =>
    setter((prev) => Math.min(prev + 1, 9));

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>) =>
    setter((prev) => Math.max(prev - 1, 0));

  const totalPassengers = adults + children + infants;

  return (
    <div className="relative w-full max-w-sm">

      {showModal && (
        <div
          ref={modalRef}
          className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 p-5 min-h-[400px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Passengers</h3>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              ✕
            </button>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <div>
              <strong className="block text-gray-800">Adults</strong>
              <span className="text-sm text-gray-500">12+ years</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => decrement(setAdults)}
                className="w-8 h-8 rounded-full bg-gray-100 text-lg font-semibold text-gray-700 hover:bg-gray-200"
              >
                –
              </button>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="border rounded-lg px-2 py-1 text-center focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => increment(setAdults)}
                className="w-8 h-8 rounded-full bg-gray-100 text-lg font-semibold text-gray-700 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <div>
              <strong className="block text-gray-800">Children</strong>
              <span className="text-sm text-gray-500">2–11 years</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => decrement(setChildren)}
                className="w-8 h-8 rounded-full bg-gray-100 text-lg font-semibold text-gray-700 hover:bg-gray-200"
              >
                –
              </button>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="border rounded-lg px-2 py-1 text-center focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                {Array.from({ length: 9 }, (_, i) => i).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => increment(setChildren)}
                className="w-8 h-8 rounded-full bg-gray-100 text-lg font-semibold text-gray-700 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <div>
              <strong className="block text-gray-800">Infants</strong>
              <span className="text-sm text-gray-500">Under 2 years</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => decrement(setInfants)}
                className="w-8 h-8 rounded-full bg-gray-100 text-lg font-semibold text-gray-700 hover:bg-gray-200"
              >
                –
              </button>
              <select
                value={infants}
                onChange={(e) => setInfants(Number(e.target.value))}
                className="border rounded-lg px-2 py-1 text-center focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                {[0, 1].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => increment(setInfants)}
                className="w-8 h-8 rounded-full bg-gray-100 text-lg font-semibold text-gray-700 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="text-gray-800 font-semibold mb-2">Class</h4>
            <div className="space-y-2">
              {["Economy", "Premium (Business/First)"].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="cabin"
                    value={option}
                    checked={cabin === option}
                    onChange={(e) => setCabin(e.target.value)}
                    className="text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PassengerSelector;
