import React from 'react'

const FlayerExclusive7 = () => {
  return (
    <div>   <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <div className="bg-[#701932]/10 border border-[#701932]/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="space-y-1">
                                <h2 className="text-lg font-semibold text-[#701932]">
                                    FLYER EXCLUSIVE DEAL
                                </h2>
                                <p className="text-sm text-gray-700">
                                    Book this flight to get:{" "}
                                    <span className="font-semibold text-[#701932]">Flat 20% Off</span> +
                                    Exclusive Rates on Hotel Bookings with code{" "}
                                    <span className="font-semibold text-[#701932]">GOEXTRA</span>
                                </p>
                            </div>
                            <div className="bg-[#701932] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow">
                                GOEXTRA
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900">Traveller Details</h3>
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-gray-800">ADULT (12 yrs+)</p>
                                    <p className="text-sm text-gray-500">0/1 added</p>
                                </div>
                                <p className="text-xs text-gray-600">
                                    <span className="font-semibold text-gray-800">Important:</span> Enter name as mentioned on your passport or Government approved IDs.
                                </p>
                                <div className="bg-white border border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-[#701932] mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#701932]">ADD NEW ADULT</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-gray-900">Booking details will be sent to</h3>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Country Code</label>
                                        <select className="w-full mt-1 border border-gray-300 rounded-lg p-2 text-sm focus:ring-[#701932] focus:border-[#701932]">
                                            <option>India (+91)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Mobile No</label>
                                        <input
                                            type="text"
                                            defaultValue="8860262227"
                                            className="w-full mt-1 border border-gray-300 rounded-lg p-2 text-sm focus:ring-[#701932] focus:border-[#701932]"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full mt-1 border border-gray-300 rounded-lg p-2 text-sm focus:ring-[#701932] focus:border-[#701932]"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <input
                                        type="checkbox"
                                        id="gst"
                                        className="w-4 h-4 text-[#701932] border-gray-300 rounded focus:ring-[#701932]"
                                    />
                                    <label htmlFor="gst" className="text-sm text-gray-700">
                                        I have a GST number (Optional)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div></div>
  )
}

export default FlayerExclusive7