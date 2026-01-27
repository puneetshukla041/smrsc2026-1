// components/visit/about.jsx
'use client';
import React from 'react';
import Image from 'next/image';

const AboutVenue = () => {
  return (
    <div className="w-full flex flex-col items-center bg-transparent pt-10 pb-20">
      
      <div 
        className="relative w-full max-w-[1693px] overflow-hidden"
        style={{
           height: '833px', 
           borderRadius: '8px 200px', 
        }}
      >
        <Image
          src="/images/visit/image1.png"
          alt="SMRSC Venue"
          fill
          className="object-cover"
          priority
        />
      </div>

    </div>
  );
};

export default AboutVenue;