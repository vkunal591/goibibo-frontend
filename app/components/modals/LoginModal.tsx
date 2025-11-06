"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
console.log(isOpen)
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal container */}
      <div
        className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={22} />
        </button>

        {/* Header */}
        <h3 className="text-2xl font-semibold mb-6 text-center">Login / Signup</h3>

        {/* Form */}
        <form className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter your Mobile Number
          </label>

          <div className="flex items-center border rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <div className="flex items-center bg-gray-50 px-3 py-2 border-r text-gray-600 gap-2">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India flag"
                className="w-5 h-4"
              />
              <span>+91</span>
            </div>
            <input
              type="tel"
              name="phone"
              value={phone}
              maxLength={10}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="flex-1 p-2 outline-none text-gray-700"
              placeholder="Enter 10-digit number"
            />
          </div>

          <button
            type="submit"
            disabled={phone.length !== 10}
            className={`w-full py-2 mt-3 rounded-md text-white font-medium transition ${
              phone.length === 10
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By proceeding, you agree to Goibibo’s{" "}
          <a
            href="https://www.goibibo.com/info/privacy/"
            target="_blank"
            className="text-blue-600 underline"
          >
            Privacy Policy
          </a>
          ,{" "}
          <a
            href="https://www.goibibo.com/info/user-agreement/"
            target="_blank"
            className="text-blue-600 underline"
          >
            User Agreement
          </a>{" "}
          and{" "}
          <a
            href="https://www.goibibo.com/info/terms-of-services/"
            target="_blank"
            className="text-blue-600 underline"
          >
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
