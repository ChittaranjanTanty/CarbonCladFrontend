import React from 'react';
import { useState } from 'react';

function Navbar() {
    const[number,setNumber]=useState(6)

  return (
    <nav className="flex items-center justify-between bg-blue-900 px-4 py-1 shadow-md">
      {/* Left Side: Logo Section */}
      <div>
        <img
          src="./images/logo-preview.png"
          alt="Logo"
          className="h-2 w-2 rounded-full object-cover cursor-pointer"
        />
      </div>

      {/* Right Side: Notification and Profile Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
            />
          </svg>
          <button onClick="addNumber"><span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {number}
          </span></button>
        </button>

        {/* Profile Icon */}
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-blue-500 font-semibold">P</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
