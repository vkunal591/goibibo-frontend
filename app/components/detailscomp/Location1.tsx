import React from 'react'

const Location1 = () => {
  return (
    <div><div className="space-y-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                         <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-sm flex items-start gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mt-0.5 text-amber-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-.01-10a9 9 0 100 18 9 9 0 000-18z" />
                            </svg>
                            <p>
                                Your flight departs from <strong>Hindon Airport</strong>, which is 32 km away from{" "}
                                <strong>Indira Gandhi International Airport</strong>.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Ghaziabad → Bengaluru</h2>
                            <p className="text-sm text-gray-600">
                                Saturday, Nov 15 · <span className="font-medium text-gray-800">Non Stop</span> · 2h 55m
                            </p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                            <p className="text-gray-700 text-sm">Cancellation Fees Apply</p>
                            <a href="#" className="text-[#701932] font-medium hover:underline text-sm">
                                View Fare Rules
                            </a>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold text-gray-900">Air India Express</h3>
                                <p className="text-sm text-gray-600">IX 2964 · Airbus A320</p>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Economy · Classic</p>
                            <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center">
                                <div className="text-center">
                                    <p className="text-xl font-semibold text-gray-900">14:45</p>
                                    <p className="text-xs text-gray-500">Ghaziabad</p>
                                    <p className="text-xs text-gray-500">Hindon Airport</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-24 border-t-2 border-dashed border-gray-300 my-1"></div>
                                    <p className="text-xs text-gray-500">2h 55m</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-semibold text-gray-900">17:40</p>
                                    <p className="text-xs text-gray-500">Bengaluru</p>
                                    <p className="text-xs text-gray-500">
                                        Kempegowda Int’l Airport, Terminal T2
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-1 text-sm text-gray-700">
                            <p>
                                <strong>Cabin Baggage:</strong> 7 Kgs / Adult
                            </p>
                            <p>
                                <strong>Check-In Baggage:</strong> 15 Kgs (1 piece only) / Adult
                            </p>
                            <p className="text-gray-600">
                                Got excess baggage? Buy extra check-in baggage allowance for <strong>HDO–BLR</strong> at fab rates!
                            </p>
                        </div>
                        <button className="w-full py-3 bg-[#701932] text-white rounded-lg text-sm font-medium hover:bg-[#8b2346] transition-colors">
                            + ADD BAGGAGE
                        </button>
                    </div>
                    </div>
  )
}

export default Location1