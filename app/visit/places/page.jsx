'use client';
import React from 'react';

const PlacesPage = () => {
  return (
    <div className="flex flex-col items-center px-4 w-full animate-fadeIn text-white">
      <div className="w-full max-w-[1377px] py-10">
         <h1 className="text-3xl font-manrope">Places to Visit</h1>
         <p className="mt-4 text-gray-300">Explore the beautiful tourist attractions in New Delhi.</p>
         {/* Add your tourism cards/content here */}
      </div>
    </div>
  );
};
export default PlacesPage;