"use client";
import React, { useState, useEffect } from 'react';

const brands = [
  { name: 'iPhone',  color: 'from-slate-500 to-slate-800',   img: 'iphone.png' },
  { name: 'Samsung', color: 'from-blue-500 to-indigo-900',   img: 'phone.png' },
  { name: 'Xiaomi',  color: 'from-gray-500 to-gray-800',    img: 'phone2.png' },
  { name: 'OnePlus', color: 'from-emerald-500 to-teal-900',  img: 'phone.jpg' },
  { name: 'Vivo',    color: 'from-violet-400 to-blue-700',   img: null },
  { name: 'Oppo',    color: 'from-purple-300 to-purple-600', img: null },
];

export default function Brandcard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect (Har 3 seconds ke baad cards agle index par shift honge)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden border-t border-[#172033] bg-[#050914] px-4 py-8 lg:px-6 relative">
      
      {/* Background Soft Glow / Shining Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div 
        className="flex transition-transform duration-700 ease-in-out gap-4 relative z-10"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {brands.concat(brands).map((brand, index) => (
          <div
            key={index}
            className="min-w-[calc(50%-8px)] sm:min-w-[calc(33.333%-11px)] lg:min-w-[calc(16.666%-14px)] flex items-center justify-between rounded-2xl border border-[#172033] bg-[#0b0f19] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] shadow-2xl shrink-0 group"
          >
            <div>
              <h4 className="mb-1 text-sm font-semibold text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                {brand.name}
              </h4>
              <a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition">
                Explore →
              </a>
            </div>

            {brand.img ? (
              <img 
                src={brand.img} 
                alt={brand.name} 
                className="h-20 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-105 transition duration-300" 
              />
            ) : (
              <div className={`h-16 w-10 rounded-lg border border-white/20 bg-gradient-to-br ${brand.color} shadow-[0_0_12px_rgba(59,130,246,0.3)] group-hover:scale-105 transition duration-300`} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}