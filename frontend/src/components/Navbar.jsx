'use client'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Luxury Hotels</h1>
          </div>
          <nav className="flex space-x-2">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-semibold border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">Home</a>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-semibold border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">About</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-semibold border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">Contact</Link>

            {/* <Link href="/map" className="text-gray-700 hover:text-blue-600 transition font-semibold border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">Locations</Link> */}
            <Link href="/rooms" className="text-gray-700 hover:text-blue-600 transition font-semibold border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">Rooms</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition font-semibold border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">
              Services
            </Link>
            <Link href="/login-signup" className="text-gray-700 hover:text-blue-600 transition font-semibold border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;