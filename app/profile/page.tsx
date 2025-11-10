"use client";
import React from "react";
import { User, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import Layout from "../components/layout/Layout";

export default function ProfilePage() {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout protected hideNavbar={true}>
      <main className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
        <div className="flex w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <aside className="w-72 h-screen bg-gradient-to-b rounded-b-2xl from-[#5A0F1A] to-[#7B1E3D] text-white flex flex-col justify-between p-8">
            {/* Top Section */}
            <div>
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold">{user?.name || "User"}</h2>
                <p className="text-gray-200 text-sm">{user?.email || "in**@****mail.com"}</p>
              </div>

              <h3 className="text-xs font-semibold tracking-wider text-gray-300 mb-4">
                MY ACCOUNT
              </h3>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm cursor-pointer">
                  <User size={18} /> Update Profile
                </li>
              </ul>
            </div>

            {/* Bottom Section */}
            <div onClick={handleLogout}>
              <ul className="text-sm font-medium">
                <li className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm cursor-pointer">
                  <LogOut size={18} /> Logout
                </li>
              </ul>
            </div>
          </aside>

          <section className="flex-1 px-10 py-5">
            <div className="flex justify-between items-center border-b pb-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
              <button className="bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Save Changes
              </button>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">
                General Information
              </h3>
              <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    FIRST & MIDDLE NAME
                  </label>
                  <input
                    type="text"
                    defaultValue="Amit Kumar"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#7B1E3D]/30 focus:border-[#7B1E3D]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    defaultValue="Singh"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    GENDER
                  </label>
                  <select
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                    defaultValue="Male"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    DATE OF BIRTH
                  </label>
                  <input
                    type="date"
                    defaultValue="1997-08-15"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    NATIONALITY
                  </label>
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option selected>India</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    ANNIVERSARY DATE
                  </label>
                  <input
                    type="date"
                    defaultValue="2022-01-12"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    MARITAL STATUS
                  </label>
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option selected>Single</option>
                    <option>Married</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    STATE
                  </label>
                  <input
                    type="text"
                    defaultValue="Delhi"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    CITY
                  </label>
                  <input
                    type="text"
                    defaultValue="New Delhi"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">
                Contact Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    MOBILE NUMBER
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91-8860262227"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 font-medium focus:ring-2 focus:ring-[#7B1E3D]/30 focus:border-[#7B1E3D] outline-none" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    defaultValue="amit.singh@example.com"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 font-medium focus:ring-2 focus:ring-[#7B1E3D]/30 focus:border-[#7B1E3D] outline-none" />
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">
                Document Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    PASSPORT NUMBER
                  </label>
                  <input
                    type="text"
                    defaultValue="N1234567"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    EXPIRY DATE
                  </label>
                  <input
                    type="date"
                    defaultValue="2030-12-31"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    ISSUING COUNTRY
                  </label>
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option selected>India</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    PAN CARD NUMBER
                  </label>
                  <input
                    type="text"
                    defaultValue="ABCDE1234F"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">
                Your Preferences
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    Domestic Trip Protection Plan
                  </label>
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option selected>Standard Plan</option>
                    <option>Premium Plan</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    International Travel Insurance Plan
                  </label>
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option selected>Gold Plan</option>
                    <option>Platinum Plan</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-2 text-gray-800">
                Frequent Flyer Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    AIRLINE
                  </label>
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option selected>IndiGo</option>
                    <option>Air India</option>
                    <option>Vistara</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    Frequent Flyer Number
                  </label>
                  <input
                    type="text"
                    defaultValue="IG123456789"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
              </div>
              <button className="text-[#7B1E3D] text-sm font-semibold hover:underline mt-2">
                + Add
              </button>
            </div>
            </div>
            <div className="flex justify-end mt-12 gap-4">
              <button className="px-6 py-2 rounded-full border text-gray-700 hover:bg-gray-100 transition">
                Cancel
              </button>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white font-semibold hover:opacity-90 transition">
                Save Changes
              </button>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
