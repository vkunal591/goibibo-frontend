"use client";
import React, { useState, useRef, useEffect } from "react";
interface PassengerSelectorProps {
  showModal: boolean;
  setShowModal: (v: boolean) => void;
}
const PassengerSelector = ({ showModal, setShowModal }: PassengerSelectorProps) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState("Economy");
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showModal && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showModal, setShowModal]);
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
          className="absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 p-5 min-h-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Passengers</h3>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-400 hover:text-gray-600 transition">
              ✕
            </button>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <div>
              <strong className="block text-gray-800">Adults</strong>
              <span className="text-sm text-gray-500">12+ years</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decrement(setAdults);
                }}
                disabled={adults <= 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold transition ${
                  adults <= 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33]"
                }`}>
                –
              </button>
              <span className="text-lg font-semibold text-gray-800 w-4 text-center select-none">
                {adults}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increment(setAdults);
                }}
                disabled={adults >= 9}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold transition ${
                  adults >= 9
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33]"
                }`}>
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <div>
              <strong className="block text-gray-800">Children</strong>
              <span className="text-sm text-gray-500">2–11 years</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decrement(setChildren);
                }}
                disabled={children <= 0}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold transition ${
                  children <= 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33]"
                }`} >
                –
              </button>
              <span className="text-lg font-semibold text-gray-800 w-4 text-center select-none">
                {children}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increment(setChildren);
                }}
                disabled={children >= 9}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold transition ${
                  children >= 9
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33]"
                }`}>
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <div>
              <strong className="block text-gray-800">Infants</strong>
              <span className="text-sm text-gray-500">Under 2 years</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decrement(setInfants);
                }}
                disabled={infants <= 0}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold transition ${
                  infants <= 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33]"
                }`}>
                –
              </button>
              <span className="text-lg font-semibold text-gray-800 w-4 text-center select-none">
                {infants}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  increment(setInfants);
                }}
                disabled={infants >= 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold transition ${
                  infants >= 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:from-[#4A0C15] hover:to-[#681A33]"
                }`}>
                +
              </button>
            </div>
          </div>
          <div className="mt-5">
  <h4 className="text-gray-800 font-semibold mb-2">Class</h4>
  <div className="space-y-3">
    {["Economy", "Premium (Business/First)"].map((option) => (
      <label
        key={option}
        className="flex items-center gap-3 cursor-pointer select-none"
      >
        <input
          type="radio"
          name="cabin"
          value={option}
          checked={cabin === option}
          onChange={(e) => setCabin(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="appearance-none w-5 h-5 rounded-full border border-gray-400 cursor-pointer
                     checked:border-transparent checked:bg-gradient-to-r 
                     checked:from-[#5A0F1A] checked:to-[#7B1E3D]
                     hover:ring-2 hover:ring-[#7B1E3D] transition-all duration-200"
        />
        <span
          className={`text-gray-700 ${
            cabin === option ? "font-semibold text-[#5A0F1A]" : ""
          }`}
        >
          {option}
        </span>
      </label>
    ))}
  </div>
</div>

          <div className="mt-6">
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] 
  hover:from-[#4A0C15] hover:to-[#681A33] text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
              Confirm
            </button>
       
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
