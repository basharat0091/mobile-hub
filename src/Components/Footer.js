"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-white pt-16 pb-8 border-t border-[#172033] relative overflow-hidden">
      
      {/* Background Soft Glow Effects */}
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#172033] relative z-10">
        
        {/* Column 1: Brand Logo & Tagline (With Glowing Icon) */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-sm opacity-70"></div>
              <div className="relative w-8 h-8 rounded-xl bg-[#0b0f19] border border-blue-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">
              Tech<span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">Mobile</span>
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Your Next Phone Awaits
          </p>
        </div>

        {/* Column 2: Quick Links (Shining Blue Header) */}
        <div>
          <h4 className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Mobiles</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Brands</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="text-xs font-semibold tracking-wider text-gray-300 uppercase mb-4">
            Support
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Follow Us (Social Icons with Glow on Hover) */}
        <div>
          <h4 className="text-xs font-semibold tracking-wider text-gray-300 uppercase mb-4">
            Follow Us
          </h4>
          <div className="flex items-center gap-2.5 text-gray-400">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#0b0f19] border border-[#172033] flex items-center justify-center hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#0b0f19] border border-[#172033] flex items-center justify-center hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#0b0f19] border border-[#172033] flex items-center justify-center hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#0b0f19] border border-[#172033] flex items-center justify-center hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition">
              <svg className="w-3.2 h-3.2 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" className="w-8 h-8 rounded-full bg-[#0b0f19] border border-[#172033] flex items-center justify-center hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.65a6.34 6.34 0 0 0 10.86 4.43v-7.18a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.33z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 5: Subscribe to Newsletter (Glowing Button) */}
        <div className="lg:col-span-1">
          <h4 className="text-xs font-semibold tracking-wider text-white uppercase mb-1">
            Subscribe to our Newsletter
          </h4>
          <p className="text-[11px] text-gray-400 mb-3">
            Get the latest updates and offers.
          </p>
          <div className="relative flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-[#0b0f19] border border-[#172033] rounded-full py-2.5 pl-4 pr-12 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition"
            />
            <button className="absolute right-1 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(112,0,255,0.5)] hover:shadow-[0_0_20px_rgba(112,0,255,0.8)] transition cursor-pointer">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.875L5.99 12Zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Copyright and Legal Links */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 relative z-10">
        <p>© 2025 TechMobile. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}