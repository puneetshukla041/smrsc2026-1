'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// FIXED IMPORTS: Changed '../../..' to '../..'
import Header from '../../components/Header';
import Footer from '../../components/footer';

// Import Content Components
import NearbyHotels from '../../components/visit/nearby';
import PlacesToVisit from '../../components/visit/places';
import VenueInfo from './venue/page'; 

const VisitPage = () => {
  const [activeTab, setActiveTab] = useState('venue');

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 flex flex-col">
        
        {/* === 1. HERO IMAGE === */}
        <div className="w-full px-4 md:px-0 flex justify-center">
          <div 
            className="relative w-full max-w-[1693px] overflow-hidden shadow-2xl"
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

        {/* === 2. NAVIGATION BUTTONS === */}
        <div className="w-full flex flex-wrap justify-start gap-[15px] mt-[200px] px-6 lg:pl-[270px] mb-12">
          {[
            // Updated paths to actual pages if you want redirection, 
            // or keep using state if you want dynamic rendering on the same page.
            // Since this is the main Visit page, redirecting usually makes sense if using separate routes.
            { id: 'venue', label: 'Venue', path: '/visit/venue' },
            { id: 'hotels', label: 'Hotels', path: '/visit/hotels' },
            { id: 'tourism', label: 'Tourism', path: '/visit/tourism' }
          ].map((tab) => (
            <Link
              key={tab.id}
              href={tab.path} 
              style={{
                background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)'
              }}
              className={`
                flex w-[150px] px-6 py-3 justify-center items-center gap-[10px] shrink-0
                rounded-[40px] border border-white cursor-pointer
                text-sm font-semibold uppercase tracking-wider transition-all duration-300
                ${activeTab === tab.id 
                  ? 'text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* === 3. DYNAMIC CONTENT SECTION === */}
        <div className="w-full px-6 lg:pl-[270px] lg:pr-[270px]">
          {activeTab === 'venue' && <VenueInfo />}
          {activeTab === 'hotels' && <NearbyHotels />}
          {activeTab === 'tourism' && <PlacesToVisit />}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default VisitPage;