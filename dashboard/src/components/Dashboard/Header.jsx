import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo / App Name */}
      <div className="flex items-center space-x-2">
        <img src="/logo192.png" alt="App Logo" className="w-8 h-8" />
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Profile */}
      <div className="relative">
        <button
          className="flex items-center space-x-2 focus:outline-none"
          onClick={toggleDropdown}
        >
          <FaUserCircle className="text-3xl" />
          <span>User</span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
