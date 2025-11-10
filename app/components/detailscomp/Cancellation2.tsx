import React from 'react'

const Cancellation2 = () => {
  return (
    <div>   <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Cancellation & Date Change Policy
                            </h2>
                            <a
                                href="#"
                                className="text-[#701932] text-sm font-medium hover:underline"
                            >
                                View Policy
                            </a>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-5">
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium text-gray-900 flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V4"
                                        />
                                    </svg>
                                    HDO → BLR
                                </h3>
                                <p className="text-sm text-gray-600">Cancellation Penalty</p>
                            </div>
                            <div className="grid grid-cols-4 text-center gap-3">
                                <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                                    <p className="text-gray-400 text-xs mb-1">Now</p>
                                    <p className="font-semibold text-gray-800">₹ 0</p>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                                    <p className="text-gray-400 text-xs mb-1">14 Nov</p>
                                    <p className="font-semibold text-gray-800">₹ 3,400</p>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm">
                                    <p className="text-gray-400 text-xs mb-1">15 Nov · 12:45</p>
                                    <p className="font-semibold text-gray-800">₹ 7,299</p>
                                </div>
                                <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 shadow-sm">
                                    <p className="text-gray-400 text-xs mb-1">15 Nov · 14:45</p>
                                    <p className="font-semibold text-rose-600">Flight Departure</p>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 pt-4 text-xs text-gray-500">
                                Refunds are calculated based on airline policy and applicable fare rules.
                                For exact details, please review your fare conditions before cancelling.
                            </div>
                        </div>
                    </div>
                    </div>
  )
}

export default Cancellation2