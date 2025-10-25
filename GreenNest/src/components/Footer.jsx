import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex items-start gap-3">
          <img
            src="https://i.ibb.co/pByT0nms/i1.jpg"
            alt="Green Nest Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-semibold text-lg font-serif">Green NEST</h3>
            <p className="text-gray-400 text-sm font-serif">“Think green, act clean.”</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-bold text-lg text-white mb-3 font-serif">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <Link
                to="/about"
                className="text-green-400 hover:text-green-200 transition font-serif"
              >
                About
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div className="flex gap-6 text-2xl">
          <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
          <FaFacebook className="hover:text-blue-400 cursor-pointer transition" />
          <FaPinterest className="hover:text-red-400 cursor-pointer transition" />
        </div>
      </div>

 
      <div className="text-center text-gray-400 text-xs mt-6 border-t border-gray-700 pt-3">
        © 2025 <span className="font-semibold text-white font-serif">GreenNest</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
