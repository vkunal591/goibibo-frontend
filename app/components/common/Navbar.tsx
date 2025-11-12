"use client";
import React, { useState, useRef, useEffect } from "react";
import { Poppins } from "next/font/google";
import { Menu, X, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { logout } from "@/features/auth/authSlice";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Header = ({ heroSection = false }: { heroSection: boolean }) => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
  };
  console.log(user, heroSection);

  return (
    <header
      className={`relative w-full bg-cover bg-center flex flex-col ${
        poppins.className
      } ${heroSection ? "h-[70vh]" : "h-auto"}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: heroSection
            ? `url('https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/campaigns/global/cug/hn-best-airline-app-economy.jpg')`
            : `url('/assets/sign.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#701932cc] to-black"></div> */}

      <div className="absolute inset-0 bg-black/50"></div>
      <nav className="relative z-20 flex justify-between items-center px-6 md:px-10 py-5 text-white">
        <img className="h-24 mix-blend-multiply" />
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="hover:text-indigo-400 transition">Home</li>
          <li className="hover:text-indigo-400 transition">Flights</li>
          <li className="hover:text-indigo-400 transition">Deals</li>
          <li className="hover:text-indigo-400 transition">About</li>
          <li className="hover:text-indigo-400 transition">Contact</li>
        </ul>
        <div className="hidden md:flex space-x-4 items-center relative">
          <button className="px-5 py-2 border rounded-full transition">
            Holidays
          </button>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-5 py-2 flex flex-row justify-center items-center gap-2
                  bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33]
                  text-white rounded-full font-semibold
                  shadow-md transition-all duration-300"
              >
                <FaUserCircle className="text-xl" />
                My Account
                <FaChevronDown
                  size={13}
                  className={`mt-[2px] transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
                  <Link
                    href="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <User size={18} /> My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={"/login"}
              className="px-5 py-2 bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
              hover:from-[#4A0C15] hover:to-[#681A33]
              text-white rounded-full font-semibold
              shadow-md transition-all duration-300"
            >
              Login
            </Link>
          )}
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col space-y-6 py-9 px-6 z-20 md:hidden">
          <ul className="space-y-4 text-lg font-medium text-center">
            <li className="hover:text-indigo-400 transition">Home</li>
            <li className="hover:text-indigo-400 transition">Flights</li>
            <li className="hover:text-indigo-400 transition">Deals</li>
            <li className="hover:text-indigo-400 transition">About</li>
            <li className="hover:text-indigo-400 transition">Contact</li>
          </ul>
          <div className="flex flex-col space-y-3 mt-1 w-full">
            <button className="px-6 py-2 w-full border border-indigo-400 rounded-full hover:bg-indigo-500 transition">
              Holidays
            </button>
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="px-6 py-2 w-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                    hover:from-[#4A0C15] hover:to-[#681A33] rounded-full font-semibold transition text-center"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 w-full border border-white rounded-full hover:bg-white hover:text-[#5A0F1A] transition font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 w-full bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
                  hover:from-[#4A0C15] hover:to-[#681A33] rounded-full font-semibold transition text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
      {heroSection && (
        <div className="relative z-10 text-center text-white flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fly with Comfort & Style
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover amazing destinations and unbeatable offers.
          </p>
          <button
            className="px-10 py-4 
            bg-gradient-to-r from-[#5A0F1A] to-[#7B1E3D]
            hover:from-[#4A0C15] hover:to-[#681A33]
            text-white text-base font-semibold uppercase tracking-wide
            shadow-lg rounded-full transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
