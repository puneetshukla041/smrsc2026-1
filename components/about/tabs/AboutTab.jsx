'use client';
import React from 'react';
import Image from 'next/image';

const AboutTab = () => {
  
  // Data for the 4 cards matching your specific content
  const conferenceCards = [
    {
      text: "National & International Renowned Faculty",
      src: "/images/about/section2/image1.png" 
    },
    {
      text: "Live robotic surgery in multi speciality",
      src: "/images/about/section2/image2.png" // Assumed naming convention
    },
    {
      text: "Live telesurgery & Teleproctoring",
      src: "/images/about/section2/image3.png" // Assumed naming convention
    },
    {
      text: "Exclusive academic workshops, Presentations & Showcases",
      src: "/images/about/section2/image4.png"
    }
  ];

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* --- 1. Top Text Section --- */}
      <p 
        style={{
          color: '#E3F5F6',
          fontFamily: "'Manrope', sans-serif",
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '40px',
          maxWidth: '1380px', 
          width: '100%',
          marginBottom: '215px'
        }}
      >
        SMRSC is a global multi-specialty robotic surgery conference bringing together surgeons, innovators, educators, and healthcare leaders. Showcasing live procedures, innovation, and collaboration shaping the future of robotic surgery.
      </p>

      {/* --- 2. Video Card Section --- */}
      <div 
        className="relative w-full"
        style={{
          maxWidth: '1380px',
          aspectRatio: '1380/737',
          borderRadius: '40px',
          overflow: 'hidden',
          background: 'lightgray',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        }}
      >
        <video 
          controls 
          className="w-full h-full object-cover"
          style={{ borderRadius: '40px' }}
          src="/videos/Color.mp4" 
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- 3. Heading Section --- */}
      <div style={{ marginTop: '300px', width: '100%', maxWidth: '1380px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '47px',
          color: '#E6E6E6',
          fontFamily: "'Manrope', sans-serif",
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '32px',
        }}>
          A global stage for
        </div>

        <h2 style={{
          color: '#E3F5F6',
          fontFamily: "'Blauer Nue', sans-serif",
          fontSize: '64px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '86px',
          textTransform: 'uppercase',
          marginTop: '0px'
        }}>
          SURGICAL BREAKTHROUGHS
        </h2>
      </div>

      {/* --- 4. Conference at glance Section --- */}
      {/* Container with 200px spacing from above */}
      <div style={{ marginTop: '200px', width: '100%', maxWidth: '1380px' }}>
        
        {/* Section Title */}
        <h3 style={{
          color: '#F8FFFF',
          fontFamily: "'Blauer Nue', sans-serif",
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '40px',
          width: '468px',
          marginBottom: '50px'
        }}>
          Conference at glance
        </h3>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {conferenceCards.map((card, index) => (
            
            // Wrapper for Image + Text Card
            <div key={index} className="flex flex-col gap-4">
              
              {/* --- A. Image Card --- */}
              <div 
                className="relative overflow-hidden group"
                style={{
                  width: '100%',
                  maxWidth: '645px',
                  height: '459px',
                  aspectRatio: '215/153',
                  borderRadius: '20px',
                  background: 'lightgray',
                }}
              >
                <Image 
                  src={card.src}
                  alt={card.text}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* --- B. Text Card (Under the Image) --- */}
              <div 
                style={{
                  display: 'flex',
                  width: '100%',
                  maxWidth: '644px', // Matches the width requested
                  height: '92px',
                  padding: '10px 24px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '4px',
                  borderRadius: '16px',
                  background: 'rgba(0, 0, 0, 0.40)', // Dark transparent background
                  border: '1px solid rgba(255, 255, 255, 0.1)' // Optional subtle border for better visibility
                }}
              >
                <span style={{
                  color: '#E3F5F6',
                  fontFamily: "'Blauer Nue', sans-serif",
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '24px',
                  alignSelf: 'stretch',
                }}>
                  {card.text}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');
      `}</style>
    </div>
  );
};

export default AboutTab;