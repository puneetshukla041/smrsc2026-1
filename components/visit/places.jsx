// components/visit/places.jsx
'use client';
import React from 'react';

const PlacesToVisit = () => {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-[1380px] w-full mx-auto">
        <h2 className="text-4xl md:text-6xl text-[#E3F5F6] font-['Blauer_Nue'] font-bold mb-12 uppercase">
          Places to Visit
        </h2>

        {/* Featured layout: 1 big item, 2 small items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-[600px]">
          
          {/* Main Featured Place */}
          <div className="relative rounded-[40px] overflow-hidden bg-white/10 border border-white/10 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-3xl text-white font-bold mb-2">City Museum</h3>
              <p className="text-white/80">Experience the rich history and culture.</p>
            </div>
          </div>

          {/* Secondary Places */}
          <div className="flex flex-col gap-8 h-full">
            <div className="flex-1 relative rounded-[40px] overflow-hidden bg-white/10 border border-white/10 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute bottom-6 left-8 z-20">
                <h3 className="text-2xl text-white font-bold">Botanical Gardens</h3>
              </div>
            </div>
            <div className="flex-1 relative rounded-[40px] overflow-hidden bg-white/10 border border-white/10 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
               <div className="absolute bottom-6 left-8 z-20">
                <h3 className="text-2xl text-white font-bold">Modern Art Gallery</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlacesToVisit;