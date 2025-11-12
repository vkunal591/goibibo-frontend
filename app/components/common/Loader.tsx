"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Loader = ({ show = true }: { show?: boolean }) => {
  const [progress, setProgress] = useState(0);

  // Simulated progress — can be replaced with real progress logic
  useEffect(() => {
    if (!show) return;
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 10;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setProgress(current);
    }, 150);
    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-white overflow-hidden transition-all duration-700">
      {/* Logo */}
      {/* <div className="z-10 mb-8 flex items-center justify-center animate-fadeIn">
        <Image
          src="/assets/logo.png" // ✅ replace with your logo
          alt="App Logo"
          width={120}
          height={120}
          className="drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-glow"
          priority
        />
      </div> */}

      {/* Spinner */}
      <div className="relative w-16 h-16 border-4 border-t-transparent border-blue-400 rounded-full animate-spin shadow-[0_0_15px_rgba(59,130,246,0.7)]">
        <div className="absolute inset-0 blur-md border-4 border-t-transparent border-blue-500 rounded-full opacity-60"></div>
      </div>

      {/* Progress Bar */}
      <div className="mt-10 w-64 h-2 bg-white/20 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-sm tracking-wider text-gray-800 animate-fadeIn">
        Preparing your experience... {Math.round(progress)}%
      </p>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(99, 102, 241, 0.9));
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-glow {
          animation: glow 2s infinite ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;
