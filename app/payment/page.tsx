"use client";
import React from "react";
import LeftPay from "../components/payment/LeftPay";
import RightPay from "../components/payment/RightPay";

export default function Page() {
  return (
    <section className="min-h-screen bg-[#f8f9fb] py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] gap-8">
        {/* LEFT SECTION */}
        <div className="w-full">
          <LeftPay />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full">
          <RightPay />
        </div>
      </div>
    </section>
  );
}
