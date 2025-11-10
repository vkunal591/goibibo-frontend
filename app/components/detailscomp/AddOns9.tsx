import React from 'react'

const AddOns9 = () => {
  return (
    <div>   <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <h2 className="text-lg font-semibold text-gray-900">Seats & Add-ons</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    title: "Seats & Meals",
                                    subtitle: "Departure: 23A",
                                },
                                {
                                    title: "Cabs",
                                    subtitle: "Book airport pickup & drop",
                                },
                                {
                                    title: "Add-ons",
                                    subtitle: "Enhance your experience",
                                },
                                {
                                    title: "Flight Delay Insurance",
                                    subtitle: "Get ₹2,500 on flight delays",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:shadow-lg transition cursor-pointer"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-800 mb-1">{item.title}</h3>
                                            <p className="text-xs text-gray-500">
                                                {item.subtitle.includes("Departure") ? (
                                                    <>
                                                        Departure: <span className="font-medium text-[#701932]">23A</span>
                                                    </>
                                                ) : (
                                                    item.subtitle
                                                )}
                                            </p>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-[#701932]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div></div>
  )
}

export default AddOns9