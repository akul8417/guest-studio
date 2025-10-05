'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-800 hover:text-blue-600 transition">
              City Guest house
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className={`md:flex md:space-x-4 items-center ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-white shadow-md p-4' : 'hidden md:block'}`}>
            <Link href="/" className="block md:inline-block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Home
            </Link>
            <Link href="/about" className="block md:inline-block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              About
            </Link>
            <Link href="/contact" className="block md:inline-block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Contact
            </Link>
            <Link href="/rooms" className="block md:inline-block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Rooms
            </Link>
            <Link href="/services" className="block md:inline-block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Services
            </Link>
            <Link href="/login-signup" className="block md:inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;