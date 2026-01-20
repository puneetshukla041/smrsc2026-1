"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section3 = () => {
  const [page, setPage] = useState(0);

  const images = [
    { id: 1, src: "/images/home/section3/image1.png", title: "SSI Mantra 3" },
    { id: 2, src: "/images/home/section3/image2.png", title: "Advanced Robotics" },
    { id: 3, src: "/images/home/section3/image3.png", title: "Precision Control" },
    { id: 4, src: "/images/home/section3/image4.png", title: "Future of Surgery" },
    { id: 5, src: "/images/home/section3/image5.png", title: "Global Innovation" },
    { id: 6, src: "/images/home/section3/image6.png", title: "Smart Integration" },
    { id: 7, src: "/images/home/section3/image7.png", title: "Scalable Systems" },
  ];

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  const getPosition = (index) => {
    const total = images.length;
    let diff = (index - imageIndex + total) % total;
    
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    
    if (diff === 0) return "center";
    if (diff === -1) return "left";
    if (diff === 1) return "right";
    if (diff < -1) return "far-left";
    return "far-right";
  };

  // --- Animation Configurations ---

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
  };

  const cardVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 30,
      opacity: 1,
      filter: "brightness(1)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.2 },
        filter: { duration: 0.2 }
      }
    },
    left: {
      x: "-105%", 
      scale: 1,
      zIndex: 20,
      opacity: 1,
      filter: "brightness(0.4)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    },
    right: {
      x: "105%", 
      scale: 1,
      zIndex: 20,
      opacity: 1,
      filter: "brightness(0.4)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    },
    "far-left": {
      x: "-180%",
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
      filter: "brightness(0)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.1 }
      } 
    },
    "far-right": {
      x: "180%",
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
      filter: "brightness(0)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.1 }
      }
    }
  };

  const textVariants = {
    center: {
      y: 0,
      opacity: 1,
      transition: { 
        delay: 0.2, 
        duration: 0.6, 
        ease: "easeOut" 
      }
    },
    left: { y: 30, opacity: 0 },
    right: { y: 30, opacity: 0 },
    "far-left": { y: 30, opacity: 0 },
    "far-right": { y: 30, opacity: 0 },
  };

  // --- Styles ---
  const textStyle = {
    color: '#E3F5F6',
    textAlign: 'center',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '64px',
    fontWeight: '600',
    lineHeight: '72px',
    maxWidth: '900px',
  };

  const alphabetStyle = {
    color: '#E1C583',
    fontFamily: 'Roba, sans-serif', // This will now work due to the <style> tag below
    fontSize: '500px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '56px', /* 11.2% */
    textTransform: 'uppercase',
    filter: 'blur(5.45px)',
    userSelect: 'none',
  };

  const leftGlowStyle = {
    width: '312px',
    height: '388px',
    borderRadius: '388px',
    background: '#2233F0',
    filter: 'blur(200px)',
    position: 'absolute',
    left: '-150px', 
    top: '50%',
    transform: 'translate(-20%, -50%)',
    zIndex: -1, 
  };

  const cardLabelStyle = {
    color: '#E1C583',
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '2.25rem', 
    position: 'absolute',
    top: '-50px',
    left: '0px',
    zIndex: 40,
  };

  const indicatorContainerStyle = {
    display: 'inline-flex',
    padding: '0.75rem 1.125rem',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '1.25rem',
    background: 'rgba(227, 245, 246, 0.70)',
    boxShadow: '0 1px 2px 0 rgba(255, 255, 255, 0.25) inset',
    backdropFilter: 'blur(4px)', 
  };

  const arrowBtnClass = "flex w-[48px] h-[48px] p-[10px] justify-center items-center gap-[10px] rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 shrink-0 z-50 active:scale-95 cursor-pointer";

  return (
    <motion.section 
      className="relative w-full overflow-hidden bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
    >
      {/* Font Injection for Roba from public/fonts */}
      <style>{`
        @font-face {
          font-family: 'Roba';
          src: url('/fonts/Roba-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* 1. Header & Background Effects */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
        
        {/* Background Elements (Glow & Letter O) */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <div style={leftGlowStyle} aria-hidden="true" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={alphabetStyle} 
            className="absolute left-[-150px] top-1/2 -translate-y-1/2 z-0"
          >
            O
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-12">
          
          {/* SEQUENCE ITEM 1: First Heading */}
          <motion.h2 
            variants={itemVariants}
            style={textStyle} 
            className="text-4xl md:text-6xl"
          >
            From landmark moments in 2024 and 2025
          </motion.h2>
          
          {/* SEQUENCE ITEM 2: First Line */}
          <motion.div variants={itemVariants} className="flex justify-center items-center py-4">
            <svg width="2" height="219" viewBox="0 0 1 219" fill="none" className="overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0.5" y1="0" x2="0.5" y2="219" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#634B19" />
                  <stop offset="0.5" stopColor="#F2B629" />
                  <stop offset="1" stopColor="#634B19" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.line 
                x1="0.5" x2="0.5" y1="0" y2="219" 
                stroke="url(#lineGradient)" strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* SEQUENCE ITEM 3: Second Heading */}
          <motion.h2 
            variants={itemVariants}
            style={textStyle} 
            className="text-4xl md:text-6xl"
          >
            Now, see what unfolds in 2026
          </motion.h2>

          {/* SEQUENCE ITEM 4: Second Line */}
          <motion.div variants={itemVariants} className="flex justify-center items-center py-4">
            <svg width="2" height="219" viewBox="0 0 1 219" fill="none" className="overflow-visible">
              <motion.line 
                x1="0.5" x2="0.5" y1="0" y2="219" 
                stroke="url(#lineGradient)" strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* SEQUENCE ITEM 5: Carousel Section */}
      <motion.div 
        variants={itemVariants}
        className="relative w-full h-screen flex flex-col items-center justify-start pb-20 overflow-visible"
      >
        <div className="relative flex items-center justify-center w-full overflow-visible px-10">
          
          {/* Left Arrow */}
          <div className="absolute left-10 z-[60]">
            <button onClick={() => paginate(-1)} className={arrowBtnClass}>
              <ChevronLeft className="text-white w-full h-full" />
            </button>
          </div>

          {/* Slider Frame */}
          <div 
            className="relative overflow-visible shrink-0"
            style={{ width: '1380px', height: '720px' }}
          >
            {images.map((img, index) => {
              const position = getPosition(index);
              const labelText = img.id === 6 ? "Concept Experience" : "Experience Zone";

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={position}
                  variants={cardVariants}
                  style={{ willChange: "transform, opacity, filter" }}
                  className="absolute top-0 left-0 w-full h-full bg-transparent"
                >
                  {/* Animated Label */}
                  <motion.div 
                    variants={textVariants} 
                    style={cardLabelStyle}
                  >
                    {labelText}
                  </motion.div>

                  {/* Inner Container */}
                  <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] relative">
                    <img 
                      src={img.src} 
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <div className="absolute right-10 z-[60]">
            <button onClick={() => paginate(1)} className={arrowBtnClass}>
              <ChevronRight className="text-white w-full h-full" />
            </button>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="mt-12 z-50" style={indicatorContainerStyle}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer bg-white ${
                imageIndex === idx ? "w-8" : "w-2 opacity-100"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Section3;