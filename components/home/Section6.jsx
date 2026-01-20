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
  const subHeadingStyle = {
    width: '100%', 
    height: '47px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#E6E6E6',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
  };

  const mainHeadingStyle = {
    color: '#E3F5F6',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '64px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '86px',
    textTransform: 'uppercase',
  };

  return (
    <section 
      id="section6"
      // UPDATED: 'justify-between' helps distribute space, but 'mt-auto' on the image does the heavy lifting
      className="min-h-[150vh] w-full bg-[#020617] flex flex-col items-center py-20 px-6 relative overflow-hidden"
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
        <div className="max-w-[1380px] w-full flex flex-col items-start gap-2 mt-10">
          <motion.div variants={textVariants} style={subHeadingStyle}>
            Last year we inspired
          </motion.div>

          <motion.h1 variants={textVariants} style={mainHeadingStyle}>
            THIS YEAR, WE TRANSFORM
          </motion.h1>
        </div>

        {/* 2. LARGE IMAGE (Pushed to Bottom) */}
        {/* 'mt-auto' forces this div to the bottom of the flex container */}
        <motion.div
          variants={imageVariants}
          className="mt-auto" 
          style={{
            width: '1380px',
            height: '693px',
            borderRadius: '40px',
            overflow: 'hidden',
            // No absolute positioning here, just standard flow
          }}
        >
          <img 
            src="/images/home/section6/image1.png" 
            alt="SMRSC 2026 Transformation"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </motion.div>
      
    </section>
  );
};

export default Section6;