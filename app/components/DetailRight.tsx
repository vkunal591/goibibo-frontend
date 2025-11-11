import React from 'react'
import Location1 from './detailscomp/Location1'
import Cancellation2 from './detailscomp/Cancellation2'
import SpecialCombos3 from './detailscomp/SpecialCombos3'
import ImportantInformation4 from './detailscomp/ImportantInformation4'
import TripSecure5 from './detailscomp/TripSecure5'
import Seamlessjourney6 from './detailscomp/Seamlessjourney6'
import FlayerExclusive7 from './detailscomp/FlayerExclusive7'
import Continue8 from './detailscomp/Continue8'
import AddOns9 from './detailscomp/AddOns9'
const DetailRight = () => {
    return (
        <div>
            <div className="rounded-2xl flex items-center justify-center text-gray-400 text-sm">
                <div className="border-gray-200 rounded-2xl space-y-2">
                  <Location1/>
                  <Cancellation2/>
                  <SpecialCombos3/>
                  <ImportantInformation4/>
                  <TripSecure5/>
                  <Seamlessjourney6/>
                  <FlayerExclusive7/>
                  <Continue8/>
                  <AddOns9/>
                </div>
            </div>
        </div>
    )
}
export default DetailRight