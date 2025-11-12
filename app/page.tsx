import React from "react";
import FlightBookingForm from "./components/FlightBookingForm";
import Holidays from "./components/modals/Holidays";
import Hotels from "./components/modals/Hotels";
import Layout from "./components/layout/Layout";
const page = () => {
  return (
    <Layout heroSection={true} >
      <div>
        <main className="relative">
          <div className="-mt-20 md:-mt-28 relative z-30">
            <FlightBookingForm />
          </div>
          <Holidays />
          <Hotels />
        </main>
      </div>
    </Layout>
  );
};

export default page;
