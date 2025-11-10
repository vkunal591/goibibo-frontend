import React from 'react'

const SpecialCombos3 = () => {
  return (
    <div>  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Special Combos Tailor Made For You
                            </h2>
                            <p className="text-sm text-gray-500">
                                Just a click for a better trip. Upgrade now!
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-[#701932]/30 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 p-5">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-900">Your Selection</h3>
                                    <span className="font-bold text-gray-800 text-base">₹ 7,299</span>
                                </div>
                                <p className="text-sm text-gray-600">Seats</p>
                            </div>
                            <div className="relative border border-green-400 rounded-xl bg-green-50 p-5 hover:shadow-md transition-all duration-200">
                                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-xl font-medium shadow-sm">
                                    Best Value
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-900">Best Value</h3>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-xs line-through">₹ 8,261</p>
                                        <p className="text-base font-bold text-gray-900">₹ 7,961</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">2 Benefits Included</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-600">✔</span> Seats
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-600">✔</span> 100% Refund on cancellation (until 72h before departure)
                                    </li>
                                </ul>
                                <p className="text-xs text-green-700 mt-3 font-medium tracking-wide">
                                    THOKOTAALI COUPON APPLIED
                                </p>
                            </div>
                            <div className="relative border border-[#701932]/40 rounded-xl bg-[#FFF9FB] p-5 hover:shadow-md transition-all duration-200">
                                <div className="absolute top-0 right-0 bg-[#701932] text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-xl font-medium shadow-sm">
                                    Premium
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-900">Premium</h3>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-xs line-through">₹ 8,390</p>
                                        <p className="text-base font-bold text-gray-900">₹ 8,090</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-2">2 Benefits Included</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#701932]">★</span> Seats
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#701932]">★</span> 100% Refund on cancellation (until 24h before departure)
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="text-[#701932] text-xs font-medium underline mt-2 inline-block"
                                >
                                    Learn More
                                </a>
                                <p className="text-xs text-green-700 mt-3 font-medium tracking-wide">
                                    THOKOTAALI COUPON APPLIED
                                </p>
                            </div>
                        </div>
                    </div></div>
  )
}

export default SpecialCombos3