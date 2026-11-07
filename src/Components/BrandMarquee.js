"use client";
import React from "react";

// Brand Data with Clean Inline SVGs
const brandLogos = [
  {
    name: "Apple",
    svg: (
      <svg className="h-6 w-auto fill-current text-white" viewBox="0 0 170 170">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.38-6.08-3.6-3.04-7.53-7.83-11.79-14.37-6.41-9.92-11.36-20.73-14.85-32.44-3.49-11.71-5.24-22.95-5.24-33.72 0-14.16 3.57-25.79 10.71-34.89 7.14-9.1 16.23-13.72 27.27-13.85 4.8 0 10.15 1.25 16.05 3.75 5.9 2.5 9.77 3.75 11.61 3.75 1.48 0 5.43-1.32 11.85-3.96 6.42-2.64 11.83-3.86 16.23-3.66 12.74.67 22.75 5.25 30.03 13.74-11.4 6.9-17 16.73-16.8 29.49.2 10.05 4.1 18.3 11.7 24.75 4.3 3.65 9.15 6.15 14.55 7.5-2.6 7.6-6.1 15.2-10.5 22.8zM119.22 31.75c0-7.23 2.65-14.07 7.95-20.52 5.3-6.45 11.95-10.45 19.95-12 0.13.93.2 1.73.2 2.4 0 7.37-2.77 14.37-8.31 21-5.54 6.63-12.28 10.5-20.22 11.6-0.12-0.8-0.2-1.6-0.2-2.48z" />
      </svg>
    ),
  },
  {
    name: "Samsung",
    svg: (
      <svg className="h-5 w-auto fill-current text-white" viewBox="0 0 500 100">
        <text x="0" y="75" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="72" letterSpacing="6">SAMSUNG</text>
      </svg>
    ),
  },
  {
    name: "Xiaomi",
    svg: (
      <svg className="h-6 w-auto fill-current text-white" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="25" fill="#FF6900" />
        <path d="M25 75V25h20v30h10V25h20v50H60V60H45v15H25z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "OnePlus",
    svg: (
      <svg className="h-6 w-auto fill-current text-white" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="none" stroke="currentColor" strokeWidth="10" />
        <text x="35" y="70" fontFamily="sans-serif" fontWeight="bold" fontSize="55" fill="currentColor">1</text>
        <path d="M70 25v15M62.5 32.5h15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vivo",
    svg: (
      <svg className="h-5 w-auto fill-current text-white" viewBox="0 0 400 100">
        <text x="0" y="75" fontFamily="Arial, sans-serif" fontWeight="bold" fontStyle="italic" fontSize="80" letterSpacing="4">vivo</text>
      </svg>
    ),
  },
  {
    name: "Oppo",
    svg: (
      <svg className="h-5 w-auto fill-current text-white" viewBox="0 0 400 100">
        <text x="0" y="75" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="80" letterSpacing="8">oppo</text>
      </svg>
    ),
  },
  {
    name: "Realme",
    svg: (
      <svg className="h-5 w-auto fill-current text-white" viewBox="0 0 400 100">
        <text x="0" y="75" fontFamily="sans-serif" fontWeight="600" fontSize="75" letterSpacing="2">realme</text>
      </svg>
    ),
  },
  {
    name: "Motorola",
    svg: (
      <svg className="h-6 w-auto fill-current text-white" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8"/>
        <path d="M25 65 L40 35 L50 55 L60 35 L75 65" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Infinix",
    svg: (
      <svg className="h-5 w-auto fill-current text-white" viewBox="0 0 400 100">
        <text x="0" y="75" fontFamily="sans-serif" fontWeight="bold" fontSize="75" letterSpacing="4">Infinix</text>
      </svg>
    ),
  },
];

export default function BrandMarquee() {
  return (
    <section className="bg-[#050914] text-white py-12 border-t border-[#172033] overflow-hidden relative">
      
      {/* Background Soft Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end relative z-10">
        <div>
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
            Top Brands
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Choose Your Brand
          </h2>
        </div>
        <a
          href="#"
          className="text-xs text-gray-400 hover:text-white transition flex items-center gap-1 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        >
          View All Brands →
        </a>
      </div>

      {/* Left and Right Gradient Fades */}
      <div className="absolute left-0 top-20 bottom-0 w-24 bg-gradient-to-r from-[#050914] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-20 bottom-0 w-24 bg-gradient-to-l from-[#050914] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Loop with Glowing Cards */}
      <div className="flex w-max animate-marquee gap-8 items-center py-4 relative z-10">
        {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6 py-3 rounded-2xl bg-[#0b0f19] border border-[#172033] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 cursor-pointer shrink-0 group"
          >
            <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
              {brand.svg}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}