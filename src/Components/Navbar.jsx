import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-lg font-bold text-gray-900">
          Forex Class
        </h1>

        {/* CTA Button */}
        <a
          href="#signup"
          className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition"
        >
          Find Out if You Qualified
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
