import React from "react";
import { ChevronDown } from "lucide-react";
interface FilterOption {
  label: string;
  price?: string;
  iconUrl?: string;
}
interface FilterSection {
  title: string;
  options: FilterOption[];
}
const filterData: FilterSection[] = [
  {
    title: "Popular Filters",
    options: [
      { label: "Non Stop", price: "₹5,023" },
      { label: "Hide Nearby Airports", price: "₹5,023" },
      {
        label: "IndiGo",
        price: "₹5,023",
        iconUrl:
          "https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/6E.png?v=19",
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
        iconUrl:
          "https://imgak.goibibo.com/flights-gi-assets/dt/common/icons/6E.png?v=19",
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
const TicketFilter: React.FC = () => {
  return (
    <aside className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm p-5 max-h-[90vh] overflow-y-auto">
      {filterData.map((section, idx) => (
        <div key={idx} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wide">
              {section.title}
            </h3>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <ul className="space-y-3">
            {section.options.map((opt, i) => (
              <li key={i} className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="accent-blue-600 w-4 h-4 rounded border-gray-300"
                  />
                  <span className="flex items-center text-gray-700 text-sm font-medium group-hover:text-blue-600 transition">
                    {opt.iconUrl && (
                      <img
                        src={opt.iconUrl}
                        alt={opt.label}
                        className="w-4 h-4 mr-1"
                      />
                    )}
                    {opt.label}
                  </span>
                </label>
                {opt.price && (
                  <span className="text-gray-600 text-sm font-medium">
                    {opt.price}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};
export default TicketFilter;
