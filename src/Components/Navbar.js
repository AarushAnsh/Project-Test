import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
        <Link to="/" className="text-sm text-gray-700 hover:text-black">
          Home
        </Link>
        <Link to="/about" className="text-sm text-gray-700 hover:text-black">
          About
        </Link>
        <Link
          to="/savedMovie"
          className="text-sm text-gray-700 hover:text-black"
        >
          Saved Movie
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
