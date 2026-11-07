"use client";
import React, { useState } from 'react';

const phones = [
  { tag: "Best Seller", name: "iPhone 16 Pro", brand: "Apple", price: "Rs. 399,999", image: "iphone.png", ram: "8GB RAM", storage: "256GB" },
  { tag: "New", name: "Galaxy S26 Ultra", brand: "Samsung", price: "Rs. 349,999", image: "phone.png", ram: "12GB RAM", storage: "256GB" },
  { tag: null, name: "Xiaomi 15 Pro", brand: "Xiaomi", price: "Rs. 259,999", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80", ram: "12GB RAM", storage: "256GB" },
  { tag: null, name: "OnePlus 13", brand: "OnePlus", price: "Rs. 239,999", image: "phone.jpg", ram: "12GB RAM", storage: "256GB" },
  { tag: null, name: "Vivo X200 Pro", brand: "Vivo", price: "Rs. 229,999", image: "phone.png", ram: "12GB RAM", storage: "256GB" },
  { tag: null, name: "Oppo Find X8 Pro", brand: "Oppo", price: "Rs. 219,999", image: "iphone.png", ram: "12GB RAM", storage: "256GB" },
  
  { tag: null, name: "iPhone 16", brand: "Apple", price: "Rs. 319,999", image: "iphone.png", ram: "8GB RAM", storage: "128GB" },
  { tag: null, name: "Galaxy S26+", brand: "Samsung", price: "Rs. 309,999", image: "phone.png", ram: "12GB RAM", storage: "256GB" },
  { tag: "New", name: "Galaxy Z Fold 6", brand: "Samsung", price: "Rs. 459,999", image: "phone.png", ram: "12GB RAM", storage: "512GB" },
  { tag: null, name: "Galaxy Z Flip 6", brand: "Samsung", price: "Rs. 329,999", image: "phone.png", ram: "8GB RAM", storage: "256GB" },
  { tag: null, name: "Xiaomi 15 Ultra", brand: "Xiaomi", price: "Rs. 299,999", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80", ram: "16GB RAM", storage: "512GB" },
  { tag: null, name: "OnePlus 13 Pro", brand: "OnePlus", price: "Rs. 269,999", image: "phone.jpg", ram: "16GB RAM", storage: "512GB" },
  { tag: "Hot", name: "Google Pixel 9 Pro", brand: "Google", price: "Rs. 289,999", image: "phone.png", ram: "16GB RAM", storage: "256GB" },
  { tag: null, name: "Google Pixel 9", brand: "Google", price: "Rs. 239,999", image: "phone.png", ram: "12GB RAM", storage: "128GB" },
  { tag: null, name: "Vivo X200", brand: "Vivo", price: "Rs. 209,999", image: "phone.png", ram: "12GB RAM", storage: "256GB" },
  { tag: null, name: "Oppo Find X8", brand: "Oppo", price: "Rs. 199,999", image: "iphone.png", ram: "12GB RAM", storage: "256GB" },
  { tag: "Gaming", name: "Realme GT 7 Pro", brand: "Realme", price: "Rs. 189,999", image: "phone2.png", ram: "16GB RAM", storage: "512GB" },
  { tag: null, name: "Infinix Zero 40", brand: "Infinix", price: "Rs. 119,999", image: "phone.jpg", ram: "12GB RAM", storage: "256GB" },
  { tag: "Foldable", name: "Tecno Phantom V Fold 2", brand: "Tecno", price: "Rs. 319,999", image: "phone.png", ram: "12GB RAM", storage: "512GB" },
  { tag: null, name: "Huawei Pura 70 Pro", brand: "Huawei", price: "Rs. 339,999", image: "iphone.png", ram: "12GB RAM", storage: "512GB" },
  { tag: null, name: "Honor Magic 7 Pro", brand: "Honor", price: "Rs. 299,999", image: "phone2.png", ram: "16GB RAM", storage: "512GB" },
  { tag: "Unique", name: "Nothing Phone (3)", brand: "Nothing", price: "Rs. 179,999", image: "phone.png", ram: "12GB RAM", storage: "256GB" },
  { tag: "Gaming", name: "Asus ROG Phone 9", brand: "Asus", price: "Rs. 379,999", image: "phone2.png", ram: "16GB RAM", storage: "512GB" },
];

export default function PopularPhones() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= phones.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? Math.max(phones.length - itemsPerPage, 0) : prev - itemsPerPage
    );
  };

  const visiblePhones = phones.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-[#050914] text-white px-6 py-10 border-t border-[#172033] relative overflow-hidden">
      
      {/* Background Soft Glow / Shining Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
              Featured Phones
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-1 drop-shadow-md">
              Popular Right Now
            </h2>
          </div>
          
          {/* Navigation Arrows with Glow */}
          <div className="hidden sm:flex gap-2">
            <button 
              onClick={prevSlide}
              className="h-9 w-9 rounded-full border border-[#172033] bg-[#0b0f19] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition cursor-pointer"
            >
              ‹
            </button>
            <button 
              onClick={nextSlide}
              className="h-9 w-9 rounded-full border border-[#172033] bg-[#0b0f19] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 transition-all duration-500">
          {visiblePhones.map((phone, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-2xl border border-[#172033] bg-[#0b0f19] p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] shadow-2xl group"
            >
              {/* Wishlist Heart Icon */}
              <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition cursor-pointer text-base">
                ♡
              </button>

              <div>
                {/* Tag / Badge */}
                {phone.tag ? (
                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white mb-2 shadow-[0_0_10px_rgba(112,0,255,0.4)]">
                    {phone.tag}
                  </span>
                ) : (
                  <div className="h-5 mb-2"></div>
                )}

                {/* Phone Image */}
                <div className="h-28 flex items-center justify-center my-2">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="max-h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Phone Name & Brand */}
                <h3 className="text-sm font-semibold text-white mt-1 truncate">
                  {phone.name}
                </h3>
                <p className="text-[11px] text-gray-400">
                  {phone.brand}
                </p>

                {/* Price */}
                <p className="text-base font-bold text-white mt-2 drop-shadow-sm">
                  {phone.price}
                </p>

                {/* Specs */}
                <div className="flex items-center justify-between text-[10px] text-gray-400 mt-2 pt-2 border-t border-[#172033]">
                  <span>⚡ {phone.ram}</span>
                  <span>💾 {phone.storage}</span>
                </div>
              </div>

              {/* View Details Button with Glow */}
              <button className="mt-3 w-full rounded-full border border-[#172033] bg-[#050914] py-1.5 text-xs font-medium text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-transparent hover:text-white hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition cursor-pointer">
                View Details →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}