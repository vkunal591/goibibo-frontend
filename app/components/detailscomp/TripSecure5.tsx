import React from 'react'

const TripSecure5 = () => {
  return (
    <div> <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h2 className="text-xl font-semibold text-gray-900">Trip Secure</h2>
                            <span className="text-[#701932] font-semibold text-lg">₹ 399 / Traveller</span>
                        </div>
                        <p className="text-xs text-gray-500">18% GST included</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                            <div className="flex flex-col gap-1 bg-gray-50 p-3 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-900">24x7 Support</span>
                                <span className="text-gray-600">Delayed / lost baggage assistance</span>
                            </div>
                            <div className="flex flex-col gap-1 bg-gray-50 p-3 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-900">Up to ₹ 6,000</span>
                                <span className="text-gray-600">Missed Flight — Up to ₹ 4,500</span>
                            </div>
                        </div>
                        <button className="text-[#701932] text-sm font-medium underline hover:text-[#8b2346] transition-colors">
                            View All Benefits
                        </button>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Recommended for your travel within India.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="flex-1 bg-[#701932] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#8b2346] transition-all">
                                Yes, Secure my trip
                            </button>
                            <button className="flex-1 border border-gray-300 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                                No, I will book without Trip Secure
                            </button>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
                            <h3 className="text-sm font-medium text-gray-900">Preferred by millions of travellers</h3>
                            <div className="text-xs text-gray-600 italic">
                                “Your willingness to go above and beyond what was expected made a significant difference in my
                                ability…”
                                <span className="font-semibold text-gray-800 block mt-1">~ Amit Paul</span>
                            </div>
                            <div className="text-xs text-gray-600 italic">
                                “Wow, the claim settlement was incredibly fast. Thank you so much! Such a smooth experience.
                                Appreciate it…”
                                <span className="font-semibold text-gray-800 block mt-1">~ Prateek Keshari</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-4">
                            Trip Secure is non-refundable. By selecting it, I confirm all travelers are Indian nationals,
                            aged 6 months to 90 years, and accept the{" "}
                            <a href="#" className="text-[#701932] underline hover:text-[#8b2346]">
                                T&Cs
                            </a>.
                        </p>
                    </div>
                    </div>
  )
}

export default TripSecure5