'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    MobileNo: "",
    checkIn: "",
    checkOut: "",
    guest: "",
    paymentMethods: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [roomData, setRoomData] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("");
  const token = localStorage.getItem('token');

  const paymentMethods = [
    {
      id: "card",
      label: "Credit/Debit Card",
      description: "Pay securely using your card.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M2 11h20" />
        </svg>
      ),
    },
    {
      id: "upi",
      label: "UPI",
      description: "Pay via UPI apps.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 17v-6a4 4 0 014-4h8a4 4 0 014 4v6" />
          <path d="M8 21h8" />
        </svg>
      ),
    },
  ];

  // ✅ validation logic
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.MobileNo.trim()) {
      newErrors.MobileNo = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.MobileNo)) {
      newErrors.MobileNo = "Enter a valid 10-digit mobile number";
    }

    if (!form.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!form.checkOut) newErrors.checkOut = "Check-out date is required";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn)
      newErrors.checkOut = "Check-out must be after check-in date";

    if (!form.guest) newErrors.guest = "Please select number of guests";
    if (!form.paymentMethods)
      newErrors.paymentMethods = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    try {
      // You can also save form data to backend here
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/booking/add`, form, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      });
      toast.success("Booking submitted successfully!");
      // router.push("/payment"); // ✅ redirect to payment page
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while submitting");
    }
  };

  // ✅ fetch room data
  const fetchRoomData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/room/getbyid/${id}`
      );
      setRoomData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching room details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoomData();
  }, []);

  if (loading) return <p className="p-4 text-center">Loading booking details...</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 border">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Hotel Booking
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-lg p-2 mb-2"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

          {/* Email */}
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border rounded-lg p-2 mb-2"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

          {/* Mobile */}
          <label className="block font-semibold">Mobile Number</label>
          <input
            type="Number"
            value={form.MobileNo}
            onChange={(e) => setForm({ ...form, MobileNo: e.target.value })}
            className="w-full border rounded-lg p-2 mb-2"
            placeholder="10-digit mobile number"
          />
          {errors.MobileNo && (
            <p className="text-red-500 text-sm mb-2">{errors.MobileNo}</p>
          )}

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block font-semibold">Check In</label>
              <input
                type="date"
                value={form.checkIn}
                onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              {errors.checkIn && (
                <p className="text-red-500 text-sm">{errors.checkIn}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold">Check Out</label>
              <input
                type="date"
                value={form.checkOut}
                onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                className="w-full border rounded-lg p-2"
              />
              {errors.checkOut && (
                <p className="text-red-500 text-sm">{errors.checkOut}</p>
              )}
            </div>
          </div>

          {/* Guests */}
          <div className="mt-4">
            <label className="block font-semibold">Guests</label>
            <input type="Number" value={form.guest} onChange={(e) => setForm({ ...form, guest: e.target.value })} className="w-full border rounded-lg p-2" placeholder="Enter number of guests" />
            {errors.guest && <p className="text-red-500 text-sm">{errors.guest}</p>}
          </div>

          {/* Payment */}
          <div className="mt-6">
            <label className="block text-sm font-bold mb-2">Payment Method</label>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer ${selectedMethod === method.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300"
                    }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={() => {
                      setSelectedMethod(method.id);
                      setForm({ ...form, paymentMethods: method.id });
                    }}
                  />
                  {method.icon}
                  <div>
                    <div className="font-medium">{method.label}</div>
                    <div className="text-sm text-gray-500">
                      {method.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.paymentMethods && (
              <p className="text-red-500 text-sm">{errors.paymentMethods}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <Link href="/rooms">
              <button
                type="button"
                className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
