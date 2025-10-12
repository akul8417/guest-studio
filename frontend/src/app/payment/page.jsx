'use client';
import React, { useState } from "react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment done using ${paymentMethod.toUpperCase()}!`);
  };

  //coonnect with backend with 


  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Payment Page</h2>

        {/* Payment Method Tabs */}
        <div className="flex justify-around mb-6">
          <button
            className={`py-2 px-4 rounded-xl font-medium ${
              paymentMethod === "card"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            Card
          </button>
          <button
            className={`py-2 px-4 rounded-xl font-medium ${
              paymentMethod === "upi"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setPaymentMethod("upi")}
          >
            UPI
          </button>
          <button
            className={`py-2 px-4 rounded-xl font-medium ${
              paymentMethod === "qr"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setPaymentMethod("qr")}
          >
            QR Code
          </button>
        </div>

        {/* CARD PAYMENT */}
        {paymentMethod === "card" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Card Number</label>
              <input
                type="text"
                required
                placeholder="1234 5678 9012 3456"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Card Holder Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-1">Expiry Date</label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1">CVV</label>
                <input
                  type="password"
                  required
                  placeholder="***"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Pay ₹499
            </button>
          </form>
        )}

        {/* UPI PAYMENT */}
        {paymentMethod === "upi" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Enter UPI ID</label>
              <input
                type="text"
                required
                placeholder="yourname@upi"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
            >
              Pay via UPI
            </button>
          </form>
        )}

        {/* QR PAYMENT */}
        {paymentMethod === "qr" && (
          <div className="flex flex-col items-center space-y-4">
            <p className="font-semibold text-gray-700">
              Scan this QR to pay ₹499
            </p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=merchant@upi&pn=MerchantName&am=499"
              alt="QR Code"
              className="w-40 h-40 border rounded-lg"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Confirm Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
