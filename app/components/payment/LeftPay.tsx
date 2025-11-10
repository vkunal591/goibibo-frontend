"use client";
import React, { useState } from "react";

// Payment options data
const paymentOptions = [
  {
    id: "UPI",
    name: "UPI Options",
    description: "Pay directly from your Bank Account",
    icon: "https://imgak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/upi_paymode.png",
  },
  {
    id: "Cards",
    name: "Credit/Debit/ATM Card",
    description: "Visa, MasterCard, Amex, Rupay and more",
    icon: "https://imgak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/card_paymode.png",
  },
  {
    id: "NB",
    name: "Net Banking",
    description: "40+ Banks Available",
    icon: "https://imgak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/netbanking_paymode.png",
  },
  {
    id: "EWLT",
    name: "Gift Cards & e-wallets",
    description: "AmazonPay, Mobikwik & Gift Cards",
    icon: "https://imgak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/wallet_paymode.png",
  },
  {
    id: "PHONEPE",
    name: "PhonePe",
    description: "Pay with PhonePe",
    icon: "https://imgak.mmtcdn.com/payment-ui-service/images/payment/phonepay.png",
  },
  {
    id: "GPAY",
    name: "GooglePay",
    description: "Pay with GooglePay",
    icon: "https://imgak.mmtcdn.com/payment-ui-service/images/payment/gpay.png",
  },
];

const LeftPay = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const amount = 714;



  const closeModal = () => {
    setModalOpen(false);
    setSelectedOption(null);
  };

  return (
    <div className="flex flex-col space-y-8 w-full">
      {/* Payment Heading */}
      <h2 className="mb-8 text-2xl leading-[44px] font-semibold" data-cy="paymentBookingHeading">
        Pay{" "}
        <span className="text-orange-500" data-reactroot="">
          <span className="mx-1" data-cy="paymentBookingAmount">₹ {amount}</span>
        </span>{" "}
        to lock fare
      </h2>

      {/* Booking Summary */}
      <div className="mb-8" data-cy="bookingSummaryComponent">
        <div className="mb-5 pl-5">
          <div className="flex">
            {/* Airline Logo */}
            <div className="w-12 h-12 flex-shrink-0">
              <img
                className="w-full h-full object-contain"
                src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png"
                alt="Airline Logo"
                data-cy="lobSummLogo"
              />
            </div>

            {/* Flight Details */}
            <div className="ml-4 border-l border-gray-300 pl-4 flex-1">
              <div className="flex justify-between">
                <p
                  className="text-base font-medium flex items-center"
                  data-cy="lobSummSourceDestCity"
                >
                  New Delhi (DEL)
                  <span className="mx-3 text-orange-500" data-cy="lobSummOneWayIcon">→</span>
                  Mumbai (BOM)
                </p>
              </div>

              <div className="flex items-center mt-2 space-x-2">
                <span className="sprite clockIcon mr-2" data-cy="bookingDateTimeIcon"></span>
                <div className="flex items-center space-x-2" data-cy="bookingDateTime">
                  <span>11 Nov 2025 11:30 PM</span>
                  <span className="mx-3 text-orange-500">→</span>
                  <span>12 Nov 2025 02:05 AM</span>
                </div>
                <span className="font-bold" data-cy="totalStops">(Direct)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Tile */}
      <ul className="mb-8">
        <li className="flex items-start space-x-4 p-4 border rounded-lg bg-white shadow-sm offerTile">
          <div>
            <img
              className="w-8 h-8"
              src="https://gos3.ibcdn.com/payments-farelock-1679391088.png"
              alt="Fare Locked Icon"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold mb-1 leading-5">Fare Locked</p>
            <p className="text-xs text-gray-500 leading-4">
              Pay remaining amount Rs.12459 by 11 November 25, 1:18 AM to confirm booking
            </p>
          </div>
        </li>
      </ul>

      {/* Payment Options */}
      <div className="text-black mt-8" data-cy="paymodeComponent">
        <p className="px-4 py-5 text-sm font-bold border-b" data-cy="paymodeHeaderText">
          ALL PAYMENT OPTIONS
        </p>
        <ul className="flex flex-col divide-y">
          {paymentOptions.map((option) => (
            <li
              key={option.id}
              className="flex items-center px-4 py-4 hover:bg-gray-50 cursor-pointer paymentCard"
              data-cy={`paymodeItem-${option.id}`}
            >
              <img
                src={option.icon}
                alt={`${option.name} icon`}
                className="w-8 h-8 flex-shrink-0"
                data-cy={`paymodeIcon-${option.id}`}
              />
              <div className="flex-1 flex justify-between items-center ml-5">
                <div className="flex flex-col">
                  <span
                    className="text-base font-semibold mb-1"
                    data-cy={`paymodeText-${option.id}`}
                  >
                    {option.name}
                  </span>
                  <span
                    className="text-xs text-gray-600"
                    data-cy={`paymodeDesc-${option.id}`}
                  >
                    {option.description}
                  </span>
                </div>
                <span className="text-gray-400">&#8250;</span> {/* Right arrow */}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {modalOpen && selectedOption && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <h3 className="text-lg font-bold mb-4">ghjghhghjh</h3>
            <p className="text-gray-700 mb-4">ghghghfhfgh</p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
              onClick={closeModal}
            >
              ✕
            </button>
            <button
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
              onClick={closeModal}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPay;
