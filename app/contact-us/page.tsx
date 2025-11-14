"use client";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="relative h-[300px] w-full">
        <img
          src="https://images.pexels.com/photos/348481/pexels-photo-348481.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Airplane flying in the sky"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl border border-gray-200 -mt-16 relative z-10 p-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#5A0F1A] mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#5A0F1A]" /> Gurgaon (Head Office)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              MakeMyTrip (India) Private Limited<br />
              19th Floor, Tower A/B/C, Epitome Building No. 5,<br />
              DLF Cyber City, DLF Phase III,<br />
              Gurugram, Haryana - 122002
            </p>
            <div className="mt-6 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5A0F1A]" /> <span>Telephone: +91 124 439 5000</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5A0F1A]" /> <span>Customer Support: 0124-6280407</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5A0F1A]" /> <span>Fax: +91 124 439 5100</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-[#5A0F1A] mb-2">Existing Bookings</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              For E-Tickets, Cancellations, or Refund Status — please use the{" "}
              <Link href="/support" className="text-[#5A0F1A] font-medium hover:underline">
                Manage My Bookings
              </Link>{" "}
              feature on our Customer Support page.
            </p>
            <p className="text-gray-700 text-sm">
              For any other assistance, contact our 24×7 Customer Support at{" "}
              <span className="font-semibold">0124-6280407</span>.
            </p>

            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-semibold text-[#5A0F1A] mb-2">New Bookings</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Make a new booking easily via our website or mobile app (available on Android & iOS). Complete your
              transaction using secure payment options.
            </p>
            <p className="text-gray-700 text-sm mt-3">
              For queries, reach out to our Customer Support Team at{" "}
              <span className="font-semibold">0124-6280407</span>.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps?q=DLF+Cyber+City,+Gurugram,+Haryana&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#5A0F1A]" />
            <span>DLF Cyber City, Gurugram, Haryana</span>
          </div>
          <p>© 2025 Makemytrip (India) Private Limited. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
