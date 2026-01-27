// components/visit/nearby.jsx
'use client';
import React from 'react';

const NearbyHotels = () => {
  // Sample Data
  const hotels = [
    { name: "The Grand Hotel", distance: "0.5 km away" },
    { name: "City Center Suites", distance: "1.2 km away" },
    { name: "Oceanview Resort", distance: "2.0 km away" },
  ];

  return (
    <div className="w-full py-20 px-6 bg-white/5"> {/* Slightly lighter bg to separate sections */}
      <div className="max-w-[1380px] w-full mx-auto">
        <h2 className="text-4xl md:text-6xl text-[#E3F5F6] font-['Blauer_Nue'] font-bold mb-12 uppercase">
          Nearby Hotels
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotels.map((hotel, idx) => (
            <div key={idx} className="bg-[#02091A] border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-[#CE921B] transition-colors cursor-pointer group">
              <div className="w-full h-[200px] bg-white/5 rounded-xl mb-4 group-hover:bg-white/10 transition-colors" />
              <h3 className="text-2xl text-white font-['Manrope'] font-semibold">{hotel.name}</h3>
              <p className="text-white/60 font-['Manrope']">{hotel.distance}</p>
              <button className="mt-auto py-2 px-6 border border-white/20 rounded-full text-white text-sm hover:bg-[#CE921B] hover:border-[#CE921B] transition-all w-max">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyHotels;