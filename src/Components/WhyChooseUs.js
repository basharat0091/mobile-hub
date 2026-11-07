"use client";
import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "100% Original",
      subtitle: "Genuine Products",
      icon: (
        <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043A3.746 3.746 0 0121 12z" />
        </svg>
      ),
      iconBg: "bg-[#0b241e] border border-emerald-500/20",
    },
    {
      title: "Best Prices",
      subtitle: "Compare & Save",
      icon: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
      ),
      iconBg: "bg-[#281b0a] border border-amber-500/20",
    },
    {
      title: "Fast Delivery",
      subtitle: "Across Pakistan",
      icon: (
        <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-7.5m10.5-11.25h-3.75m3.75 3.75h-3.75m-6-3.75H6.375A2.625 2.625 0 013.75 8.375v4.5m12.75-6.375V6.375a1.125 1.125 0 00-1.125-1.125H9.375" />
        </svg>
      ),
      iconBg: "bg-[#0b1e33] border border-sky-500/20",
    },
    {
      title: "Secure Payments",
      subtitle: "Multiple Options",
      icon: (
        <svg className="w-5 h-5 text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      iconBg: "bg-[#230d2d] border border-fuchsia-500/20",
    },
  ];

  return (
    <section className="bg-[#050811] text-white py-8 px-4 sm:px-8 border-t border-[#172033]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Big Card (Height Compacted) */}
        <div className="lg:col-span-8 relative rounded-[24px] border border-[#1b263b] bg-[#070b16] overflow-hidden flex flex-col md:flex-row items-center p-5 sm:p-7 min-h-[220px]">
          
          {/* Background Gradient Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-purple-900/20 via-blue-900/10 to-transparent pointer-events-none" />

          {/* Left Hero Image (iphone.png) */}
          <div className="relative w-full md:w-1/2 h-40 sm:h-44 flex items-center justify-center shrink-0 mb-4 md:mb-0">
            <img
              src="iphone.png"
              alt="iPhone Showcase"
              className="h-full object-contain drop-shadow-[0_0_25px_rgba(112,0,255,0.25)] scale-105"
            />
          </div>

          {/* Right Text Content inside Card */}
          <div className="w-full md:w-1/2 md:pl-4 z-10 text-left">
            <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-1">
              WHY CHOOSE US
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-1.5">
              Better Phones. Better Life.
            </h2>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-4 max-w-sm">
              We bring you the best smartphones with authentic products, competitive prices and trusted service.
            </p>
            <button className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-sky-400 text-white text-xs font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
              Shop Now <span className="text-xs">→</span>
            </button>
          </div>
        </div>

        {/* Right 4 Independent Features (Compact spacing) */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4 pl-0 lg:pl-2">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-md`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}