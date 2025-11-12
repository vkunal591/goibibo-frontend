"use client";
import React, { useState } from "react";
import { User, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import Layout from "../components/layout/Layout";

export default function ProfilePage() {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Amit Kumar",
    lastName: "Singh",
    gender: "Male",
    dob: "1997-08-15",
    nationality: "India",
    anniversary: "2022-01-12",
    maritalStatus: "Single",
    state: "Delhi",
    city: "New Delhi",
    // Contact
    mobile: "+91-8860262227",
    email: "amit.singh@example.com",
    // Documents
    passport: "N1234567",
    passportExpiry: "2030-12-31",
    issuingCountry: "India",
    pan: "ABCDE1234F",
    // Preferences
    domesticPlan: "Standard Plan",
    internationalPlan: "Gold Plan",
    // Frequent flyer (main view default first)
    flyers: [{ airline: "IndiGo", number: "IG123456789" }],
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const addFlyer = () => {
    setProfile((prev) => ({ ...prev, flyers: [...prev.flyers, { airline: "", number: "" }] }));
  };

  const removeFlyer = (index: number) => {
    setProfile((prev) => ({ ...prev, flyers: prev.flyers.filter((_, i) => i !== index) }));
  };

  const updateFlyer = (index: number, field: "airline" | "number", value: string) => {
    setProfile((prev) => {
      const updated = prev.flyers.map((f, i) => (i === index ? { ...f, [field]: value } : f));
      return { ...prev, flyers: updated };
    });
  };

  const handleSubmit = () => {
    console.log("Profile Data Submitted:", profile);
    alert("Profile Updated Successfully!");
    setIsModalOpen(false);
  };

  return (
    <Layout protected heroSection={false}>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-[90%] md:h-[80%] rounded-2xl shadow-lg relative p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-title"
          >
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 id="profile-modal-title" className="text-xl font-semibold text-gray-800">
                Update Profile
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto text-gray-700 space-y-6">
              <p className="text-sm text-gray-600">Make changes to your profile details below and click Submit.</p>

              {/* PERSONAL DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">FIRST & MIDDLE NAME</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">LAST NAME</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">GENDER</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">DATE OF BIRTH</label>
                  <input
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">NATIONALITY</label>
                  <select
                    name="nationality"
                    value={profile.nationality}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">ANNIVERSARY DATE</label>
                  <input
                    type="date"
                    name="anniversary"
                    value={profile.anniversary}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">MARITAL STATUS</label>
                  <select
                    name="maritalStatus"
                    value={profile.maritalStatus}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">STATE</label>
                  <input
                    type="text"
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">CITY</label>
                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <h3 className="text-sm font-semibold text-gray-800 mt-6">Contact Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">MOBILE NUMBER</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* DOCUMENT DETAILS */}
              <h3 className="text-sm font-semibold text-gray-800 mt-6">Document Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">PASSPORT NUMBER</label>
                  <input
                    type="text"
                    name="passport"
                    value={profile.passport}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">EXPIRY DATE</label>
                  <input
                    type="date"
                    name="passportExpiry"
                    value={profile.passportExpiry}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">ISSUING COUNTRY</label>
                  <input
                    type="text"
                    name="issuingCountry"
                    value={profile.issuingCountry}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">PAN CARD NUMBER</label>
                  <input
                    type="text"
                    name="pan"
                    value={profile.pan}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* PREFERENCES */}
              <h3 className="text-sm font-semibold text-gray-800 mt-6">Your Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">Domestic Trip Protection Plan</label>
                  <select
                    name="domesticPlan"
                    value={profile.domesticPlan}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>Standard Plan</option>
                    <option>Premium Plan</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">International Travel Insurance Plan</label>
                  <select
                    name="internationalPlan"
                    value={profile.internationalPlan}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>Gold Plan</option>
                    <option>Platinum Plan</option>
                  </select>
                </div>
              </div>

              {/* FREQUENT FLYER DETAILS */}
              <h3 className="text-sm font-semibold text-gray-800 mt-6">Frequent Flyer Details</h3>
              <div className="grid grid-cols-1 gap-3">
                {profile.flyers.map((flyer, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-gray-700 mb-1">AIRLINE</label>
                      <select
                        value={flyer.airline}
                        onChange={(e) => updateFlyer(idx, "airline", e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                      >
                        <option value="">Select Airline</option>
                        <option>IndiGo</option>
                        <option>Air India</option>
                        <option>Vistara</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-gray-700 mb-1">Frequent Flyer Number</label>
                      <input
                        type="text"
                        value={flyer.number}
                        onChange={(e) => updateFlyer(idx, "number", e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    </div>

                    {idx > 0 && (
                      <div className="md:col-span-2 flex justify-end">
                        <button
                          onClick={() => removeFlyer(idx)}
                          className="text-red-500 text-xs font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                <div>
                  <button onClick={addFlyer} className="text-blue-600 text-xs font-semibold hover:underline">
                    + Add
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t pt-4 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] hover:opacity-90 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
        <div className="flex w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <aside className="w-72 h-screen bg-gradient-to-b rounded-b-2xl from-[#5A0F1A] to-[#7B1E3D] text-white flex flex-col justify-between p-8">
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
              <h3 className="text-xs font-semibold tracking-wider text-gray-300 mb-4">MY ACCOUNT</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm cursor-pointer">
                  <User size={18} /> Update Profile
                </li>
              </ul>
            </div>
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
              >
                Update Profile
              </button>
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">General Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">FIRST & MIDDLE NAME</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#7B1E3D]/30 focus:border-[#7B1E3D] outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">LAST NAME</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">GENDER</label>
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">DATE OF BIRTH</label>
                  <input
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">NATIONALITY</label>
                  <select
                    name="nationality"
                    value={profile.nationality}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">ANNIVERSARY DATE</label>
                  <input
                    type="date"
                    name="anniversary"
                    value={profile.anniversary}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">MARITAL STATUS</label>
                  <select
                    name="maritalStatus"
                    value={profile.maritalStatus}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">STATE</label>
                  <input
                    type="text"
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">CITY</label>
                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">Contact Details</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">MOBILE NUMBER</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 font-medium focus:ring-2 focus:ring-[#7B1E3D]/30 focus:border-[#7B1E3D] outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 font-medium focus:ring-2 focus:ring-[#7B1E3D]/30 focus:border-[#7B1E3D] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Document Details */}
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">Document Details</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">PASSPORT NUMBER</label>
                  <input
                    type="text"
                    name="passport"
                    value={profile.passport}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">EXPIRY DATE</label>
                  <input
                    type="date"
                    name="passportExpiry"
                    value={profile.passportExpiry}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">ISSUING COUNTRY</label>
                  <select
                    name="issuingCountry"
                    value={profile.issuingCountry}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
                  >
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">PAN CARD NUMBER</label>
                  <input
                    type="text"
                    name="pan"
                    value={profile.pan}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-sm font-bold mb-2 text-gray-800">Your Preferences</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">Domestic Trip Protection Plan</label>
                  <select
                    name="domesticPlan"
                    value={profile.domesticPlan}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option>Standard Plan</option>
                    <option>Premium Plan</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-gray-700 mb-1">International Travel Insurance Plan</label>
                  <select
                    name="internationalPlan"
                    value={profile.internationalPlan}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                    <option>Gold Plan</option>
                    <option>Platinum Plan</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-2 text-gray-800">Frequent Flyer Details</h3>
              <div className="grid md:grid-cols-2 gap-5">
                {profile.flyers.map((flyer, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-gray-700 mb-1">AIRLINE</label>
                      <select
                        value={flyer.airline}
                        onChange={(e) => updateFlyer(index, "airline", e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                        <option value="">Select Airline</option>
                        <option>IndiGo</option>
                        <option>Air India</option>
                        <option>Vistara</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-gray-700 mb-1">Frequent Flyer Number</label>
                      <input
                        type="text"
                        value={flyer.number}
                        onChange={(e) => updateFlyer(index, "number", e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    </div>
                    {index === profile.flyers.length - 1 && (
                      <div className="md:col-span-2">
                        <button onClick={addFlyer} className="text-blue-600 text-xs font-semibold hover:underline mt-2">
                          + Add
                        </button>
                      </div>
                    )}
                    {index > 0 && (
                      <div className="md:col-span-2 flex justify-end">
                        <button onClick={() => removeFlyer(index)} className="text-red-500 text-xs font-semibold hover:underline">
                          Remove
                        </button>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
