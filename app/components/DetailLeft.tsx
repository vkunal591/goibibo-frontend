import React from 'react'

const DetailLeft = () => {
  return (
    <div> 
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fare Summary</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between"><span>Base Fare</span><span>₹ 6,364</span></div>
              <div className="flex justify-between"><span>Taxes and Surcharges</span><span>₹ 935</span></div>
              <div className="flex justify-between"><span>Other Services</span><span>₹ 1,091</span></div>
              <div className="flex justify-between text-green-600 font-medium"><span>Discounts (THOKOTAALI)</span><span>- ₹ 300</span></div>
              <hr />
              <div className="flex justify-between font-semibold text-gray-900 text-base"><span>Total Amount</span><span>₹ 8,090</span></div>
            </div>
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
              Prices for this itinerary have been decreased by ₹ 994 by the airline. Grab this fare right now!
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Please review baggage allowance, cancellation policies & other ticket inclusions
            </p>
          </div>
          <div className="border-t border-gray-200 pt-5">
            <h3 className="font-semibold text-gray-900 mb-3">goCash</h3>
            <div className="flex justify-between items-center bg-[#F1F5F9] p-3 rounded-lg text-sm">
              <span>Apply ₹ 100</span>
              <button className="px-4 py-1 bg-[#701932] text-white rounded-md text-xs font-medium hover:bg-[#8b2346]">Apply</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Total goCash Balance: ₹ 100</p>
            <p className="text-sm text-green-700 mt-1">₹ 100 GoCash+ applicable on this booking</p>
            <div className="mt-3">
              <h4 className="font-medium text-gray-800 mb-1">Earn goCash</h4>
              <p className="text-sm text-gray-600">Get ₹100 goCash post this booking!</p>
            </div>
            <div className="mt-4 flex items-start gap-2 text-sm text-gray-700 bg-[#F9FAFB] p-3 rounded-lg">
              <input type="checkbox" className="mt-1 accent-[#701932]" />
              <p>Tap to contribute ₹10 towards plantation of 2 million trees. <a href="#" className="text-[#701932] underline">Know More</a></p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">OFFERS & DISCOUNTS</h3>
            <div className="flex gap-2 mb-3">
              <input type="text" placeholder="Enter coupon code" className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#701932]" />
              <button className="px-4 py-2 bg-[#701932] text-white text-sm rounded-md hover:bg-[#8b2346]">Apply</button>
            </div>
            <div className="flex gap-2 text-xs font-medium text-gray-600 mb-3">
              <button className="px-3 py-1 rounded-md bg-[#701932] text-white">All</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">Bank</button>
              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">Add-ons</button>
            </div>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {[
                { code: "THOKOTAALI", desc: "₹ 300 off — Promo Discount applied successfully.", active: true },
                { code: "TRAVELSAFEDOM", desc: "₹ 200 off — Add Travel Insurance to your flight booking." },
                { code: "GIRUSH", desc: "₹ 100 off — Instant discount on flight booking." },
                { code: "GOHSBCEMI", desc: "₹ 875 off — Interest-free EMI with HSBC Credit Cards." },
                { code: "GOCBISEL", desc: "₹ 876 off — Rupay Select Debit Card." },
              ].map((offer) => (
                <div key={offer.code} className={`p-3 border rounded-lg ${offer.active ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"}`}>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-gray-800 text-sm">{offer.code}</h4>
                    {offer.active ? (
                      <button className="text-red-600 text-xs font-medium hover:underline">Remove</button>
                    ) : (
                      <button className="text-[#701932] text-xs font-medium hover:underline">Apply</button>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{offer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div></div>
  )
}

export default DetailLeft