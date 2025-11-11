import React from 'react'

const Seamlessjourney6 = () => {
  return (
    <div><div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Say adios to waiting and hello to a seamless journey with{" "}
                            <span className="text-[#701932]">Xpress Ahead!</span>
                        </h2>
                        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                            <div className="flex items-center justify-center w-10 h-10 bg-[#701932]/10 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-[#701932]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 14l6-6m2 2a9 9 0 11-6.219-8.567"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold text-[#701932]">Use code GIFAST</span> to get ₹150 off
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Enjoy the most comfortable traveling experience with Air India Xpress Ahead Services @ just{" "}
                                    <span className="font-semibold text-gray-900">₹ 315</span>
                                </p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4 text-center text-sm font-medium text-gray-800">
                            {[
                                { icon: "M8 7V3m8 4V3m-9 8h10m-7 4h4m-9 8h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z", label: "Priority Check-in" },
                                { icon: "M13 16h-1v-4h-1m0 4h4m0 0v-4m0 4v4m4-12h-1v4h1m-1-4V8a2 2 0 012-2h1", label: "Priority Boarding" },
                                { icon: "M3 10h18M3 14h18m-9 7l-3-3h6l-3 3z", label: "Bags out first" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-all duration-200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#701932]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                    </svg>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center mt-4">
                            <span className="text-lg font-semibold text-gray-800">All this for just</span>
                            <span className="text-2xl font-bold text-[#701932]">₹ 315</span>
                        </div>
                    </div></div>
  )
}

export default Seamlessjourney6