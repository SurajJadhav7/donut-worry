import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-700 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Dropdown Menu */}
        <Dropdown />

        {/* Centered Logo */}
        <div className="flex items-center justify-center">
          <Link to="/" className="cursor-pointer">
            <img src="donut-worry-main-logo.jpg" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Right Side - Other Navbar Items */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.zomato.com/pune/donut-worry-2-hinjawadi"
            className="hover:text-pink-300"
          >
            Zomato
          </a>
          <a
            href="https://www.swiggy.com/restaurants/donut-worry-mulshi-hinjewadi-pune-665990"
            className="hover:text-pink-300"
          >
            Swiggy
          </a>
          {/* Add more navbar items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
