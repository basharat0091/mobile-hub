"use client";
import { useState, useEffect } from "react";

export default function Herosection() {
  const phones = [
    {
      brand: "APPLE",
      name: "iPhone 16 Pro",
      desc: "Titanium. So strong.\nSo light. So Pro.",
      price: "Rs. 399,999",
      image: "iphone.png",
    },
    {
      brand: "SAMSUNG",
      name: "Galaxy S26 Ultra",
      desc: "Epic power with built-in S Pen and AI camera.",
      price: "Rs. 349,999",
      image: "phone.png",
    },
    {
      brand: "XIAOMI",
      name: "Xiaomi 15 Pro",
      desc: "Leica professional optics and extreme battery performance.",
      price: "Rs. 259,999",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === phones.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? phones.length - 1 : prev - 1));
  };

  // Auto slide effect (Har 4 seconds ke baad slide khud change hogi)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentPhone = phones[currentIndex];

  return (
    <div className="relative min-h-[520px] overflow-hidden bg-[#050914] text-white">

      {/* Background Glow */}
      <div className="absolute right-1/4 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-3">

        {/* Left Side */}
        <div className="z-10">

          <span className="inline-block rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Latest & Greatest
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            The Future
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
              In Your Hand
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-gray-400">
            Discover the latest smartphones from top brands.
            Powerful performance, stunning cameras and
            a smarter tomorrow.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">

            <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-7 py-3 font-medium transition hover:scale-105 cursor-pointer">
              Explore Mobiles →
            </button>

            <button 
              onClick={() => setShowVideo(true)}
              className="rounded-full border border-purple-500 px-6 py-3 text-sm transition hover:bg-purple-500/10 cursor-pointer"
            >
              ▶ Watch Video
            </button>

          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm">

            <div>
              <p className="font-semibold text-white">200MP</p>
              <p className="mt-1 text-gray-400">Ultra Camera</p>
            </div>

            <div className="border-l border-gray-700 pl-5">
              <p className="font-semibold text-white">5000mAh</p>
              <p className="mt-1 text-gray-400">Long Battery</p>
            </div>

            <div className="border-l border-gray-700 pl-5">
              <p className="font-semibold text-white">Snapdragon 8 Gen 3</p>
              <p className="mt-1 text-gray-400">Ultimate Performance</p>
            </div>

          </div>
        </div>

        {/* Center Mobile Image */}
        <div className="relative flex items-center justify-center lg:col-span-1">

          <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

          <img
            key={currentIndex}
            src={currentPhone.image}
            alt={currentPhone.name}
            className="h-[520px] w-full max-w-[300px] rounded-3xl object-cover drop-shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-all duration-700"
          />

        </div>

        {/* Right Side Product Details */}
        <div className="z-10 lg:pl-8">

          <p className="text-sm font-medium tracking-widest text-blue-400">
            {currentPhone.brand}
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            {currentPhone.name}
          </h2>

          <p className="mt-4 leading-7 text-gray-400 whitespace-pre-line">
            {currentPhone.desc}
          </p>

          <h3 className="mt-5 text-2xl font-semibold">
            {currentPhone.price}
          </h3>

          <button className="mt-5 rounded-full border border-blue-500 px-7 py-3 text-sm transition hover:bg-blue-600 cursor-pointer">
            View Details →
          </button>

          {/* Slider Arrows */}
          <div className="mt-10 flex items-center gap-5 text-sm text-gray-400">
            <button 
              onClick={prevSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition cursor-pointer font-bold"
            >
              ‹
            </button>
            <span className="text-white font-semibold">
              {currentIndex + 1} / {phones.length}
            </span>
            <button 
              onClick={nextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition cursor-pointer font-bold"
            >
              ›
            </button>
          </div>

        </div>

      </div>

      {/* Video Modal Popup */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0b0c10] border border-gray-800 p-4 shadow-2xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">TechMobile Showcase Video</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="text-gray-400 hover:text-white text-xl font-bold px-2 py-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden flex items-center justify-center">
              <a 
                href="https://www.youtube.com/shorts/SJ-IqcjjdXA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-sm hover:underline flex items-center gap-2"
              >
                ▶ Watch YouTube Short
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}