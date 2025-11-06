"use client";

import { FaFacebookF, FaTwitter, FaYoutube, FaGooglePlay, FaApple } from "react-icons/fa";
import Link from "next/link";
import { JSX } from "react";

const productLinks = [
  { label: "Domestic Hotels", href: "/hotels/" },
  { label: "International Hotels", href: "/hotels-international/" },
  { label: "Domestic Flights", href: "/flights/" },
  { label: "International Flights", href: "/international-flights/" },
  { label: "Multi-City Flights", href: "/multicity-flights/" },
  { label: "Train Booking", href: "/trains/" },
  { label: "Bus Booking", href: "/bus/" },
  { label: "Cab Booking", href: "/cars/" },
];

const aboutLinks = [
  { label: "About Us", href: "/aboutus/" },
  { label: "Investor Relations", href: "/info/investors-overview/" },
  { label: "Contact Us", href: "/info/contactus/" },
  { label: "Careers", href: "/careers/" },
  { label: "Privacy Policy", href: "/info/privacy/" },
];

const travelLinks = [
  { label: "PNR Status", href: "/trains/check-pnr-status/" },
  { label: "Offers", href: "/offers/" },
  { label: "Airline Routes", href: "/flights/city-to-city-airlines/" },
];

const moreLinks = [
  { label: "Hotels Near Me", href: "/hotels/hotels-near-me/" },
  { label: "My Bookings", href: "/mysupport/trips/" },
  { label: "Wallet", href: "/myaccount/gocash/" },
  { label: "Advertise with Us", href: "https://advertising.goibibo.com/ad/solutions/" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200 mt-10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        <FooterSection title="Our Products" links={productLinks} />
        <FooterSection title="About Us" links={aboutLinks} />
        <FooterSection title="Travel Essentials" links={travelLinks} />
        <FooterSection title="More Links" links={moreLinks} />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <SocialLink href="https://facebook.com/goibibo" icon={<FaFacebookF />} label="Facebook" />
          <SocialLink href="https://twitter.com/goibibo" icon={<FaTwitter />} label="Twitter" />
          <SocialLink href="https://youtube.com/user/goibibo" icon={<FaYoutube />} label="YouTube" />
        </div>

        <div className="flex items-center gap-4">
          <AppStoreLink
            href="https://play.google.com/store/apps/details?id=com.goibibo"
            icon={<FaGooglePlay className="text-xl" />}
            text="Google Play"
          />
          <AppStoreLink
            href="https://apps.apple.com/in/app/goibibo-flight-bus-hotel-booking/id631927169"
            icon={<FaApple className="text-xl" />}
            text="App Store"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © 2025 Makemytrip (India) Private Limited. All rights reserved.
      </div>
    </footer>
  );
}

interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h4 className="font-semibold mb-3 text-gray-800">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-blue-600 text-sm transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-2 rounded-full bg-white shadow hover:bg-blue-50 transition-colors"
    >
      <span className="text-blue-600 text-lg">{icon}</span>
    </a>
  );
}

interface AppStoreLinkProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

function AppStoreLink({ href, icon, text }: AppStoreLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50 transition"
    >
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </a>
  );
}
