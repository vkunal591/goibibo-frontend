import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#701932] mb-6">
          About Goibibo
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
          Goibibo is India’s leading online travel booking brand providing a wide
          range of choices for hotels, flights, trains, buses, and cars for
          travelers. Our core value differentiator is the most trusted user
          experience — be it in terms of the quickest search and booking,
          fastest payments, or smooth settlement and refund processes.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
          Through <span className="font-semibold text-[#701932]">GoStays</span>,
          our customers enjoy a standardized stay experience at certified hotel
          properties. With industry-first virtual travel booking currency{" "}
          <span className="font-semibold text-[#701932]">GoCash</span> and the
          social travel network{" "}
          <span className="font-semibold text-[#701932]">GoCash+ Rewards</span>,
          Goibibo continues to redefine how India travels.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
          We are proud to be the number one choice for{" "}
          <span className="italic">New India on the move</span> — committed to
          innovation, transparency, and an unparalleled customer experience.
        </p>

        <a
          href="#"
          className="inline-block px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] rounded-full hover:opacity-90 transition"
        >
          Click here to know management
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
