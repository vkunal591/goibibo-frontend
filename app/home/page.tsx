"use client";
import React, { useState } from "react";
import FlightBookingForm from "../components/FlightBookingForm";

const Page = () => {
  return (
     <main className="relative">
      <div className="-mt-20 md:-mt-28 relative z-30">
        <FlightBookingForm />
      </div>
    </main>
  );
};

export default Page;
