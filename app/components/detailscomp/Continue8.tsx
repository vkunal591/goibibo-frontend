import React from 'react'

const Continue8 = () => {
  return (
    <div> <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <div className="bg-[#701932]/10 border border-[#701932]/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="space-y-1 text-center sm:text-left">
                                <h2 className="text-lg font-semibold text-gray-900">Still unsure about this trip?</h2>
                                <p className="text-sm text-gray-700 mt-1">
                                    Lock this price starting from{" "}
                                    <span className="line-through text-gray-500">₹186</span>{" "}
                                    <span className="text-[#701932] font-semibold">₹149!</span>
                                </p>
                            </div>
                            <button className="bg-[#701932] hover:bg-[#5b152a] text-white text-sm font-semibold px-6 py-2 rounded-lg shadow transition">
                                LOCK NOW
                            </button>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 space-y-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold text-[#701932]">goTribe</h3>
                                    <p className="text-sm text-gray-700 mt-1">
                                        Complete <span className="font-semibold">3 more bookings*</span> & unlock{" "}
                                        <span className="font-semibold text-[#701932]">goTribe2</span>
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Use additional benefits on your next bookings.
                                    </p>
                                </div>
                                <button className="text-[#701932] font-medium text-sm border border-[#701932] px-4 py-2 rounded-lg hover:bg-[#701932]/10 transition">
                                    View all benefits &gt;
                                </button>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3 mt-2">
                                {[
                                    "1 free seat selection* on domestic flights",
                                    "10% discount on stays",
                                ].map((benefit, idx) => (
                                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 text-sm flex items-center gap-3 hover:shadow-sm transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-[#701932]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-[#701932] hover:bg-[#5b152a] text-white font-semibold w-full px-8 py-3 rounded-xl shadow transition">
                                Continue
                            </button>
                        </div>
                    </div></div>
  )
}

export default Continue8