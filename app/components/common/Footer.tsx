"use client";
import { FaFacebookF, FaTwitter, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import Link from "next/link";
import { JSX } from "react";
const sections = {
  "Our Products": [
    { label: "Domestic Hotels", href: "/hotels/" },
    { label: "International Hotels", href: "/hotels-international/" },
    { label: "Domestic Flights", href: "/flights/" },
    { label: "International Flights", href: "/international-flights/" },
    { label: "Multi-City Flights", href: "/multicity-flights/" },
    { label: "Train Booking", href: "/trains/" },
    { label: "Bus Booking", href: "/bus/" },
    { label: "Cab Booking", href: "/cars/" },
  ],
  "About Us": [
    { label: "About Us", href: "/about-us/" },
    { label: "Investor Relations", href: "/info/investors-overview/" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Terms of Services", href: "/term-of-services" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "user agreement", href: "/user-agreement" },
    { label: "technical support", href: "/technical-support" },
  ],
  "Travel Essentials": [
    { label: "PNR Status", href: "/trains/check-pnr-status/" },
    { label: "Offers", href: "/offers/" },
    { label: "Airline Routes", href: "/flights/city-to-city-airlines/" },
  ],
  "More Links": [
    { label: "Hotels Near Me", href: "/hotels/hotels-near-me/" },
    { label: "My Bookings", href: "/mysupport/trips/" },
    { label: "Wallet", href: "/myaccount/gocash/" },
    { label: "Advertise with Us", href: "https://advertising.goibibo.com/ad/solutions/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {Object.entries(sections).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-gray-900 mb-3 text-base">{title}</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#5A0F1A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200" />
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Social href="https://facebook.com/goibibo" icon={<FaFacebookF />} />
          <Social href="https://twitter.com/goibibo" icon={<FaTwitter />} />
          <Social href="https://youtube.com/user/goibibo" icon={<FaYoutube />} />
        </div>
        <div className="flex items-center gap-4">
          <App href="https://play.google.com/store/apps/details?id=com.goibibo" icon={<FaGooglePlay />} text="Google Play" />
          <App href="https://apps.apple.com/in/app/goibibo-flight-bus-hotel-booking/id631927169" icon={<FaApple />} text="App Store" />
        </div>
      </div>
      <div className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © 2025 Makemytrip (India) Private Limited. All rights reserved.
      </div>
    </footer>
  );
}

function Social({ href, icon }: { href: string; icon: JSX.Element }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
      <span className="text-[#5A0F1A] text-lg">{icon}</span>
    </a>
  );
}

function App({ href, icon, text }: { href: string; icon: JSX.Element; text: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
      <span className="text-[#5A0F1A] text-lg">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </a>
  );
}
