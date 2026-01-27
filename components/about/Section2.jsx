'use client';
import React, { useState } from 'react';

// Import your separate content files
import AboutTab from './tabs/AboutTab';
import CommitteeTab from './tabs/CommitteeTab';
import GuestsTab from './tabs/GuestsTab';
import FacultyTab from './tabs/FacultyTab';

const Section2 = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("About SMRSC");

  const navItems = [
    "About SMRSC",
    "Organizing Committee",
    "Chief Guests",
    "Faculty"
  ];

  return (
    <section className="w-full min-h-screen relative flex flex-col py-10 bg-transparent">
      
      <div className="w-full max-w-[1723px] mx-auto px-6 md:px-0">
        
        {/* UPDATED: 
           1. 'md:ml-[250px]' -> Maintains your 250px left margin.
           2. 'gap-[130px]' -> Sets exactly 130px space between buttons and content.
        */}
        <div className="flex flex-col gap-[130px] md:ml-[250px]">
          
          {/* === Navigation Buttons === */}
          <div className="flex flex-wrap items-center gap-4">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className="nav-button"
                  style={{
                    display: 'flex',
                    padding: '12px 24px',
                    alignItems: 'center',
                    gap: '10px',
                    borderRadius: '40px',
                    color: '#FFF',
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: isActive ? '1px solid #FFF' : '1px solid transparent',
                    background: isActive 
                      ? 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)'
                      : 'rgba(0, 0, 0, 0.20)',
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* === Dynamic Content Area === */}
          <div className="w-full min-h-[400px]">
            {activeTab === "About SMRSC" && <AboutTab />}
            {activeTab === "Organizing Committee" && <CommitteeTab />}
            {activeTab === "Chief Guests" && <GuestsTab />}
            {activeTab === "Faculty" && <FacultyTab />}
          </div>
          
        </div>

      </div>

      {/* CSS for Hover Effects */}
      <style jsx>{`
        .nav-button:hover {
          border: 1px solid #FFF !important;
          background: linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%) !important;
          transform: scale(1.05);
        }
      `}</style>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap');
      `}</style>
    </section>
  );
};

export default Section2;