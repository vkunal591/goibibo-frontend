import React from 'react'

const ImportantInformation4 = () => {
  return (
    <div>
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Important Information</h2>
                        <div className="bg-[#FFF9FB] border border-[#701932]/30 rounded-xl p-5 shadow-sm">
                            <h3 className="font-medium text-gray-900 mb-2">Nearby Airport</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Your flight goes from <span className="font-semibold">Ghaziabad</span>, near Indira Gandhi International Airport.
                                Please note, this is not the airport you originally searched for. Kindly check all the routes to your desired destination to avoid any hassles in your journey.
                            </p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Check travel guidelines and baggage information below:
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-2">
                                <li>
                                    Carry no more than <span className="font-semibold">1 check-in baggage</span> and <span className="font-semibold">1 hand baggage</span> per passenger.
                                    If violated, airline may levy extra charges.
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 border-t border-gray-200 pt-4">
                            <h3 className="font-medium text-gray-900 mb-1">Availability of Boarding Pass:</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Once web check-in is completed, your boarding pass will be available within <span className="font-semibold">6 hours</span> of your flight departure.
                            </p>
                        </div>
                        <div className="bg-gray-50 border-t border-gray-200 pt-4">
                            <h3 className="font-medium text-gray-900 mb-1">Unaccompanied Minors Travelling:</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                An unaccompanied minor usually refers to a child traveling without an adult aged <span className="font-semibold">18 or older</span>.
                                Please check with the airline for their rules and regulations regarding unaccompanied minors, as these can differ between airlines.
                            </p>
                        </div>
                    </div></div>
  )
}

export default ImportantInformation4