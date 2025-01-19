import { useState } from "react";
import "tailwindcss/tailwind.css";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="bg-gray-300 dark:bg-gray-800 p-4 flex justify-between items-center transition-all duration-500 ease-in-out">
      <div className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out">
        My Website
      </div>
      <div className="flex-grow text-center mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-9/12 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white border-1 dark:bg-gray-600 text-gray-900 dark:text-gray-100 transition-transform duration-500 ease-in-out transform hover:scale-110"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
