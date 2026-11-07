import React from 'react'


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-950 px-8 py-4 text-white">

      {/* Logo */}
      <h1 className="text-2xl font-bold">
        Tech<span className="text-purple-500">Mobile</span>
      </h1>

      {/* Center Menu */}
      <div className="flex gap-8 text-sm">

        <a href="/" className="text-blue-400">Home</a>
        <a href="#mobiles" className="hover:text-blue-400">Mobiles</a>
        <a href="#brands" className="hover:text-blue-400">Brands</a>
        <a href="#about" className="hover:text-blue-400">About</a>

      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search mobile..."
        className="w-48 rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm outline-none focus:border-purple-500"
      />

    </nav>
  );
}