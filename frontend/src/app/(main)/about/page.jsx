'use client';
import Link from 'next/link'
import React from 'react'


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
  const position = [28.6139, 77.2090];


const page = () => {
  return (
    <div>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-12 rounded-2xl shadow-2xl max-w-7xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3"
          alt="Hotel Exterior"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            <span className="text-yellow-400">Welcome to Our Hotel</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md">
            Discover luxury, comfort, and unforgettable experiences in the heart of paradise. Your dream stay starts here.
          </p>
        </div>
      </section>
      <section>
        <div>
            <h1 className='text-center font-bold text-blue-700 text-5xl pt-2.5'> Our Hotel Waiting For</h1>
            <p className='text-black text-center px-65 pt-3'>Our Hotels & Resorts makes travel possible for all. From big cities and small towns to beachfront resorts and highway hotels, our 25 trusted brands bring a diverse perspective to the travel experience. With friendly service, thoughtful amenities, and a range of options for the everyday traveler, Wyndham will be there to welcome you wherever you go.</p><br />
            <li><Link href="/map" className='text-center font-bold text-blue-700 text-3xl pt-2.5 px-130 '>HO Locations</Link></li>
           </div>
      </section>
      <section>
        <div>
          <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>
      </section>
      
         
          
           
            
            
       
    </div>
  )
};

export default page;
