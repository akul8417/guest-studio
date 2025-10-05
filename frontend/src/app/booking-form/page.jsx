// src/app/user-booking/[id]/page.jsx
'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function BookingPage() {
  const { id } = useParams(); 
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  // Axios instance
  const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/bookings", 
  });

  useEffect(() => {
    const fetchBooking = async () => {
      try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`
      );

  


        setBooking(res.data);
      } catch (err) {
        console.error("Booking fetch error:", err);
        setBooking(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBooking();
  }, [id]);

  if  (loading) return <p className="p-4">Loading booking details...</p>;

  if (!booking) return <p className="p-4 text-red-600">Booking not found ❌</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
      <p><strong>User:</strong> {booking.user?.name || "N/A"}</p>
      <p><strong>Email:</strong> {booking.user?.email || "N/A"}</p>
      <p><strong>Room:</strong> {booking.room?.name || "N/A"}</p>
      <p><strong>Room Type:</strong> {booking.room?.type || "N/A"}</p>
      <p><strong>Price:</strong> ₹{booking.room?.price || "N/A"}</p>
      <p><strong>Date:</strong> {booking.date ? new Date(booking.date).toLocaleDateString() : "N/A"}</p>
    </div>
  );
}


const paymentMethods = [
  {
    id: 'card',
    label: 'Credit/Debit Card',
    description: 'Pay securely using your card.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="10" rx="2" />
        <path d="M2 11h20" />
      </svg>
    ),
  },


  {
    id: 'upi',
    label: 'UPI',
    description: 'Pay via UPI apps.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 17v-6a4 4 0 014-4h8a4 4 0 014 4v6" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
];

const booking = () => {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);

  return (
    <div>
      <>
        {/* Card Section */}
        <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                Hotel Booking
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400">

              </p>
            </div>
            <form>
              {/* Section */}
              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                <label
                  htmlFor="af-payment-billing-contact"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Name
                </label>
                <div className="mt-2 space-y-3">
                  <input
                    id="af-payment-billing-contact"
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              {/* End Section */}
              {/* Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Check In</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Check Out</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Guests</label>
                  <select className="w-full p-3 border border-gray-300 border-white-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-white bg-black">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                  </select>
                </div>

              </div>
              {/* End Section */}
              {/* Section */}
              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                <label
                  htmlFor="af-payment-payment-method"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Payment method
                </label>
                <div className="mt-2 space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition ${selectedMethod === method.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900'
                        : 'border-gray-200 dark:border-neutral-700'
                        }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedMethod === method.id}
                        onChange={() => setSelectedMethod(method.id)}
                        className="accent-blue-600"
                      />
                      <span>{method.icon}</span>
                      <div>
                        <div className="font-medium text-gray-800 dark:text-neutral-200">{method.label}</div>
                        <div className="text-sm text-gray-500 dark:text-neutral-400">{method.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* End Section */}
            </form>
            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="button"
                className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit
              </button>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>


    </div>
  )
}