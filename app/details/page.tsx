"use client";
import React from "react";
import DetailRight from "../components/DetailRight";
import DetailLeft from "../components/DetailLeft";
const Page = () => {
  return (
    <section className="min-h-screen bg-[#f8f9fb] py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_60%] gap-8">
        <div className="hidden lg:block sticky top-10 self-start">
          <DetailLeft />
        </div>
        <div>
          <DetailRight />
        </div>
      </div>
    </section>
  );
};
export default Page;