"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Section6 = () => {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // --- Styles ---
  // Note: Font sizes/Dimensions moved to className for responsiveness. 
  // Base styles kept for font-family and colors.

  const subHeadingBaseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#E6E6E6',
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 500,
  };

  const mainHeadingBaseStyle = {
    color: '#E3F5F6',
    fontFamily: '"Blauer Nue", sans-serif',
    fontWeight: 600,
    textTransform: 'uppercase',
  };

  return (
    <section 
      id="section6"
      // UPDATED: min-h-screen for mobile, md:min-h-[150vh] for desktop
      className="min-h-screen md:min-h-[150vh] w-full bg-[#020617] flex flex-col items-center py-10 md:py-20 px-6 relative overflow-hidden"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');
        
        @font-face {
          font-family: 'Blauer Nue';
          src: url('/fonts/BlauerNue.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* Main Animation Container */}
      <motion.div 
        className="w-full flex flex-col items-center h-full flex-grow"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        
        {/* 1. HEADINGS (Aligned Top) */}
        <div className="max-w-[1380px] w-full flex flex-col items-start gap-2 mt-4 md:mt-10">
          <motion.div 
            variants={textVariants} 
            style={subHeadingBaseStyle}
            // UPDATED: Mobile text-xl, Desktop text-[32px]
            className="w-full h-auto md:h-[47px] text-xl md:text-[32px] leading-relaxed md:leading-[32px]"
          >
            Last year we inspired
          </motion.div>

          <motion.h1 
            variants={textVariants} 
            style={mainHeadingBaseStyle}
            // UPDATED: Mobile text-4xl, Desktop text-[64px]
            className="text-4xl leading-tight md:text-[64px] md:leading-[86px]"
          >
            THIS YEAR, WE TRANSFORM
          </motion.h1>
        </div>

        {/* 2. LARGE IMAGE (Pushed to Bottom) */}
        {/* 'mt-auto' forces this div to the bottom of the flex container */}
        <motion.div
          variants={imageVariants}
          className="mt-auto pt-10 md:pt-0" 
          style={{
            overflow: 'hidden',
          }}
        >
          {/* UPDATED: Wrapper div for responsive sizing */}
          <div 
             className="relative w-full h-[300px] md:w-[1380px] md:h-[693px] rounded-[20px] md:rounded-[40px] overflow-hidden"
          >
            <img 
              src="/images/home/section6/image1.png" 
              alt="SMRSC 2026 Transformation"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </motion.div>
      
    </section>
  );
};

export default Section6;