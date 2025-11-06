"use client";
import Image from "next/image";
import { Mail, Phone, Gift, Wallet, User, LogOut, Smartphone, Plane } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f4f6fb] to-[#e8ecf7] py-12 px-6 flex justify-center">
      <div className="flex w-full max-w-7xl gap-8">
        {/* Sidebar */}
        <aside className="w-64 bg-white/90 backdrop-blur-xl border border-gray-200/70 rounded-2xl shadow-lg p-6">
          <h2 className="text-xs font-semibold text-gray-500 mb-4 tracking-wider">MY ACCOUNT</h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 hover:text-indigo-700 transition-all duration-150 cursor-pointer">
              <User className="w-5 h-5 text-indigo-600" />
              My Profile
            </li>
            <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 hover:text-indigo-700 transition-all duration-150 cursor-pointer">
              <Plane className="w-5 h-5 text-indigo-600" />
              Co-travellers
            </li>
            <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 hover:text-indigo-700 transition-all duration-150 cursor-pointer">
              <Smartphone className="w-5 h-5 text-indigo-600" />
              Logged in Devices
            </li>
            <li className="border-t border-gray-200 my-3" />
            <li className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 cursor-pointer transition">
              <LogOut className="w-5 h-5 text-red-600" />
              Logout
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="flex-1 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/70 p-10">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-5 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">My Profile</h2>
            <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-medium px-6 py-2.5 rounded-full shadow hover:shadow-md transition">
              SAVE CHANGES
            </button>
          </div>

          {/* Profile Overview */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-indigo-200">
                <Image
                  src="https://go-assets.ibcdn.com/u/MMT/images/1745385553523-Default-img.png"
                  alt="Profile"
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">Amit Ibibo</h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>8860262227</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="text-indigo-600 cursor-pointer hover:underline">
                    Add Email Address
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <Image
                  src="https://go-assets.ibcdn.com/u/GI/images/1753264871735-gotribe.png"
                  alt="Tier Badge"
                  width={93}
                  height={30}
                  className="rounded-full bg-white shadow-sm cursor-pointer"
                />
              </div>
            </div>

            {/* Wallet + Gift */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto mt-4 md:mt-0">
              <div className="flex justify-between items-center bg-gradient-to-r from-[#f9fafc] to-[#f1f4f9] border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <Wallet size={20} className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-gray-500">goCash Balance</p>
                    <p className="font-semibold text-gray-800">₹ 100</p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className="flex justify-between items-center bg-gradient-to-r from-[#f9fafc] to-[#f1f4f9] border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <Gift size={20} className="text-indigo-600" />
                  <div>
                    <p className="text-xs text-gray-500">Gift Cards</p>
                    <p className="font-semibold text-gray-800">Add Now</p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-5 bg-gradient-to-r from-[#eef3fa] to-[#f9fafc] border border-gray-200 rounded-xl p-2 mb-10">
            <div className="relative flex-shrink-0 w-16 h-16">
              <svg viewBox="0 0 42 39" className="w-16 h-16">
                <text x="9" y="23.644" fill="#1e1e1e" fontSize="12" fontWeight="900">40%</text>
                <circle cx="20" cy="19.5" r="19" stroke="#e5e7eb" strokeWidth="3" fill="none"></circle>
                <path d="M31.16899288712006 34.87054318778167 A19 19 0 0 0 20 0.5" stroke="#007E7D" strokeWidth="3" fill="none"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Complete your profile</h3>
              <p className="text-sm text-gray-500">
                Add your email to receive booking updates and travel alerts.
              </p>
            </div>
            <button className="ml-auto text-indigo-600 text-sm font-medium hover:underline">
              Add Email
            </button>
          </div>

          {/* Forms */}
          <FormSection title="General Information">
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <FloatingInput label="First & Middle Name" defaultValue="Amit" />
              <FloatingInput label="Last Name" defaultValue="Ibibo" />
            </div>
          </FormSection>

          <FormSection title="Contact Details" subtitle="For booking alerts & notifications.">
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <FloatingInput label="Mobile Number" defaultValue="+91 8860262227" />
              <FloatingInput label="Email ID" placeholder="Add Email" />
            </div>
          </FormSection>

          <FormSection title="Documents Details">
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <FloatingInput label="Passport Number" placeholder="Enter Passport Number" />
              <FloatingInput label="Expiry Date" placeholder="DD/MM/YYYY" />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              <span className="font-semibold">Note:</span> PAN will only be used for international bookings as per RBI guidelines.
            </p>
          </FormSection>

          <FormSection title="Frequent Flyer Details">
            <button className="text-indigo-600 text-sm font-medium hover:underline">
              + Add
            </button>
          </FormSection>
        </section>
      </div>
    </main>
  );
}

/* 🧠 Small UI helper components */
function FormSection({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500 mb-3">{subtitle}</p>}
      {children}
    </div>
  );
}

function FloatingInput({
  label,
  defaultValue,
  placeholder,
}: {
  label: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none transition"
      />
      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">{label}</label>
    </div>
  );
}
