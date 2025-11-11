"use client";
import React, { useState, useEffect } from "react";
const RightPay = () => {
  const [timeLeft, setTimeLeft] = useState(22 * 60 + 24);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
 
  return (
    <div className="flex flex-col space-y-8 w-full max-w-md mx-auto">
      <div className="flex items-center space-x-2 text-orange-500 font-semibold text-sm">
        <span className="sprite timeIcon--orange"></span>
        <span>
          Time Left: <span className="font-bold">rgdfgdg</span>
        </span>
      </div>
      <div className="border border-gray-300 rounded-lg text-black">
        <p className="flex justify-between items-center border-b border-gray-300 px-5 py-4 text-lg font-bold">
          Total payable now
          <span className="text-green-500">₹ 714</span>
        </p>
        <ul className="px-5 py-4 space-y-4 text-base">
          <li className="flex justify-between">
            <p>Fare Lock Amount</p>
            <p>₹ 714</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-extrabold">Scan to Pay</div>
          <div className="text-sm text-gray-500">Instant Refund & High Success Rate</div>
        </div>
        <div className="flex space-x-3">
          <img src="https://imgak.mmtcdn.com/payment-ui-service/images/payment/cb/upi_qr/bhim.png" alt="BHIM" className="w-6 h-6"/>
          <img src="https://imgak.mmtcdn.com/payment-ui-service/images/payment/cb/upi_qr/gpay.png" alt="GPay" className="w-11 h-6"/>
          <img src="https://imgak.mmtcdn.com/payment-ui-service/images/payment/cb/upi_qr/paytm.png" alt="Paytm" className="w-12 h-6"/>
          <img src="https://imgak.mmtcdn.com/payment-ui-service/images/payment/cb/upi_qr/phonepe.png" alt="PhonePe" className="w-6 h-6"/>
        </div>
        <div
          className="relative w-full h-64 bg-no-repeat bg-center bg-cover rounded-lg"
          style={{ backgroundImage: "url('https://imgak.mmtcdn.com/payment-ui-service/images/payment/cb/upi_qr/qr_code.png')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg font-bold text-xs cursor-pointer">
            VIEW QR
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightPay;
