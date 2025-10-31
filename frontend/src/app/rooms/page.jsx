'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import usestate from 'usestate';

const HomePage = () => {
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);

  

  const [roomsData, setRoomsData] = useState([]);

  const fetchRooms = () => {
    axios.get('http://localhost:5000/room/getall')
      .then(response => {
        console.log('Fetched rooms:', response.data);
        setRoomsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching rooms:', error);
      });
  }

  useEffect(() => {
    fetchRooms();
  }, [])


  // const roomData = [
  //   { img: 'room1.jpg', title: 'Deluxe Room', desc: 'King-size bed, AC, WiFi, breakfast.', price: '₹2000/night' },
  //   { img: 'room2.jpg', title: 'Executive Suite', desc: 'Spacious suite, living area, breakfast.', price: '₹3500/night' },
  //   { img: 'room3.jpg', title: 'Family Room', desc: '2 beds, AC, WiFi, breakfast.', price: '₹2500/night' },
  //   { img: 'room4.jpg', title: 'Premium Room', desc: 'Luxury amenities, balcony, breakfast.', price: '₹4000/night' },
  //   { img: 'room5.jpg', title: 'Standard Room', desc: 'Queen bed, AC, WiFi.', price: '₹1500/night' },
  //   { img: 'room6.jpg', title: 'Single Room', desc: 'Single bed, AC, WiFi.', price: '₹1200/night' },
  //   { img: 'room7.jpg', title: 'Suite', desc: 'Living room, king bed, breakfast.', price: '₹5000/night' },
  //   { img: 'room8.jpg', title: 'Economy Room', desc: 'Basic amenities, WiFi.', price: '₹1000/night' },
  //   { img: 'room9.jpg', title: 'Economy Room', desc: 'Basic amenities, WiFi.', price: '₹1000/night' },
  //   { img: 'room10.jpg', title: 'Economy Room', desc: 'Basic amenities, WiFi.', price: '₹1000/night' },
  //   { img: 'room11.jpg', title: 'Economy Room', desc: 'Basic amenities, WiFi.', price: '₹1000/night' },
  //   { img: 'room12.jpg', title: 'Economy Room', desc: 'Basic amenities, WiFi.', price: '₹1000/night' },
  // ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] flex items-center justify-center bg-blue-300 mb-10">
        <img src="banner1.jpg" alt="Hotel Banner" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Welcome to Your Dream Stay</h1>
          <p className="text-xl text-white">Book the best rooms at affordable prices</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-wrap gap-6 -mt-24 relative z-20">
        <div className="flex flex-col flex-1 min-w-[180px]">
          <label className="font-semibold text-gray-700 mb-1">Check-in</label>
          <input type="date" className="border border-gray-300 rounded px-3 py-2 focus:outline-blue-400" />
        </div>
        <div className="flex flex-col flex-1 min-w-[180px]">
          <label className="font-semibold text-gray-700 mb-1">Check-out</label>
          <input type="date" className="border border-gray-300 rounded px-3 py-2 focus:outline-blue-400" />
        </div>
        <div className="flex flex-col flex-1 min-w-[120px]">
          <label className="font-semibold text-gray-700 mb-1">Rooms</label>
          <div className="flex items-center gap-2">
            <button onClick={() => setRooms(Math.max(rooms - 1, 1))} className="bg-blue-500 text-white px-2 rounded">-</button>
            <span className="px-3">{rooms}</span>
            <button onClick={() => setRooms(rooms + 1)} className="bg-blue-500 text-white px-2 rounded">+</button>
          </div>
        </div>
        {/* //book new room */}



        <div className="flex flex-col flex-1 min-w-[120px]">
          <label className="font-semibold text-gray-700 mb-1">Guests</label>
          <div className="flex items-center gap-2">
            <button onClick={() => setGuests(Math.max(guests - 1, 1))} className="bg-blue-500 text-white px-2 rounded">-</button>
            <span className="px-3">{guests}</span>
            <button onClick={() => setGuests(guests + 1)} className="bg-blue-500 text-white px-2 rounded">+</button>
          </div>
        </div>
        <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-lg self-end mt-6 hover:bg-green-600 transition">Search</button>
      </section>

      {/* Rooms Section */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Available Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roomsData.map((room, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img src={room.image} alt={room.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-blue-700">{room.roomName}</h3>
                <p className="text-gray-700 mb-1">{room.description}</p>
                <p className='text-gray-500 mb-1'>{room.roomType}</p>
                <p className='text-gray-500 mb-1'>{room.city}</p>
                <p className='text-gray-500 mb-1'>{room.address}</p>
                <p className='text-gray-500 mb-1'>{room.numberOfRooms}</p>

                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">{room.priceperNight}</span>
                  <Link href={"/booking-form/" + room._id} className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage;


