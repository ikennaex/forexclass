import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <h1 className="text-base md:text-lg font-bold tracking-wide">
          Digital Assets Insight
        </h1>

        {/* CTA Button */}
        <a
          href="/quiz/1"
          className="px-4 md:px-5 py-2.5 text-sm md:text-sm font-bold text-white bg-green-500 rounded-md hover:bg-green-400 transition"
        >
          Find Out If You Qualify
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
