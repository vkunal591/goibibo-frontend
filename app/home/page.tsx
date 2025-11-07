"use client";
import React, { useState } from "react";
import FlightBookingForm from "../components/FlightBookingForm";
import Holidays from "../components/modals/Holidays";
import Hotels from "../components/modals/Hotels";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/store/hooks";

const Page = () => {
  const { isAuthenticated } = useAuth();
  const { user } = useAppSelector((s) => s.auth);

  if (!isAuthenticated) return null;
  return (
    <main className="relative">
      <div className="-mt-20 md:-mt-28 relative z-30">
        <FlightBookingForm />
      </div>
      <Holidays />
      <Hotels />
    </main>
  );
};

export default Page;
