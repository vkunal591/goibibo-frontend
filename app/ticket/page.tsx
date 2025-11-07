import React from "react";
import TicketFilter from "../components/TicketFilter";
import TicketData from "../components/TicketData";
import FlightSearchHeader from "../components/common/TicketHead";
import Multiway from "../components/Multiway";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FlightSearchHeader />
      <div className="flex justify-center px-4 py-6">
        <div className="flex w-full max-w-7xl gap-6">
          <div className="w-72 flex-shrink-0">
            <TicketFilter />
          </div>
          <div className="flex-1 min-w-0">
            {/* <TicketData /> */}
            <Multiway />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
