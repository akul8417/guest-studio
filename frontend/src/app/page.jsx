'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// If using Next.js, import Link from 'next/link'
// import Link from 'next/link';

const images = [
  'h1.jpg', 'h2.jpg', 'h3.jpg', 'h4.jpg', 'h5.jpg', 'h6.jpg', 'h7.jpg', 'h8.jpg', 'h9.jpg',
];

const Page = () => {
  const [count, setCount] = useState(0);
  const [guest, setGuest] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const roomData = [
    { img: 'room1.jpg', title: 'Deluxe Room', desc: 'King-size bed, AC, WiFi, breakfast.', price: '₹2000/night' },
    { img: 'room2.jpg', title: 'Executive Suite', desc: 'Spacious suite, living area, breakfast.', price: '₹3500/night' },
    { img: 'room3.jpg', title: 'Family Room', desc: '2 beds, AC, WiFi, breakfast.', price: '₹2500/night' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br   ">
    
      {/* Booking Section */}
      <section className="  max-w-7xl mx-auto bg-gray-300  rounded-2xl  shadow-2xl px-8 py-8 mt-10 backdrop-blur-md ">
        
      
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          
          {/* Check-in */}
          <div className="flex flex-col items-center ">
            
            <div className="rounded-xl border-4 border-yellow-400 w-full max-w-xs h-28 px-5 py-4 text-black bg-white text-center shadow-md ">
             
              
              <span className="font-semibold text-lg">Check-in</span>
              <label className="block mt-2">
                <span className="text-sm">Date:</span>
                <input type="date" className="ml-2 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </label>
            </div>
          </div>
          {/* Check-out */}
          <div className="flex flex-col items-center">
            <div className="rounded-xl border-4 border-yellow-400 w-full max-w-xs h-28 px-5 py-4 text-black bg-white text-center shadow-md">
              <span className="font-semibold text-lg">Check-out</span>
              <label className="block mt-2">
                <span className="text-sm">Date:</span>
                <input type="date" className="ml-2 border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </label>
            </div>
          </div>
          {/* Room Counter */}
          <div className="flex flex-col items-center">
            <div className="font-bold border-4 border-yellow-400 w-full max-w-xs h-28 bg-white px-5 py-4 flex flex-col items-center justify-center rounded-xl shadow-md">
              <span className="text-lg">Rooms</span>
              <div className="flex gap-2 mt-2">
                <button onClick={() => setCount(count + 1)} className="rounded-lg bg-blue-500 text-white px-3 py-1 hover:bg-blue-700 transition">+</button>
                <span className="text-lg font-semibold">{count}</span>
                <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className="rounded-lg bg-blue-500 text-white px-3 py-1 hover:bg-blue-700 transition">-</button>
              </div>
            </div>
          </div>
          {/* Guest Counter */}
          <div className="flex flex-col items-center">
            <div className="font-bold border-4 border-yellow-400 w-full max-w-xs h-28 bg-white px-5 py-4 flex flex-col items-center justify-center rounded-xl shadow-md">
              <span className="text-lg">Guests</span>
              <div className="flex gap-2 mt-2">
                <button onClick={() => setGuest(guest + 1)} className="rounded-lg bg-blue-500 text-white px-3 py-1 hover:bg-blue-700 transition">+</button>
                <span className="text-lg font-semibold">{guest}</span>
                <button onClick={() => setGuest(guest > 0 ? guest - 1 : 0)} className="rounded-lg bg-blue-500 text-white px-3 py-1 hover:bg-blue-700 transition">-</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-12 rounded-2xl shadow-2xl max-w-7xl mx-auto ">
        <img
          src="https://png.pngtree.com/background/20250215/original/pngtree-modern-interior-design-of-the-luxurious-hotel-restaurant-featuring-soft-armchairs-picture-image_13331131.jpg"
          alt="Hotel Exterior"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            <span className="text-yellow-400">Welcome to Our Hotel & Resort</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md">
            Discover luxury, comfort, and unforgettable experiences in the heart of paradise. Your dream stay starts here.
          </p>
        </div>
      </section>

      {/* Image Slider */}
      <section className="max-w-7xl mx-auto mt-12">
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src={images[currentIndex]} alt="slider" className="w-full h-[400px] object-cover transition-all duration-700" />
        </div>
      </section>

      {/* Discover Section */}
      <section className="max-w-7xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-10">
        <p className="text-blue-700 font-extrabold text-center text-4xl mb-4">Discover by Our Hotel & Resort</p>
        <hr className="mb-4 border-blue-200" />
        <p className="text-center text-lg mb-6 text-gray-700">
          You’re invited to sample the world with Our Hotel & Resort. Designed for the everyday traveler, our hotels offer convenience in hundreds of locations across the globe. Whether you’re in town for business or exploring a new city, we give you what you need for a successful trip.
        </p>
        <div className="flex justify-center">
          <Link href="/map" className="border-4 border-red-500 rounded-lg px-10 py-3 text-blue-700 font-bold text-xl hover:bg-red-50 transition">See Our Location</Link>
        </div>
      </section>

      {/* App Section */}
      <section className="max-w-7xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-10">
        <p className="text-4xl font-bold text-center mb-2 text-blue-700">Book Faster with Our Hotels &</p>
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-700">Resorts App</h1>
        <p className="text-center mb-6 text-gray-700">
          With our award-winning app, you can book stays faster at thousands of hotels worldwide, enjoy convenient in-stay features, and make the most of exciting Our Hotel & Resort Rewards member extras.
        </p>
        {/* Available Rooms */}
        <section className="max-w-6xl mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Available Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {roomData.map((room, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition border border-blue-100">
                <img src={room.img} alt={room.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{room.title}</h3>
                  <p className="text-gray-700 mb-4">{room.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">{room.price}</span>
                    <a href="/booking-form" className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-10">
        <div className="flex flex-col items-center">
          <img src="car3.avif" alt="Road Trip Planner" className="w-[300px] h-[120px] object-cover rounded-lg mb-4 shadow" />
          <p className="text-2xl font-bold mb-2 text-blue-700">Road Trip Planner</p>
          <h1 className="text-center mb-2 text-gray-700">Find Your Stops, Book Your Stays, Hit The Road. It's Easy to Book and Go.</h1>
          <a href="#" className="border-2 border-red-500 rounded-lg px-6 py-2 bg-red-500 text-white font-bold mt-2 hover:bg-red-600 transition">Click Here</a>
        </div>
        <div className="flex flex-col items-center">
          <img src="mobile1.jpg" alt="Mobile App" className="w-[300px] h-[120px] object-cover rounded-lg mb-4 shadow" />
          <h1 className="text-2xl font-bold mb-2 text-blue-700">Mobile App</h1>
          <p className="mb-2 text-gray-700">Book Your Trip For Our Hotel And Resort By Mobile App</p>
          <a href="#" className="border-2 border-red-500 rounded-lg px-6 py-2 bg-red-500 text-white font-bold mt-2 hover:bg-red-600 transition">Click Here</a>
        </div>
      </section>
    </div>
  );
};

export default Page;