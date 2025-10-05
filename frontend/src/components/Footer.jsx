'use client'

import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 border-t-2 border-yellow-500">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Welcome to Our Official Website</h3>
          <p className="mb-2">Book Faster with Hotels & Resorts</p>
          <p className="font-bold">Road Trip Planner</p>
        </div>
        {/* Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><Link href="/map" className="hover:text-yellow-500">Location</Link></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-yellow-500">Our Services</Link></li>
          </ul>
        </div>
        {/* Corporate Resort */}
        <div>
          <h3 className="text-xl font-bold mb-4">Corporate Resort</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Corporate Website</a></li>
            <li><a href="#" className="hover:text-yellow-500">Media Center</a></li>
            <li><a href="#" className="hover:text-yellow-500">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-500">Social Responsibility</a></li>
          </ul>
        </div>
        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Social Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">Instagram</a></li>
            <li><a href="#" className="hover:text-yellow-500">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-500">Twitter</a></li>
            <li><a href="#" className="hover:text-yellow-500">Snapchat</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;