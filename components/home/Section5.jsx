"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Section5 = () => {
  const specialties = [
    { id: 1, title: "Cardiac", count: "500+" },
    { id: 2, title: "Urology", count: "1200+" },
    { id: 3, title: "Thoracic", count: "350+" },
    { id: 4, title: "Gastroenterology", count: "800+" },
    { id: 5, title: "Head & Neck", count: "450+" },
    { id: 6, title: "Gynecology", count: "1500+" },
    { id: 7, title: "Colorectal", count: "600+" },
    { id: 8, title: "General", count: "1000+" },
  ];

  // --- Styles ---
  const headingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '2.25rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '2.5rem', /* 111.111% */
  };

  const cardStyle = {
    width: '420px',
    height: '140px',
    borderRadius: '20px',
    border: '1px solid #5B6D6E',
    background: 'rgba(9, 9, 9, 0.40)',
    // Transition for border/shadow on hover
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <section 
      id="section5"
      className="min-h-screen w-full bg-[#020617] flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="max-w-[1380px] w-full flex flex-col gap-12">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={headingStyle}
        >
          Robotic surgery Across Specialties
        </motion.h2>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-center xl:justify-start gap-6">
          {specialties.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              
              style={cardStyle}
              className="relative flex flex-col items-center justify-center cursor-pointer group hover:border-[#E3F5F6] hover:shadow-[0_0_20px_rgba(227,245,246,0.2)] overflow-hidden"
            >
              {/* Title (Always Visible) */}
              <h3 className="text-[#E3F5F6] text-2xl font-medium font-['Blauer_Nue'] z-10 transition-transform duration-300 group-hover:-translate-y-3">
                {item.title}
              </h3>

              {/* Hover Content (Surgeries Count) */}
              <div className="absolute top-1/2 left-0 w-full pt-6 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2">
                <span className="text-[#E1C583] text-lg font-bold font-['Manrope']">
                  {item.count}
                </span>
                <span className="text-white/60 text-xs font-['Manrope'] uppercase tracking-wider">
                  Surgeries Performed
                </span>
              </div>

              {/* Gentle Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E3F5F6]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section5;