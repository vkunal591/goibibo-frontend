"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Sun, Sunrise, Sunset, Moon } from "lucide-react";

const TicketFilter: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([3000, 12000]);
  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(null);
  const [selectedArrival, setSelectedArrival] = useState<string | null>(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<{ [key: string]: boolean }>({});

  const filterData = [
    {
      title: "Popular Filters",
      options: [
        { label: "Non Stop", price: "₹5,023" },
        { label: "Hide Nearby Airports", price: "₹5,023" },
        {
          label: "IndiGo",
          price: "₹5,023",
          iconUrl: "https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/6E.png?v=19",
        },
        { label: "1 Stop", price: "₹6,285" },
      ],
    },
    {
      title: "Departure Airports",
      options: [
        { label: "Hindon Airport (32Km)", price: "₹11,638" },
        { label: "Indira Gandhi International Airport", price: "₹5,023" },
      ],
    },
    {
      title: "Stops From New Delhi",
      options: [
        { label: "Non Stop", price: "₹5,023" },
        { label: "1 Stop", price: "₹6,285" },
      ],
    },
    {
      title: "Airlines",
      options: [
        {
          label: "IndiGo",
          price: "₹5,023",
          iconUrl: "https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/6E.png?v=19",
        },
      ],
    },
    {
      title: "Aircraft Make",
      options: [{ label: "Airbus", price: "₹5,023" }],
    },
    {
      title: "Aircraft Size",
      options: [{ label: "Small / Mid-size aircraft", price: "₹5,023" }],
    },
  ];

  const timeSlots = [
    { label: "Before 6 am", icon: <Sunrise className="w-5 h-5" /> },
    { label: "6 am - 12 pm", icon: <Sun className="w-5 h-5" /> },
    { label: "12 pm - 6 pm", icon: <Sunset className="w-5 h-5" /> },
    { label: "After 6 pm", icon: <Moon className="w-5 h-5" /> },
  ];

  const handlePriceChange = (event: Event, newValue: number[] | number) => {
    setPriceRange(newValue as number[]);
  };

  const handleCheckboxChange = (label: string) => {
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleClearFilters = () => {
    setPriceRange([3000, 12000]);
    setSelectedDeparture(null);
    setSelectedArrival(null);
    setSelectedCheckboxes({});
  };

  const handleSearch = () => {
    const filters = {
      priceRange,
      selectedDeparture,
      selectedArrival,
      selectedCheckboxes,
    };
    console.log("Selected Filters:", filters);
  };

  return (
    <aside className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm p-5 max-h-[90vh] overflow-y-auto relative">
      <div className="sticky top-0 bg-white z-10 p-3 flex flex-col gap-2 border-b border-gray-200 mb-4">
        <button
          onClick={handleSearch}
          className="w-full px-4 py-2 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white rounded-md font-semibold text-sm"
        >
          Search
        </button>
        <button
          onClick={handleClearFilters}
          className="w-full px-4 py-2 border border-[#7B1E3D] text-[#7B1E3D] rounded-md font-semibold text-sm hover:bg-[#7B1E3D] hover:text-white transition"
        >
          Reset All
        </button>
      </div>

      {filterData.map((section, idx) => (
        <div key={idx} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">
              {section.title}
            </h3>
          </div>
          <ul className="space-y-3">
            {section.options.map((opt, i) => (
              <li key={i} className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={!!selectedCheckboxes[opt.label]}
                    onChange={() => handleCheckboxChange(opt.label)}
                    className="appearance-none w-4 h-4 rounded border border-gray-300 cursor-pointer
                      checked:border-transparent checked:bg-gradient-to-r 
                      checked:from-[#5A0F1A] checked:to-[#7B1E3D] transition-all
                      relative after:content-['✓'] after:absolute after:text-white 
                      after:text-[10px] after:font-bold after:left-[3px] after:top-[-1px] 
                      checked:after:block after:hidden"
                  />
                  <span className="flex items-center text-gray-700 text-sm font-medium group-hover:text-[#7B1E3D] transition">
                    {opt.iconUrl && (
                      <img src={opt.iconUrl} alt={opt.label} className="w-4 h-4 mr-1" />
                    )}
                    {opt.label}
                  </span>
                </label>
                {opt.price && <span className="text-gray-600 text-sm font-medium">{opt.price}</span>}
              </li>
            ))}
          </ul>

          {section.title === "Departure Airports" && (
            <div className="mt-6">
              <h4 className="text-gray-800 font-semibold text-sm uppercase mb-3">
                Price Range
              </h4>
              <Box sx={{ width: "100%", px: 1 }}>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={3000}
                  max={12000}
                  sx={{
                    color: "transparent",
                    height: 6,
                    "& .MuiSlider-track": {
                      background: "linear-gradient(90deg, #5A0F1A, #7B1E3D)",
                      border: "none",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#e5e7eb",
                      opacity: 1,
                    },
                    "& .MuiSlider-thumb": {
                      width: 18,
                      height: 18,
                      backgroundColor: "#fff",
                      border: "2px solid #7B1E3D",
                      "&:hover": {
                        boxShadow: "0 0 0 8px rgba(123, 30, 61, 0.16)",
                      },
                    },
                    "& .MuiSlider-valueLabel": {
                      background: "linear-gradient(90deg, #5A0F1A, #7B1E3D)",
                      color: "white",
                    },
                  }}
                />
              </Box>
              <div className="flex justify-between mt-2 text-sm text-gray-700 font-medium">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="mt-8">
        {[
          {
            title: "Departure From New Delhi",
            selected: selectedDeparture,
            setSelected: setSelectedDeparture,
          },
          {
            title: "Arrival at Mumbai",
            selected: selectedArrival,
            setSelected: setSelectedArrival,
          },
        ].map((section, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="text-white bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] px-3 py-1 rounded font-semibold text-sm uppercase inline-block mb-3">
              {section.title}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((opt, i) => (
                <button
                  key={i}
                  onClick={() =>
                    section.setSelected(section.selected === opt.label ? null : opt.label)
                  }
                  className={`flex flex-col items-center justify-center p-3 rounded-md border transition-all
                    ${
                      section.selected === opt.label
                        ? "text-white bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] border-transparent shadow-md"
                        : "border-[#5A0F1A]/40 text-gray-700 hover:border-[#7B1E3D] hover:text-[#7B1E3D]"
                    }`}
                >
                  {opt.icon}
                  <span className="text-xs font-medium mt-1">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TicketFilter;
